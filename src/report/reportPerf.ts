import { config } from "../config";
import { getNavigatorInfo } from "../utils/getNavigatorInfo";
import { visibility } from "../utils/onVisibilityChange";
import { pushTask } from "../utils/CommonUtil";
import { getVitalsScore } from "../utils/vitalsScore";
import { AskPriority, ReportMsgType } from "src/typings/types";

/**
 * Sends the User timing measure to analyticsTracker
 */
export const reportPerf = function (
  measureName: string,
  data: any,
  customProperties?: object
): void {
  pushTask(() => {
    //console.log('[ measureName ]', measureName);
    // 当页面被隐藏的时候不报告具体数据
    if (
      (visibility.isHidden && measureName.indexOf("Final") < 0) ||
      !config.analyticsTracker
    ) {
      return;
    }
    // Send metric to custom Analytics service
    const statstic = {
      metricName: measureName,
      data,
      eventProperties: customProperties || {},
      navigatorInformation: getNavigatorInfo(),
      vitalsScore: getVitalsScore(measureName, data),
    };
    config.reportClient.sendToAnalytics(
      AskPriority.IDLE,
      JSON.stringify(statstic),
      ReportMsgType.PERFORMANCE_TIMING
    );

    config.analyticsTracker(statstic);
  });
};
