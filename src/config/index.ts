import ReportClient from "../report/ReportClient";
import { IClientConfig } from "../typings/types";

export const config: IClientConfig = {
  // Metrics
  reportClient: new ReportClient({ logUrl: "log" }),
  isResourceTiming: false,
  isElementTiming: false,
  // Logging
  maxTime: 15000,
};
