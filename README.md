# FORM — 设计作品精选

一个面向设计师与设计工作室的响应式作品网站。暖白、墨绿与细线网格，覆盖品牌全案、数字体验、平面出版、空间物料和动态影像。

## 运行

需要 Node.js 20 或更新版本，无第三方运行依赖。

```sh
cd /workspace/my-first-codex
npm start
```

默认端口 3000，可用 `PORT=8080 npm start` 更改。`npm run check` 检查 JavaScript 语法。

## 功能

- 12 个概念项目、5 个作品分类，可叠加筛选设计工作室或独立设计师。
- 网格 / 列表切换，创作者作品入口。
- 原生可键盘操作的项目弹窗，包含服务范围、创作者、年份和视频。
- 本地原创 SVG 插画、CSS 视觉稿与 4 秒 MP4 动态示例，无外部字体、图片或视频依赖。
- 合作简报表单生成及复制；数据仅保留于当前页面，不提交到服务器。
- 移动端导航、响应式布局与减少动画偏好支持。

## 内容维护

修改 `app.js` 中的 `projects` 数组配置项目、分类与创作者；本地素材在 `assets/`。
所有创作者与作品为概念示例。网站目前为前端展示，无后台管理、账号或真实项目提交服务。

## GitHub Pages 发布

静态站点可直接由 GitHub Pages 托管，无需运行 Node 服务。

首次发布后，在仓库 **Settings → Pages → Build and deployment** 中选择：

- Source: **Deploy from a branch**
- Branch: **gh-pages**
- Folder: **/ (root)**

保存并等待 GitHub 部署成功。默认地址为 `https://yankai-code.github.io/my-first-codex/`；是否已上线以 Pages 部署结果为准。

`main` 保存完整源码；`gh-pages` 保存静态发布文件。后续修改源码后，需将 `index.html`、`style.css`、`app.js`、`assets/` 和 `.nojekyll` 同步到发布分支。
