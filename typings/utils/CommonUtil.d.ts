export declare const roundByTwo: (num: number) => number;
export declare const convertToKB: (bytes: number) => number | null;
/**
 * PushTask to requestIdleCallback
 * 高效利用每一帧进行数据的收集
 */
export declare const pushTask: (cb: any) => void;
export declare function jsonStringfy(o: object): string;
