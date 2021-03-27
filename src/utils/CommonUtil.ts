import { W } from "../constants/WindowApi";

export const roundByTwo = (num: number) => {
  return parseFloat(num.toFixed(2));
};

export const convertToKB = (bytes: number): number | null => {
  if (typeof bytes !== "number") {
    return null;
  }
  return roundByTwo(bytes / Math.pow(1024, 2));
};

/**
 * PushTask to requestIdleCallback
 * 高效利用每一帧进行数据的收集
 */
export const pushTask = (cb: any): void => {
  if ("requestIdleCallback" in W) {
    (W as any).requestIdleCallback(cb, { timeout: 3000 });
  } else {
    cb();
  }
};

export function jsonStringfy(o: object): string {
  let cache: any[] | null = [];
  var str = JSON.stringify(o, function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache?.indexOf(value) !== -1) {
        // 移除
        return;
      }
      // 收集所有的值
      cache?.push(value);
    }
    return value;
  });
  cache = null; // 清空变量，便于垃圾回收机制回收
  return str;
}
