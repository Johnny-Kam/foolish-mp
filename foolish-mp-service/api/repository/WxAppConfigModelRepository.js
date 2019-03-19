module.exports = {

  /**
   * 根据wxAppId查找到对应微信小程序对象
   * @param wxAppId
   */
  findOne: async (wxAppId) => {
      let wxAppConfigModel = await WxAppConfigModel.findOne({
        wxAppId:wxAppId
      });
      return wxAppConfigModel;
  }

}
