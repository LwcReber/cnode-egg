/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1584770288549_5792';
  config.security = {
    csrf: {
      enable: false, // 前后端分离，post请求不方便携带_csrf
      ignoreJSON: true
    }
    // domainWhiteList: ['*'], //配置白名单
  }
  config.cors = {
    origin: '*',//匹配规则  域名+端口  *则为全匹配
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    baseUrl: 'https://cnodejs.org/api/v1' // 后端地址
  };

  return {
    ...config,
    ...userConfig,
  };
};
