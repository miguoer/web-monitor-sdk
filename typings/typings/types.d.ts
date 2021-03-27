export interface INavigationTiming {
    fetchTime?: number;
    workerTime?: number;
    totalTime?: number;
    downloadTime?: number;
    timeToFirstByte?: number;
    headerSize?: number;
    dnsLookupTime?: number;
    tcpTime?: number;
    whiteTime?: number;
    domTime?: number;
    loadTime?: number;
    parseDomTime?: number;
}
export declare type EffectiveConnectionType = "2g" | "3g" | "4g" | "5g" | "slow-2g" | "lte";
export interface INetworkInformation {
    downlink?: number;
    effectiveType?: EffectiveConnectionType;
    onchange?: () => void;
    rtt?: number;
    saveData?: boolean;
}
export declare type IUploadData = number | INavigationTiming | INetworkInformation;
export interface INavigatorInfo {
    deviceMemory?: number;
    hardwareConcurrency?: number;
    isLowEndDevice?: boolean;
    isLowEndExperience?: boolean;
    serviceWorkerStatus?: "controlled" | "supported" | "unsupported";
}
export declare type IVitalsScore = "good" | "needsImprovement" | "poor" | null;
export interface IAnalyticsTrackerOptions {
    metricName: string;
    data: IUploadData;
    eventProperties: object;
    navigatorInformation: INavigatorInfo;
    vitalsScore: IVitalsScore;
}
export interface IInitOptions {
    captureError?: boolean;
    resourceTiming?: boolean;
    elementTiming?: boolean;
    analyticsTracker?: (options: IAnalyticsTrackerOptions) => void;
    maxMeasureTime?: number;
    logUrl?: string;
}
export interface IReportClient {
    sendToAnalytics(level: AskPriority, body: string, type: ReportMsgType): void;
}
/**
 * @param isResourceTiming - 是否开启资源数据
 * @param isElementTiming - 是否开启性能数据
 * @param analyticsTracker - 自定义分析工具
 * @param maxTime - 最大请求时间
 * @interface 系统配置接口
 * @public
 */
export interface IClientConfig {
    reportClient: IReportClient;
    isResourceTiming: boolean;
    isElementTiming: boolean;
    analyticsTracker?: (options: IAnalyticsTrackerOptions) => void;
    maxTime: number;
}
export interface IPerfObservers {
    [measureName: string]: any;
}
export declare enum AskPriority {
    URGENT = 1,
    IDLE = 2
}
export declare enum ReportMsgType {
    NORMAL = "NORMAL",
    PROMISE_ERROR = "PROMISE_ERROR",
    WINDOW_RUNTIME_ERROR = "WINDOW_RUNTIME_ERROR",
    RESOURCE_ERROR = "RESOURCE_ERROR",
    PERFORMANCE_TIMING = "PERFORMANCE_TIMING",
    PERFORMANCE_VITALS = "PERFORMANCE_VITALS"
}
