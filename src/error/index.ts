import { W } from "../constants/WindowApi";
import { config } from "../config";
import { AskPriority, ReportMsgType } from "src/typings/types";

export default class ErrorTrace {
  // 捕获运行时错误
  private globalUnCaughtError() {
    W.onerror = (
      message: Event | string,
      source: string | undefined,
      lineno: number | undefined,
      colno: number | undefined,
      error: Error | undefined
    ): boolean => {
      console.log("全局未捕获异常", message);
      const errorInfo = JSON.stringify({
        source,
        lineno,
        colno,
        error,
        message,
      });

      //通过错误信息还原sourcemap源文件地址
      console.log("运行时错误", errorInfo);
      config.reportClient.sendToAnalytics(
        AskPriority.URGENT,
        errorInfo,
        ReportMsgType.WINDOW_RUNTIME_ERROR
      );
      return true;
    };
  }

  //资源挂载失败 如404png
  private resouceError() {
    // 设置useCapture为true，优先于其它同类listener捕获
    W.addEventListener(
      "error",
      function (e: ErrorEvent) {
        if (e.target !== W) {
          console.log("资源加载错误", e.target);
          config.reportClient.sendToAnalytics(
            AskPriority.IDLE,
            (<HTMLElement>e.target).outerHTML,
            ReportMsgType.RESOURCE_ERROR
          );
        }
      },
      true
    );
  }

  //异步Promise错误
  private promiseError() {
    W.addEventListener(
      "unhandledrejection",
      function (e) {
        // 防止默认处理（例如将错误输出到控制台）
        console.log(e.reason);
        config.reportClient.sendToAnalytics(
          AskPriority.URGENT,
          e.reason + "",
          ReportMsgType.PROMISE_ERROR
        );
        e.preventDefault();
      },
      true
    );
  }

  // iframe错误
  private iframeError() {
    const frames = W.frames;
    for (let i = 0; i < frames.length; i++) {
      frames[i].addEventListener(
        "error",
        (e) => {
          console.log("addEventListener");
          console.log(e);
        },
        true
      );

      frames[i].addEventListener(
        "unhandledrejection",
        function (e) {
          console.log("unhandledrejection");
        },
        true
      );
    }
  }

  public run() {
    this.globalUnCaughtError();
    this.resouceError();
    this.promiseError();
  }
}
