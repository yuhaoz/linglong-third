(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38e3672b"],{"0c80":function(e,t,n){"use strict";var a=n("f183"),r=n("7855"),c=n("4705"),s=n("ec1c"),i=n("0239"),o=n("ae7c"),u=(n("b7b4"),n("468f"),n("0e87")),p=n("b2a2"),l=function(e){Object(s["a"])(n,e);var t=Object(i["a"])(n);function n(){var e;Object(a["a"])(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return e=t.call.apply(t,[this].concat(s)),Object(o["a"])(Object(c["a"])(e),"postEvent",null),e}return Object(r["a"])(n,[{key:"created",value:function(){window.addEventListener("message",this.handlePostMessage,!1)}},{key:"destroyed",value:function(){window.removeEventListener("message",this.handlePostMessage)}},{key:"postMessage",value:function(e){"string"===e&&e.constructor===String&&(window.parent||window).postMessage(e,"*")}},{key:"handlePostMessage",value:function(e){var t;if(e.data&&"string"===typeof e.data&&e.data.constructor===String){this.postEvent=e;var n=JSON.parse(e.data);switch(n.event){case"design-font":console.log("修改字体大小"),document.documentElement.style.fontSize=(null===(t=n.param)||void 0===t?void 0:t.fontSize)||"100px";break;default:this.handleMessage(n)}}}},{key:"handleMessage",value:function(e){}},{key:"postMessageCall",value:function(e,t){if(this.postEvent){var n={event:e,param:t};this.postEvent.source.postMessage(JSON.stringify(n),this.postEvent.origin)}}}]),n}(p["Component"]);l=Object(u["a"])([p["component"]],l),t["a"]=l},"87de":function(e,t){e.exports='<article class="v-third-table-list-render">\r\n    <template v-if="token&&pageId">\r\n        <u-table-list :pageId="pageId" />\r\n    </template>\r\n    <template v-else>\r\n        <span>页面参数出错，请检查！</span>\r\n    </template>\r\n</article>\r\n'},b512:function(e,t,n){},bbcf:function(e,t,n){"use strict";n.r(t);var a=n("3677"),r=n("66d7"),c=n("f183"),s=n("7855"),i=n("ec1c"),o=n("0239"),u=n("0e87"),p=n("b2a2"),l=n("4eeb"),b=n("1a03"),f=n("fe94"),v=n("0c80"),d=(n("b512"),function(e){Object(i["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return Object(s["a"])(n,[{key:"pageId",get:function(){return this.$route.query.pageId}},{key:"mounted",value:function(){this.init()}},{key:"init",value:function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var t,n;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$route.query,n=t.pageId,n){e.next=5;break}return this.$message.error("参数错误,请检查！"),e.abrupt("return");case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(Object(b["Mixins"])(f["a"],v["a"])));d=Object(u["a"])([Object(p["component"])({template:n("87de"),components:{"u-table-list":l["TableListRenderView"]}})],d),t["default"]=d},fe94:function(e,t,n){"use strict";var a=n("3677"),r=n("66d7"),c=n("f183"),s=n("7855"),i=n("4705"),o=n("ec1c"),u=n("0239"),p=n("ae7c"),l=(n("b7b4"),n("0e87")),b=n("0073"),f=n("b2a2"),v=function(e){Object(o["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;Object(c["a"])(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),Object(p["a"])(Object(i["a"])(e),"token",""),e}return Object(s["a"])(n,[{key:"created",value:function(){this.auth()}},{key:"auth",value:function(){var e=Object(r["a"])(Object(a["a"])().mark((function e(){var t,n,r,c;return Object(a["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this.$route.query,n=t.token,r=t["cas-type"]||t["cas_type"],c=t["cas-token"]||t["cas_token"],n&&b["SettingUtil"].saveToken(n),r&&c&&(b["SettingUtil"].saveCasToken(r,c),n="".concat(r,":").concat(c)),this.token=n;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(f["Component"]);v=Object(l["a"])([f["component"]],v),t["a"]=v}}]);