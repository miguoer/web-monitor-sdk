import { INavigatorInfo } from "../typings/types";
/**
 * 如下信息来源于 window.navigator:
 * 1. Device Memory
 * 2. Hardware Concurency
 * 3. Status of the service worker:
 *     - controlled: a service worker is controlling the page
 *     - supported: the browser supports service worker
 *     - unsupported: the user's browser does not support service worker
 */
export declare const getNavigatorInfo: () => INavigatorInfo;
