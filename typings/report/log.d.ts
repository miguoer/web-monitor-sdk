export declare const logData: (measureName: string, metric: any, customProperties?: object | undefined) => void;
/**
 * Dispatches the metric duration into internal logs
 * and the external time tracking service.
 */
export declare const logMetric: (duration: number, measureName: string, customProperties?: object | undefined) => void;
