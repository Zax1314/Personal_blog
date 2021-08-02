let proxyObj={}
proxyObj['/api']={
   ws:true,
   target:'http://localhost:8080/',
   changeOrigin:true,
   pathRewrite:{
      "^/api":''
   }
}
module.exports={
   devServer: {
      host:'0.0.0.0',
      port:8081,
      open:false,
      proxy:proxyObj

   },
   publicPath:'/',
}