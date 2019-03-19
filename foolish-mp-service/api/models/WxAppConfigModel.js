/**
 * WxAppConfigModel.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  // 指定数据源
  datastore: 'mongoDataSource',

  // 指定数据表名
  tableName: "wx_app_config",

  // Model属性
  attributes: {
    id: {type: 'string', columnName: '_id'},
    // 微信小程序id
    wxAppId: {type: 'string', required: true},
    // 微信小程序名称
    wxAppName: {type: 'string', required: true},
    // 微信小程序秘钥
    appSecret: {type: 'string',required: true}
  },


};

