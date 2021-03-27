import { WP } from "../constants/WindowApi";
import { isPerformanceSupported } from "../utils/SystemUtil";
import { logData } from "../report/log";

/**
 * Navigation Timing API 参考文档
 * Navigation Timing API provides performance metrics for HTML documents.
 * w3c.github.io/navigation-timing/
 * developers.google.com/web/fundamentals/performance/navigation-and-resource-timing
 */
export const getResourceTiming = (): void => {
  if (!isPerformanceSupported()) {
    return;
  }
  const entries = performance.getEntriesByType("resource");
  for (const entry of entries) {
    // PerformanceResourceTiming对象扩展了PerformanceEntry对象并新增了很多属性
    logData("resourceTiming", entry);
  }
};
