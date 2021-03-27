/**
 * 上报的客户端
 */
import { AskPriority, IReportClient, ReportMsgType } from "../typings/types";
import { W, WN } from "../constants/WindowApi";

//上报地址
type TrackerOptions = {
  logUrl: string;
};

class ReportClient implements IReportClient {
  private logUrl: string;
  constructor(options: TrackerOptions) {
    // console.log('⏰', options);
    const { logUrl } = options;
    if (logUrl) {
      this.logUrl = logUrl;
    } else {
      throw new Error("请传递要记录数据的路由~");
    }
  }
  public sendToAnalytics(
    level: AskPriority,
    body: string,
    type: ReportMsgType,
    uri?: string
  ) {
    let logurl = this.logUrl;
    //临时更换其他url
    if (uri) {
      logurl = uri;
    }
    console.log("路由", logurl);
    console.log("typeof body", typeof body);
    const params = {
      type: type,
      content: body,
    };

    try {
      if (level == AskPriority.URGENT) {
        if (!!W.fetch) {
          fetch(logurl, {
            body: JSON.stringify(params),
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            keepalive: true,
          }).catch(() => {
            // 防止promise捕获导致死循环
            console.log("上报异常了");
          });
        } else {
          let xhr: XMLHttpRequest | null = new XMLHttpRequest();
          xhr.open("post", logurl, true);
          // 设置请求头
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(JSON.stringify(params)); // 发送参数
          xhr.onload = function (e) {
            //   if (this.status == 200 || this.status == 304) {
            //     alert(this.responseText);
            //   }
            //及时清理以防多次创建
            xhr = null;
          };
        }
      } else if (level == AskPriority.IDLE) {
        if (!!WN.sendBeacon) {
          navigator.sendBeacon(logurl, JSON.stringify(params));
        } else {
          let img: HTMLImageElement | null = new Image();
          img.src = `${logurl}?body=${JSON.stringify(params)}`;
          img.onload = function () {
            //统计完成收回创建的元素防止内存泄露
            img = null;
          };
        }
      }
    } catch (e) {
      // 防止死循环调用
      console.log(e);
    }
  }
}
export default ReportClient;
