interface Navigator {
    estimate: any;
    storage: any;
    deviceMemory?: number;
    hardwareConcurrency?: number;
    connection?: string;
    effectiveType?: string;
    serviceWorker?: {
        controller?: string;
    };
    sendBeacon?: any;
}
export declare const W: Window & typeof globalThis;
export declare const C: Console;
export declare const D: Document;
export declare const WN: Navigator;
export declare const WP: Performance;
export declare const getDM: () => number;
export declare const getHC: () => number;
export {};
