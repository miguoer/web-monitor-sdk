export declare const visibility: {
    isHidden: boolean;
};
/**
 * From visibilitychange listener it saves only when
 * the page gets hidden, because it's important to not
 * use the wrong "hidden" value when send timing or logging.
 */
export declare const didVisibilityChange: (cb: Function | null) => void;
