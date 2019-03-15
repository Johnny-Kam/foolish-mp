### 小程序前后端架构

- #### **foolish-mp-app** 微信小程序-前端项目 (更新中)
- #### **foolish-mp-service** 微信小程序-服务端项目 (更新中)


#### foolish-mp-app

- 基础框架: mpvue@2.0.0 http://mpvue.com/mpvue/#vue
- UI框架: iView Weapp https://weapp.iviewui.com/docs/guide/start
- 通讯框架: FlyJS https://wendux.github.io/dist/#/doc/flyio/config
- 路由:   mpvue-router-patch http://npm.taobao.org/package/mpvue-router-patch

- 运行与发布
```$xslt
    
    #进入项目
      
        cd foolish-mp-app
    
    #安装项目依赖
        
        npm install
        
    #运行项目
        
        npm run dev 
    
    #发布项目
        
        npm run build
   
    ps:小程序开发助手指向dist/wx即可调试
```

- 目录解析
```
    foolish-mp-app
        ├─package.json # 包文件
        ├─project.config.json # 项目配置
        ├─static # 静态目录,编译后会复制到小程序根目录下
        ├─src #源文件
        |  ├─App.vue # 相当于app.js
        |  ├─app.json # app配置
        |  ├─main.js # vue配置
        |  ├─api # 接口相关
        |  ├─utils # 工具包
        |  ├─pages # 页面
        |  ├─components # 自定义组件
        ├─config # 配置文件
        |   ├─dev.env.js
        |   ├─index.js
        |   └prod.env.js
        ├─build # 编译配置
```

##### **iView Weapp 使用**
```
    #页面main.json配置组件引入
         
         "usingComponents": {
            "i-button": "../../../static/iview/button/index"
          }
          
    #直接使用引入组件即可
        
        <i-button type="primary" @click="goIndexPage">返回首页</i-button>
    
    ps: iview所有组件包体比较大800k,可在实际发布时删除掉未引用组件

```

##### **Fly.JS 使用**
```$xslt
    #配置src/api/flyConfig.js
    
    #接口服务src/api/apiService.js
    
    #页面引入api服务  import apiService from '../../api/apiService';
    
    #调用
        apiService.testAPI((res)=>{
            //res
        }).catcg((err)=>{
            //err
        })
```

##### **Router 使用**
```$xslt
    #页面跳转与参数传递(注意,只支持query参数传递，不支持params)
     
     this.$router.push({path: '/pages/index/main',query:{a:1}});
     
    #参数获取
     
     let query = this.$route.query; //{a:1}
     
     
```
