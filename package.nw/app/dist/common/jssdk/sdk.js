"use strict";function init(){var e=require("./sdkConfig.js"),r=require("./preVerify.js"),i=require("./baseSdk.js"),o=require("./shareSdk.js"),s=require("./registerSdk.js"),u=require("./imageSdk.js"),t=require("./voiceSdk.js"),n=require("./osInfoSdk.js"),a=require("./locationSdk.js"),S=require("./interfaceSdk.js"),f=require("./scanSdk.js"),p=require("./cardSdk.js"),v=require("./interfaceAsyncSdk.js"),c=require("./autofillSdk.js"),d=require("./phoneSdk.js"),_=function(r,i){return r=e.getRealName(r),i.purviewFromPreVerify||(i.purviewFromPreVerify={}),!!e.hasDefaultPurview(r)||(!(!i.purviewFormGetA8key||!i.purviewFormGetA8key[r])||!(!i.purviewFromPreVerify||!i.purviewFromPreVerify[r]))},k={REGISTER_SDK:s},y={BASE_SDK:i,SHARE_SDK:o,IMAGE_SDK:u,VOICE_SDK:t,OSINFO_SDK:n,LOCATION_SDK:a,INTERFACE_SDK:S,INTERFACE_ASYNC_SDK:v,SCAN_SDK:f,AUTO_FILL:c,PHONE_SDK:d},E=function(i,o,s){var u=i.sdkName,t=(i.args,i.ext),n=global.appConfig.haveAllPurview||_(u,o),a=e.getSdkType(u);if(!a){if(!t.isOn)return void s(n,{errMsg:u+":fail,"+e.notExistWroding},{type:null});a="REGISTER_SDK"}"PREVERIFY_SDK"===a?r(i,function(r){var i=r.verify_info_list,u={};i&&i.forEach(function(e){var r=e.jsapi_name;1===e.state&&(u[r]=!0)});var t=void 0;t=r.baseresponse&&0!=r.baseresponse.errcode?"config:"+r.baseresponse.errmsg:"config:ok";var S={errMsg:t};s(n,S,{defaultPurview:e.defaultPurview,purviewFormGetA8key:o.purviewFormGetA8key,purviewFromPreVerify:u,type:a})}):"CARD_SDK"===a?p.exec(n,i,o,function(e,r){s(n,r,{type:a,error:e})}):y[a]?y[a].exec(n,i,o,function(e){s(n,e,{type:a})}):k[a]&&k[a].exec(!0,i,o,function(e){s(!0,e,{type:a})})};_export={exec:E}}var _export;init(),module.exports=_export;