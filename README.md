# WebNav Hub

WebNav Hub 是一个现代化的网址导航网站，提供了分类清晰、界面美观的常用网站链接集合。

## 特性

-  dark 主题设计，橙色点缀，视觉效果突出
- 📱 响应式布局，适配各种设备屏幕
- 🔍 搜索功能，快速找到需要的网站
- 🚀 离线支持，通过Service Worker实现PWA功能
- 🎨 使用Font Awesome图标库，图标美观一致
- 📦 模块化代码结构，易于维护和扩展
- ⬆️ 返回顶部按钮，提升用户体验
- ✨ 现代化UI设计，包含渐变、阴影和动画效果

## 技术栈

- HTML5
- CSS3 (使用CSS变量、Flexbox/Grid布局和现代特性)
- JavaScript (ES6+)
- Google Fonts (Inter字体)
- Font Awesome 6.7.2 图标库
- Service Worker (用于离线支持)

## 文件结构

```
.
├── index.html         # 主页面
├── styles.css         # 样式文件
├── script.js          # JavaScript功能实现
├── favicon.svg        # 网站图标
├── manifest.json      # PWA配置文件
├── service-worker.js  # Service Worker实现
└── README.md          # 项目说明文档
```

## 功能模块

### 1. 分类导航
网站按类别组织，包括：
- AI搜索
- 社交媒体
- 实用工具
- 科技资讯
- 云存储
- 电子邮箱

### 2. 响应式设计
适配各种屏幕尺寸：
- 桌面端 (1200px以上)
- 平板端 (768px-1200px)
- 移动端 (480px-768px)
- 小屏手机 (400px以下)

### 3. 搜索功能
在页面顶部提供了搜索框，用户可以输入关键词搜索网站。

### 4. PWA支持
通过Service Worker实现离线访问和缓存功能。

### 5. 返回顶部按钮
当用户向下滚动页面时，会出现一个返回顶部的按钮，提升用户体验。

## UI/UX 优化亮点

1. **现代化设计**：
   - 使用 Inter 字体，提升可读性
   - 添加渐变色和阴影效果
   - 优化颜色搭配和对比度
   - 添加平滑的动画过渡效果

2. **交互体验优化**：
   - 改进搜索功能的视觉反馈
   - 添加返回顶部按钮
   - 优化导航栏的交互效果
   - 添加悬停和点击动画

3. **响应式设计增强**：
   - 优化小屏幕设备上的显示效果
   - 改进触摸交互体验

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 或者部署到Web服务器上访问

## 免费部署方案

本项目可以轻松部署到多个免费平台：

### 1. Cloudflare Pages
1. 将代码推送到 GitHub 仓库
2. 登录 Cloudflare 控制台
3. 选择 Workers & Pages > Create application > Pages > Connect to Git
4. 选择您的仓库并配置构建设置
5. 构建命令: `npm run build` (如果使用构建工具) 或直接部署
6. 部署完成后即可通过 Cloudflare 提供的域名访问

### 2. GitHub Pages
1. 将代码推送到 GitHub 仓库
2. 进入仓库的 Settings > Pages
3. 在 Source 部分选择部署分支 (通常是 main 或 gh-pages)
4. 保存设置后，GitHub 会自动部署您的网站
5. 通过 `https://<username>.github.io/<repository>/` 访问

### 3. Vercel
1. 将代码推送到 GitHub 仓库
2. 登录 Vercel 平台
3. 点击 "New Project"
4. 选择您的仓库并导入
5. 保持默认设置并部署
6. Vercel 会自动为您生成一个部署链接

### 4. Netlify
1. 将代码推送到 GitHub 仓库
2. 登录 Netlify 平台
3. 点击 "New site from Git"
4. 选择您的仓库
5. 保持默认构建设置 (因为这是静态网站)
6. 部署完成后即可访问

这些平台都提供免费的静态网站托管服务，支持自定义域名和自动部署。

## 自定义和扩展

### 添加新网站
在对应的分类section中添加新的link-card元素：

```html
<div class="link-card">
  <a href="https://example.com" target="_blank"></a>
  <i class="fa-brands fa-example"></i>
  <h3>网站名称</h3>
</div>
```

### 添加新分类
在main元素中添加新的分类：

```html
<h2 class="category-title" id="new-category">新分类</h2>
<section class="link-grid">
  <!-- 添加网站链接 -->
</section>
```

同时在导航栏中添加对应的链接：

```html
<li><a href="#new-category">新分类</a></li>
```

### 修改主题颜色
在 `styles.css` 文件中修改CSS变量：

```css
:root {
  --primary-color: #ff9000;    /* 主色调 */
  --primary-gradient: linear-gradient(135deg, #ff9000, #ff6a00); /* 渐变色 */
  --bg-color: #0d0d0d;         /* 背景色 */
  --card-bg-color: #1a1a1a;    /* 卡片背景色 */
  --text-color: #fff;          /* 文字颜色 */
}
```

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License

## 作者

[您的名字]

## 贡献

欢迎提交Issue和Pull Request来改进这个项目。