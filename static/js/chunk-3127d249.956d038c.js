(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3127d249"],{"0c80":function(e,t,n){"use strict";var a=n("f183"),r=n("7855"),c=n("4705"),o=n("ec1c"),s=n("0239"),i=n("ae7c"),u=(n("b7b4"),n("468f"),n("0e87")),p=n("b2a2"),l=function(e){Object(o["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;Object(a["a"])(this,n);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o)),Object(i["a"])(Object(c["a"])(e),"postEvent",null),e}return Object(r["a"])(n,[{key:"created",value:function(){window.addEventListener("message",this.handlePostMessage,!1)}},{key:"destroyed",value:function(){window.removeEventListener("message",this.handlePostMessage)}},{key:"postMessage",value:function(e){"string"===e&&e.constructor===String&&(window.parent||window).postMessage(e,"*")}},{key:"handlePostMessage",value:function(e){var t;if(e.data&&"string"===typeof e.data&&e.data.constructor===String){this.postEvent=e;var n=JSON.parse(e.data);switch(n.event){case"design-font":console.log("修改字体大小"),document.documentElement.style.fontSize=(null===(t=n.param)||void 0===t?void 0:t.fontSize)||"100px";break;default:this.handleMessage(n)}}}},{key:"handleMessage",value:function(e){}},{key:"postMessageCall",value:function(e,t){if(this.postEvent){var n={event:e,param:t};this.postEvent.source.postMessage(JSON.stringify(n),this.postEvent.origin)}}}]),n}(p["Component"]);l=Object(u["a"])([p["component"]],l),t["a"]=l},"27b1":function(e,t,n){},"9af1":function(e,t,n){"use strict";n.r(t);var a=n("3677"),r=n("66d7"),c=n("f183"),o=n("7855"),s=n("4705"),i=n("ec1c"),u=n("0239"),p=n("ae7c"),l=(n("b7b4"),n("0e87")),v=n("b2a2"),f=(n("27b1"),n("4eeb")),d=n("fe94"),b=n("0c80"),h=n("1a03"),g=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;Object(c["a"])(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),Object(p["a"])(Object(s["a"])(e),"loading",!1),e}return Object(o["a"])(n,[{key:"pageId",get:function(){var e;return null===(e=this.$route.query)||void 0===e?void 0:e.pageId}},{key:"mounted",value:function(){this.initForm()}},{key:"initForm",value:function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var t,n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$route.query,n=t.pageId,n){e.next=5;break}return this.$message.error("参数错误,请检查！"),e.abrupt("return");case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(Object(h["Mixins"])(d["a"],b["a"]));g=Object(l["a"])([Object(v["component"])({template:n("ec0d"),components:{"u-page-preview":f["PagePreview"]}})],g),t["default"]=g},ec0d:function(e,t){e.exports='<article class="v-third-page-render">\r\n    <template v-if="token&&pageId">\r\n        <u-page-preview ref="pageForm" :pageFormId="pageId"> </u-page-preview>\r\n    </template>\r\n    <template v-else>\r\n        <span>页面参数出错，请检查！</span>\r\n    </template>\r\n</article>\r\n'},fe94:function(e,t,n){"use strict";var a=n("3677"),r=n("66d7"),c=n("f183"),o=n("7855"),s=n("4705"),i=n("ec1c"),u=n("0239"),p=n("ae7c"),l=(n("b7b4"),n("0e87")),v=n("0073"),f=n("b2a2"),d=function(e){Object(i["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;Object(c["a"])(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r)),Object(p["a"])(Object(s["a"])(e),"token",""),e}return Object(o["a"])(n,[{key:"created",value:function(){this.auth()}},{key:"auth",value:function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var t,n,r,c;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$route.query,n=t.token,r=t["cas-type"]||t["cas_type"],c=t["cas-token"]||t["cas_token"],n&&v["SettingUtil"].saveToken(n),r&&c&&(v["SettingUtil"].saveCasToken(r,c),n="".concat(r,":").concat(c)),this.token=n;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(f["Component"]);d=Object(l["a"])([f["component"]],d),t["a"]=d}}]);