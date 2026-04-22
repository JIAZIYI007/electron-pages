# Electron 本地应用

将原 GitHub Pages 站点打包为 Electron 桌面应用，支持 Windows 平台。

## 项目简介

基于 Electron 框架，将静态网页（HTML/CSS/JS）封装为独立的桌面应用程序。无需浏览器，直接运行即可访问本地页面，适合离线使用或增强功能（如本地文件访问）。

## 主要功能

- 多页面支持：首页、关于、直播播放器、网盘图片展示等
- 原生桌面窗口，无浏览器地址栏干扰
- 可打包为 Windows 安装程序，支持用户选择安装路径
- 支持自定义图标和快捷方式

## 技术栈

- Electron 39.2.3
- 原生 HTML/CSS/JS
- electron-builder 26.8.1（打包）
- Inno Setup（备选安装包制作）

## 目录结构

```text
electron-project/
├── main.js               # Electron 主进程入口
├── index.html            # 主页面
├── about.html            # 关于页面
├── gb2312.html           # GB2312 测试页
├── live-player.html      # 直播播放器页
├── netdisk-img.html      # 网盘图片页
├── rcc-en.html           # 英文资源页
├── style2.css            # 全局样式
├── index.js              # 前端逻辑
├── favicon.ico           # 应用图标
├── package.json          # 项目配置
├── .gitignore            # Git 忽略文件
└── README.md             # 项目说明
```
# 快速开始
1. 克隆或下载项目
```
git clone https://github.com/JIAZIYI007/electron-project.git
cd electron-project
```

2. 安装依赖
```
npm install
```
若下载 Electron 缓慢，可设置国内镜像：

```
npm config set ELECTRON_MIRROR https://npmmirror.com/mirrors/electron/
```
3. 运行开发版
```
npm run start
```
5. 打包为可执行文件
```
npm run dist
```
打包完成后，安装程序位于 dist/ 目录下（例如 Electron测试应用 Setup 1.0.0.exe）。

## 打包配置说明

在 package.json 的 build 字段中定义了打包选项：

productName：安装后显示的应用名称

win.target：Windows 安装包类型（NSIS）

nsis.oneClick: false：显示安装向导，允许用户选择安装路径

files：需要打包进应用的文件列表（已包含所有 HTML、CSS、JS、图标及 node_modules）

# 常见问题

Q1：运行 npm start 提示找不到模块？

请确保已执行 npm install 安装所有依赖。

Q2：打包后的安装程序无法选择安装目录？

检查 package.json 中 nsis 配置是否为：

```
"nsis": {
  "oneClick": false,
  "allowToChangeInstallationDirectory": true
}
```
Q3：如何更换应用图标？

替换根目录下的 favicon.ico 文件，并在 build 配置中指定 icon 路径。

Q4：如何添加更多页面？

将新 HTML 文件放入项目根目录，并在 build.files 列表中添加文件名，然后在 main.js 中使用 win.loadFile('新页面.html') 加载。

# 推送 GitHub 失败的处理

如遇到 fatal: the remote end hung up unexpectedly，通常是由于网络不稳定或推送内容过大（如 node_modules）。建议：

确保 .gitignore 已忽略 node_modules/ 和 dist/

增加 Git 缓冲区：git config http.postBuffer 524288000

或直接在本地电脑（非 RDP 环境）推送代码

# 许可证
MIT © 007media
