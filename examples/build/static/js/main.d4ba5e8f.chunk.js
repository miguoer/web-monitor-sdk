(this.webpackJsonpexamples=this.webpackJsonpexamples||[]).push([[0],[,,,,function(e,n){var o,r;!function(e){e[e.URGENT=1]="URGENT",e[e.IDLE=2]="IDLE"}(o||(o={})),function(e){e.NORMAL="NORMAL",e.PROMISE_ERROR="PROMISE_ERROR",e.WINDOW_RUNTIME_ERROR="WINDOW_RUNTIME_ERROR",e.RESOURCE_ERROR="RESOURCE_ERROR",e.PERFORMANCE_TIMING="PERFORMANCE_TIMING",e.PERFORMANCE_VITALS="PERFORMANCE_VITALS"}(r||(r={}));var t=window,i=t.navigator,s=function(){function e(e){var n=e.logUrl;if(!n)throw new Error("\u8bf7\u4f20\u9012\u8981\u8bb0\u5f55\u6570\u636e\u7684\u8def\u7531~");this.logUrl=n}return e.prototype.sendToAnalytics=function(e,n,r,t){var s=this.logUrl;t&&(s=t),console.log("\u8def\u7531",s),console.log("typeof body",typeof n);var c={type:r,content:n};try{if(e==o.URGENT){var l=new XMLHttpRequest;l.open("post",s,!0),l.setRequestHeader("Content-Type","application/json"),l.send(JSON.stringify(c)),l.onload=function(e){l=null}}else if(e==o.IDLE)if(i.sendBeacon)navigator.sendBeacon(s,JSON.stringify(c));else{var a=new Image;a.src=s+"?body="+JSON.stringify(c),a.onload=function(){a=null}}}catch(o){console.log(o)}},e}(),c=function(e){console.log(e)},l={reportClient:new s({logUrl:"log"}),isResourceTiming:!1,isElementTiming:!1,maxTime:15e3},a=function(){function e(){}var n=e.prototype;return n.globalUnCaughtError=function(){t.onerror=function(e,n,t,i,s){console.log("\u5168\u5c40\u672a\u6355\u83b7\u5f02\u5e38",e);var c=JSON.stringify({source:n,lineno:t,colno:i,error:s,message:e});return console.log("\u8fd0\u884c\u65f6\u9519\u8bef",c),l.reportClient.sendToAnalytics(o.URGENT,c,r.WINDOW_RUNTIME_ERROR),!0}},n.resouceError=function(){t.addEventListener("error",(function(e){e.target!==t&&(console.log("\u8d44\u6e90\u52a0\u8f7d\u9519\u8bef",e.target),l.reportClient.sendToAnalytics(o.IDLE,e.target.outerHTML,r.RESOURCE_ERROR))}),!0)},n.promiseError=function(){t.addEventListener("unhandledrejection",(function(e){console.log(e.reason),l.reportClient.sendToAnalytics(o.URGENT,e.reason+"",r.PROMISE_ERROR),e.preventDefault()}),!0)},n.iframeError=function(){for(var e=t.frames,n=0;n<e.length;n++)e[n].addEventListener("error",(function(e){console.log("addEventListener"),console.log(e)}),!0),e[n].addEventListener("unhandledrejection",(function(e){console.log("unhandledrejection")}),!0)},n.run=function(){this.globalUnCaughtError(),this.resouceError(),this.promiseError()},e}();e.exports=function(e){void 0===e&&(e={});var n=e.logUrl;if(!n)throw new Error("Web\u7cfb\u7edf\u7cfb\u7edf\u76d1\u63a7\u5e73\u53f0\uff0c\u521d\u59cb\u5316\u672a\u4f20\u9012logUrl");var o=new s({logUrl:n});l.reportClient=o,this.reportClient=o,l.analyticsTracker=e.analyticsTracker||c,l.isResourceTiming=!!e.resourceTiming,l.isElementTiming=!!e.elementTiming,l.maxTime=e.maxMeasureTime||l.maxTime,e.captureError&&(new a).run()}},,,,,function(e,n,o){},function(e,n,o){},,function(e,n,o){"use strict";o.r(n);var r=o(1),t=o.n(r),i=o(3),s=o.n(i),c=(o(9),o(4)),l=o.n(c),a=o.p+"static/media/logo.6ce24c58.svg",u=(o(10),o(0));setTimeout((function(){console.log(index)}),2e3);var R=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("img",{src:a,className:"App-logo",alt:"logo"}),Object(u.jsxs)("p",{children:["Edit ",Object(u.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(u.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},E=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,13)).then((function(n){var o=n.getCLS,r=n.getFID,t=n.getFCP,i=n.getLCP,s=n.getTTFB;o(e),r(e),t(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(t.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root")),new l.a({captureError:!0,logUrl:"http://localhost:8000/monitor/data-upload"}),E()}],[[12,1,2]]]);