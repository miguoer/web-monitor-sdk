import { ReportHandler } from "web-vitals";

const reportWebVitals = (reportHandler: ReportHandler) => {
  if (reportHandler && reportHandler instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(reportHandler);
      getFID(reportHandler);
      getFCP(reportHandler);
      getLCP(reportHandler);
      getTTFB(reportHandler);
    });
  }
};

export default reportWebVitals;
