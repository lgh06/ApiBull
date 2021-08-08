
在开始菜单中搜索cmd，右键，管理员模式运行。  
然后 cd /d "项目路径"，再执行以下操作，否则electron-builder会报错。  
  
开发时electron的入口文件为public/electron.js,内容为locaohost:3000/  
打包后electron的入口文件为build/electron.js,内容为file://build/*
  
npx nrm use taobao  

npm install --global windows-build-tools  

set ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"  

npm i --sass-binary-site=https://npm.taobao.org/mirrors/node-sass --registry=https://registry.npm.taobao.org    
> https://electron-react-boilerplate.js.org/docs/installation-debugging-solutions/  
https://www.electronjs.org/docs/tutorial/installation#proxies  

## 第三方依赖  
Ant Design React (create-react-app)  https://ant.design/docs/react/use-with-create-react-app-cn  
> antd moment  