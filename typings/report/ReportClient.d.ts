/**
 * 上报的客户端
 */
import { AskPriority, IReportClient, ReportMsgType } from "../typings/types";
declare type TrackerOptions = {
    logUrl: string;
};
declare class ReportClient implements IReportClient {
    private logUrl;
    constructor(options: TrackerOptions);
    sendToAnalytics(level: AskPriority, body: string, type: ReportMsgType, uri?: string): void;
}
export default ReportClient;
