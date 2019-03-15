import fly from './flyConfig'

export default {

  /**
   * 测试fly
   */
  testAPI(){
    let url = "/mp/farm/getHackFodderMarquee";
    return fly.get(url);
  }

}
