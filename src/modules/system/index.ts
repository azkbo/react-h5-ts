/**
 * Author: Meng
 * Date: 2023-09-01
 * Modify: 2023-09-01
 * Desc: 系统API封装
 * https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicemotion_event
 * 
 */

export function systemInit() {
  deviceInfo();
}

// 获取设备信息
function deviceInfo() {
  const u: any = navigator.userAgent;
  const info = {
    //浏览器版本信息
    trident: u.indexOf("Trident") > -1,
    presto: u.indexOf("Presto") > -1,
    webKit: u.indexOf("AppleWebKit") > -1,
    gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") > -1,
    mobile: !!u.match(/AppleWebKit.*Mobile.*/),
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1,
    iPhone: u.indexOf("iPhone") > -1,
    iPad: u.indexOf("iPad") > -1,
    webApp: u.indexOf("Safari") > -1,
    weixin:
      (u.indexOf("MicroMessenger") > -1 &&
        u
          .replace(/.*(MicroMessenger\/[^\s]*).*/, "$1")
          .replace("MicroMessenger/", "")) ||
      false,
    appVersion:
      u.indexOf("yourapp(") > -1
        ? u.match(/yourapp\(\S+\)/)[0].slice(7, -1)
        : "3.0.0",
  };
  console.log(info);
  bindApi(info);
}

// 挂载 native api
function bindApi(info: any) {
  const script = document.createElement("script");
  if (info.iPhone) {
    // script.src = 'static/js/ios.js'
    script.src = "https://ebsnew.cn/phone/paylib/ios.js";
  } else if (info.android) {
    // script.src = 'static/js/android.js'
    script.src = "https://ebsnew.cn/phone/paylib/android.js";
  } else {
    console.log("无法识别终端类型");
    // alert("无法识别终端类型");
  }
  document.getElementsByTagName("head")[0].appendChild(script);
}

export {};
