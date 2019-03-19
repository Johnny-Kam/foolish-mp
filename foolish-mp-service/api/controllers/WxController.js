/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const wxAppConfigService = require("../service/WxAppConfigService")

module.exports = {
  //
  // /**
  //  * 登录
  //  * @param req
  //  * @param res
  //  */
  // login: async (req, res) => {
  //
  //   var record = await UserModel.create({
  //     a:1,
  //     b:2
  //   }).fetch();
  //
  //   console.log(record)
  //   res.send("Hello")
  // }


  test: async (req,res) => {
    var obj = await wxAppConfigService.getWxAppConfig("2222");
    sails.log(obj)
    res.send("Test")
  }

};

