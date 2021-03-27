import { D } from "./constants/WindowApi";
import { IInitOptions, IReportClient } from "./typings/types";
import ReportClient from "./report/ReportClient";
import analyticsTracker from "./report/analyticsTracker";
import { config } from "./config";
import { isPerformanceSupported } from "./utils/SystemUtil";
import { logData } from "./report/log";
import { getNavigationTiming } from "./performance/getNavigationTiming";
import { getResourceTiming } from "./performance/getResourceTiming";
import reportWebVitals from "./report/reportWebVitals";
import { reportPerf } from "./report/reportPerf";
import { didVisibilityChange } from "./utils/onVisibilityChange";
import { getNetworkInformation } from "./utils/getNetworkInformation";

import ErrorTrace from "./error/index";

export default class WebMonitor {
  private reportClient: IReportClient;

  constructor(options: IInitOptions = {}) {
    const logUrl = options.logUrl;
    if (!logUrl) {
      throw new Error(`Web系统系统监控平台，初始化未传递logUrl`);
    }

    //向后台输送数据
    const reportClient = new ReportClient({
      logUrl,
    });

    config.reportClient = reportClient;

    // 外部可访问  通过这个客户端上报数据
    this.reportClient = reportClient;

    //集合数据汇总
    const _analyticsTracker = options.analyticsTracker;
    if (_analyticsTracker) {
      config.analyticsTracker = _analyticsTracker;
    } else {
      config.analyticsTracker = analyticsTracker;
    }

    config.isResourceTiming = !!options.resourceTiming;
    config.isElementTiming = !!options.elementTiming;
    config.maxTime = options.maxMeasureTime || config.maxTime;

    if (options.captureError) {
      //开启错误监控上报
      const errorTrace = new ErrorTrace();
      errorTrace.run();
    }
    this.initPerformance(options);

    if (typeof D.hidden !== "undefined") {
      // Opera 12.10 and Firefox 18 and later support
      D.addEventListener(
        "visibilitychange",
        didVisibilityChange.bind(this, null)
      );
    }
  }

  private initPerformance(options?: IInitOptions) {
    if (!isPerformanceSupported()) {
      console.log("浏览器不支持性能指标");
      return;
    }

    logData("navigationTiming", getNavigationTiming());

    if (options?.resourceTiming) {
      getResourceTiming();
    }
    //记录用户的网速
    logData("networkInformation", getNetworkInformation());
    reportWebVitals((data) => {
      reportPerf(data.name.toLocaleLowerCase(), data.value);
    });
  }
}
