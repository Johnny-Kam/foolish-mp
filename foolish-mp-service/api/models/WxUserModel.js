/**
 * UserModel.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  // 指定数据源
  datastore: 'mongoDataSource',

  // 指定数据表名
  tableName: "wx_user",

  // Model属性
  attributes: {
    id: {type: 'string', columnName: '_id'}
  },

};

