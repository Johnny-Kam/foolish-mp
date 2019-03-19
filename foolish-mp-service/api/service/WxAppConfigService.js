const wxAppConfigModelRepository = require("../repository/WxAppConfigModelRepository")

module.exports = {

  /**
   * 根据微信AppId获取WxApp配置
   * @param wxAppId
   * @return {Promise<*|Promise<*>>}
   */
  getWxAppConfig: async (wxAppId) => {
    return wxAppConfigModelRepository.findOne(wxAppId);
  }

}
