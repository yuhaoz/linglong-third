// 此处只能配置下面几项值，若有更多配置请到配置平台中进行配置，严禁在此处增加新的配置项
var commonConfig = {
    baseUrl: "http://192.168.102.50:8080/linglong-api", //请勿修改，固定此值。即使改了也不要提交。
    applicationId: "linglong", // 灵珑项目的唯一标识
    activeType: "linglong", // 灵珑的配置平台标识
    buildActiveType: "linglong-buid", // 构建的应用的配置平台标识
    "linglong-build:baseUrl": "" //构建的应用的baseUrl,前缀即buildActiveType的值, 为空则取baseUrl
};

// 是否是windows系统
function _isWindows() {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.indexOf("windows") >= 0) {
        return true;
    }
    return false;
}

function _addHandler(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
    } else {
        element["on" + type] = handler;
    }
}

// 校正浏览器缩放比例
function _correct() {
    document.getElementsByTagName("body")[0].style.zoom = 1 / window.devicePixelRatio;
}
