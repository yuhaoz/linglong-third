(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c1ba0e3"],{"31bb":function(e,t){e.exports='<article class="login-page">\r\n    <div class="background"></div>\r\n\r\n    <div class="content">\r\n        <section class="title">\r\n            <div class="logo"></div>\r\n            <div>\r\n                <p class="title-name">{{title}}</p>\r\n                <p class="title-desc">欢迎使用{{title}}</p>\r\n            </div>\r\n        </section>\r\n        <div class="form">\r\n            <a-input class="ll-input login-input" placeholder="请输入账号" allow-clear v-model.trim="username">\r\n                <div class="user" slot="prefix"></div>\r\n            </a-input>\r\n            <a-input-password class="ll-input login-input" placeholder="请输入密码" allow-clear v-model.trim="password" type="password"\r\n                @pressEnter="onLogin">\r\n                <div class="password" slot="prefix"></div>\r\n\r\n            </a-input-password>\r\n            <a-button :loading="logging" class="login-button" @click="onLogin">{{logging?\'登录中\':\'登录\'}}<span\r\n                    v-if="logging">...</span></a-button>\r\n        </div>\r\n    </div>\r\n</article>'},"5eb6c":function(e,t,r){},"76fa":function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r("3677"),i=r("66d7"),a=r("f183"),c=r("7855"),s=r("ec1c"),o=r("0239"),u=(r("b7b4"),r("0e87")),l=r("0073"),p=r("b2a2"),d=r("53e9"),g=r.n(d),v=function(e){Object(s["a"])(r,e);var t=Object(o["a"])(r);function r(){return Object(a["a"])(this,r),t.apply(this,arguments)}return Object(c["a"])(r,[{key:"getUrl",value:function(e){return this.baseUrl+e}},{key:"login",value:function(){var e=Object(i["a"])(Object(n["a"])().mark((function e(t,r){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this._post("".concat(this.authingServer,"/oauth/extras/token"),{client_id:"unity-client",client_secret:"unity",grant_type:"password",password:l["EncryptUtil"].getLoginEncryptText(r),username:t},{remote:!0,cache:!1}));case 1:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"getApplicationInfoById",value:function(e){return this._get("".concat(this.server,"/free/application-info/").concat(e))}},{key:"getAuthInfo",value:function(){return this._get("".concat(this.server,"/free/license/info"))}},{key:"dicionary",value:function(e){return this._get("".concat(this.server,"/free/dictionary/display/").concat(e))}},{key:"getAuthorizeUrl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"egova";return this._get("/sso/client/authorize-url?type=".concat(e))}},{key:"logout",value:function(e){return e||(e=l["SettingUtil"].getToken()),this._get("".concat(this.authingServer,"/oauth/extras/logout?token=").concat(e))}},{key:"getCurrentUser",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{remote:!0,cache:!0,setExpireTime:6e5};return this._get("".concat(this.authingServer,"/unity/user/composite"),e)}},{key:"imgUploadUrl",value:function(){return this.url("".concat(this.authingServer,"/free/image/upload?@state=single&kind=base"))}},{key:"getDictionaryItemTree",value:function(e){return this._get("".concat(this.authingServer,"/unity/dictionary/item/").concat(e,"/tree"))}},{key:"getRemoteData",value:function(e){return g.a.get(e).then((function(e){return e.data}))}},{key:"getDictionaryTree",value:function(){return this._get("".concat(this.authingServer,"/unity/dictionary/group-type-tree"))}},{key:"validatePassword",value:function(){var e=Object(i["a"])(Object(n["a"])().mark((function e(t){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.password=l["EncryptUtil"].getLoginEncryptText(t.password),e.abrupt("return",this._post("".concat(this.authingServer,"/unity/user/valid/password"),t));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateUserInfo",value:function(){var e=Object(i["a"])(Object(n["a"])().mark((function e(t){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this._put("".concat(this.authingServer,"/unity/user/"),t));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updatePassword",value:function(){var e=Object(i["a"])(Object(n["a"])().mark((function e(t){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.oldPassword=l["EncryptUtil"].getLoginEncryptText(t.oldPassword),t.password=l["EncryptUtil"].getLoginEncryptText(t.password),e.abrupt("return",this._post("".concat(this.authingServer,"/unity/user/change/password"),t));case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getEnumByType",value:function(){var e=Object(i["a"])(Object(n["a"])().mark((function e(t){return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",this._get("".concat(this.server,"/free/display/").concat(t)));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"saveCategory",value:function(e){return e.id?this._put("".concat(this.authingServer,"/unity/category"),e):this._post("".concat(this.authingServer,"/unity/category"),e)}},{key:"editCategory",value:function(e){return this._put("".concat(this.authingServer,"/unity/category"),e)}},{key:"deleteCategory",value:function(e){return this._delete("".concat(this.authingServer,"/unity/category/").concat(e,"?@state=ddcat"))}},{key:"getCategoryTree",value:function(e){return this._get("".concat(this.authingServer,"/unity/category/tree?type=").concat(e))}},{key:"getBuildInfo",value:function(){return this._get("".concat(this.authingServer,"/free/build-info"))}}]),r}(l["ServiceBase"]);Object(u["a"])([Object(p["service"])("query",{title:"获应用配置数据"})],v.prototype,"getApplicationInfoById",null),Object(u["a"])([Object(p["service"])("query",{title:"获取授权信息",showErrorMsg:!0})],v.prototype,"getAuthInfo",null),Object(u["a"])([Object(p["service"])("query",{title:"字典项"})],v.prototype,"dicionary",null),Object(u["a"])([Object(p["service"])("query",{title:"统一认证token获取client认证地址"})],v.prototype,"getAuthorizeUrl",null),Object(u["a"])([Object(p["service"])("query",{title:"获取当前用户信息"})],v.prototype,"getCurrentUser",null),Object(u["a"])([Object(p["service"])("query",{title:"获取字典项树数据",showTip:!1})],v.prototype,"getDictionaryItemTree",null),Object(u["a"])([Object(p["service"])("query",{title:"获取远程数据"})],v.prototype,"getRemoteData",null),Object(u["a"])([Object(p["service"])("query",{title:"获取字典分类以及组树",showTip:!1})],v.prototype,"getDictionaryTree",null),Object(u["a"])([Object(p["service"])("query",{title:"校验输入的密码是否正确"})],v.prototype,"validatePassword",null),Object(u["a"])([Object(p["service"])("save",{title:"更新用户信息"})],v.prototype,"updateUserInfo",null),Object(u["a"])([Object(p["service"])("save",{title:"更新用户密码"})],v.prototype,"updatePassword",null),Object(u["a"])([Object(p["service"])("query",{title:"查询枚举"})],v.prototype,"getEnumByType",null),Object(u["a"])([Object(p["service"])("save",{title:"保存分类",showErrorMsg:!0})],v.prototype,"saveCategory",null),Object(u["a"])([Object(p["service"])("save",{title:"编辑分类",showErrorMsg:!0})],v.prototype,"editCategory",null),Object(u["a"])([Object(p["service"])("save",{title:"删除分类",showErrorMsg:!0})],v.prototype,"deleteCategory",null),Object(u["a"])([Object(p["service"])("query",{title:"获取分类树",showErrorMsg:!0})],v.prototype,"getCategoryTree",null),Object(u["a"])([Object(p["service"])("query",{title:"获取灵珑构建信息"})],v.prototype,"getBuildInfo",null)},9224:function(e){e.exports=JSON.parse('{"name":"@magic/linglong","version":"0.0.1-alpha.4","publishConfig":{"access":"public","registry":"http://192.168.101.98:18081/repository/npm-egova-hosted/"},"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","dist:build":"vue-cli-service build --mode outdist --target lib --name index src/index.ts","dist:types":"tsc -d --emitDeclarationOnly --declarationDir dist/types","dist":"rimraf tsconfig.tsbuildinfo &&  pnpm run dist:build && pnpm run dist:types","version:patch":"npm version patch","lint":"vue-cli-service lint","lint:css":"stylelint **/*.{html,vue,css,sass,scss}","lint:css-fix":"pnpm run lint:css --fix","build:serve":"http-server ./dist/linglong -a 127.0.0.1 -p 5050"},"files":["dist"],"license":"MIT","dependencies":{"@egova/api-register":"^0.1.11","@egova/data-model":"^0.1.5","@egova/data-source":"^0.1.0","@egova/flagwind-core":"^1.1.4","@egova/flagwind-echarts":"^1.0.14","@egova/flagwind-web":"^2.0.6","@magic/design-core":"workspace:*","@magic/design-detail":"workspace:*","@magic/design-form":"workspace:*","@magic/design-list":"workspace:*","@magic/design-printing":"workspace:*","@magic/design-login":"workspace:*","@magic/design-mobile":"workspace:*","@magic/design-navigation":"workspace:*","@magic/design-page":"workspace:*","@magic/design-tree":"workspace:*","@magic/design-task":"workspace:*","@magic/design-web":"workspace:*","@magic/magic-core":"workspace:*","@tinymce/tinymce-vue":"^3.2.8","@vant/touch-emulator":"^1.3.2","ant-design-vue":"1.7.8","axios":"^0.21.1","codemirror":"^5.65.0","compressorjs":"^1.1.1","core-js":"^3.6.5","crypto-js":"^4.1.1","sm-crypto":"^0.3.11","dom-to-image":"^2.6.0","echarts":"^4.6.0","element-resize-detector":"^1.2.3","equals":"^1.0.5","halo-math":"^1.0.6","js-cookie":"^2.2.1","jsdc":"^0.6.13","jsencrypt":"^3.0.1","localforage":"^1.10.0","lodash":"^4.17.21","lodash-es":"^4.17.21","lodash.throttle":"^4.1.1","mavon-editor":"^2.9.0","mockjs":"^1.1.0","moment":"^2.29.1","cronstrue":"^2.14.0","monaco-editor":"^0.30.1","monaco-editor-webpack-plugin":"^6.0.0","overlayscrollbars":"^1.13.1","overlayscrollbars-vue":"^0.2.2","qrcode.vue":"^1.7.0","swiper":"^5.4.5","v-clipboard":"^2.2.3","v-viewer":"^1.6.4","vue":"^2.7.10","vue-awesome-swiper":"^4.1.1","vue-class-component":"^7.2.6","vue-color":"2.8.1","vue-fullscreen":"^2.6.1","vue-lazyload":"^1.3.3","vue-property-decorator":"^9.1.2","vue-router":"^3.5.1","vue-ruler-tool":"^1.2.4","vue2-color-picker-gradient":"^0.15.0","vuedraggable":"^2.24.3","vuex":"^3.4.0","vuex-class":"^0.3.2","xlsx":"^0.17.0","zartui":"^2.0.30"},"devDependencies":{"@types/codemirror":"5.60.5","@types/echarts":"^4.4.3","@types/element-resize-detector":"^1.1.3","@types/js-cookie":"^2.2.4","@types/lodash-es":"^4.17.4","@types/node":"^13.7.4","@typescript-eslint/eslint-plugin":"^5.2.0","@typescript-eslint/parser":"^5.2.0","@vue/cli-plugin-babel":"~4.5.15","@vue/cli-plugin-router":"~4.5.15","@vue/cli-plugin-typescript":"~4.5.15","@vue/cli-plugin-vuex":"~4.5.15","@vue/cli-service":"~4.5.15","@vue/compiler-sfc":"^3.2.21","babel-plugin-import":"^1.13.3","build-git-version-webpack-plugin":"^0.0.3","compression-webpack-plugin":"^3.1.0","css-unicode-loader":"^1.0.3","eslint":"^8.1.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^4.0.0","friendly-errors-webpack-plugin":"^1.7.0","node-sass":"^4.14.1","prettier":"^2.4.1","postcss-pxtorem":"^5.1.1","raw-loader":"^1.0.0","sass-loader":"^8.0.2","style-resources-loader":"^1.3.3","stylelint":"^13.9.0","stylelint-config-sass-guidelines":"^7.1.0","stylelint-order":"^4.1.0","stylelint-webpack-plugin":"^2.1.1","tslint-config-flagwind":"^1.0.1","tslint-loader":"^3.5.4","typescript":"^4.8.2","vue-template-compiler":"^2.6.11","webpack-bundle-analyzer":"^4.5.0"},"gitHead":"d44e2a7ead51cab0638c4d0e261cd06a6f65b1df","sideEffects":["*.scss","*.css"]}')},d737:function(e,t,r){},f083:function(e,t,r){"use strict";r.r(t);var n=r("3677"),i=r("66d7"),a=r("f183"),c=r("7855"),s=r("4705"),o=r("ec1c"),u=r("0239"),l=r("ae7c"),p=(r("b7b4"),r("8ae5"),r("0e87")),d=r("b2a2"),g=(r("5eb6c"),r("76fa")),v=(r("d737"),r("1476")),h=r("0073"),y=function(e){Object(o["a"])(p,e);var t=Object(u["a"])(p);function p(){var e;Object(a["a"])(this,p);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(l["a"])(Object(s["a"])(e),"service",void 0),Object(l["a"])(Object(s["a"])(e),"license",null),Object(l["a"])(Object(s["a"])(e),"expiryDate",0),Object(l["a"])(Object(s["a"])(e),"key","magic-world"),e}return Object(c["a"])(p,[{key:"mounted",value:function(){this.checkAuth()}},{key:"getAuthInfo",value:function(){var e=Object(i["a"])(Object(n["a"])().mark((function e(){var t,r,i,a,c,s,o,u,l;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.service.getAuthInfo();case 2:if(t=e.sent,t&&!t.hasError){e.next=6;break}return h["SettingUtil"].commonRemoveCookie("licenseKey"),e.abrupt("return");case 6:r=t.result||{},i=r.plugins,a=r.licenseKey,c=r.validFromDate,s=r.validToDate,i.indexOf(this.key)>-1?(this.license=a,o=h["DateUtil"].parseDate(c).getTime(),u=h["DateUtil"].parseDate(s).getTime(),l=(new Date).getTime(),(o<l||u>l)&&(this.expiryDate=Math.ceil((u-l)/864e5)),h["SettingUtil"].commonSaveCookie("licenseKey",a,{expires:h["DateUtil"].parseDate(s)})):h["SettingUtil"].commonRemoveCookie("licenseKey");case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"checkAuth",value:function(){var e=Object(i["a"])(Object(n["a"])().mark((function e(){var t,i,a,c,s,o,u,l;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getAuthInfo();case 2:if(!(this.license&&this.expiryDate>30)){e.next=4;break}return e.abrupt("return");case 4:return t="",t=this.license?this.expiryDate<=0?"授权已过期，如果您需要继续使用，请联系本产品技术人员获取授权码。":"您的本产品授权码服务期".concat(this.expiryDate>1?"还剩":"不足",' <span class="expiry-date">').concat(this.expiryDate,"</span> 天，如果您需要继续使用，请联系本产品技术人员获取授权码。"):"授权信息缺失，如果您需要继续使用，请联系本产品技术人员获取授权码。",i=r("9224"),a=i.version,e.next=9,this.service.getBuildInfo();case 9:c=e.sent,c&&(a=(null===(s=c["build.branch"])||void 0===s||null===(o=s.split("/"))||void 0===o?void 0:o.pop())||""),u=new v["default"]({template:'\n            <div class="auth-modal" v-if="show">\n                <p>感谢使用北京数字政通科技股份有限公司研发的灵珑平台</p>\n                <p class="info">'.concat(t,'</p>\n                <p class="version">灵珑平台当前版本').concat(a,"</p>\n                ").concat(this.expiryDate>0&&this.license?'<a-button v-if="" @click="onClick">已知</a-button>':"","\n            </div>"),data:function(){return{show:!0}},methods:{onClick:function(){this.show=!1}}}).$mount(),l=document.body.firstChild,document.body.insertBefore(u.$el,l);case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),p}(d["Component"]);Object(p["a"])([Object(d["autowired"])(g["a"])],y.prototype,"service",void 0),y=Object(p["a"])([d["component"]],y);var b=y,f=function(e){Object(o["a"])(r,e);var t=Object(u["a"])(r);function r(){var e;Object(a["a"])(this,r);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),Object(l["a"])(Object(s["a"])(e),"commonService",void 0),Object(l["a"])(Object(s["a"])(e),"title","灵珑平台"),Object(l["a"])(Object(s["a"])(e),"username",""),Object(l["a"])(Object(s["a"])(e),"password",""),Object(l["a"])(Object(s["a"])(e),"loading",!1),Object(l["a"])(Object(s["a"])(e),"logging",!1),e}return Object(c["a"])(r,[{key:"mounted",value:function(){h["SkinUtil"].initSkin()}},{key:"onLogin",value:function(){this.validate()&&this.login()}},{key:"login",value:function(){var e=Object(i["a"])(Object(n["a"])().mark((function e(){var t,r=this;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.loading){e.next=2;break}return e.abrupt("return");case 2:if(this.logging=!0,t=h["SettingUtil"].commonGetCookie("licenseKey"),t){e.next=9;break}return this.$message.error("授权信息缺失"),this.logging=!1,e.abrupt("return");case 9:this.commonService.login(this.username,this.password).then(function(){var e=Object(i["a"])(Object(n["a"])().mark((function e(t){var r;return Object(n["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t,h["SettingUtil"].saveToken(null===r||void 0===r?void 0:r.access_token,null===r||void 0===r?void 0:r.expires_in),window.location.href="index.html";case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error(e),e&&e.response&&401===e.response.status?r.$message.error(e.response.data.error_description):r.$message.error("调用服务异常")})).finally((function(){r.logging=!1}));case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"validate",value:function(){return this.username?!!this.password||(this.$message.warning("请输入密码!"),!1):(this.$message.warning("请输入账号!"),!1)}},{key:"onReset",value:function(){this.password="",this.username=""}}]),r}(Object(d["mixins"])(b));Object(p["a"])([Object(d["autowired"])(g["a"])],f.prototype,"commonService",void 0),f=Object(p["a"])([Object(d["component"])({template:r("31bb")})],f);t["default"]=f}}]);