# 个人博客网站

这是一个简洁、现代的个人博客网站，适合托管在 GitHub Pages 上。

## 特性

- 📱 完全响应式设计，支持各种设备
- 🎨 现代化的UI设计，使用渐变色和动画效果
- 📝 博客文章展示区域
- 👤 个人简介和技能展示
- 📧 联系表单
- 🚀 快速加载，优化的性能
- 🎯 平滑滚动和页面导航

## 快速开始

### 1. 克隆到本地
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

### 2. 自定义内容

编辑以下文件来个性化你的网站：

- `index.html` - 修改个人信息、博客文章等内容
- `css/style.css` - 自定义颜色、字体和样式
- `js/script.js` - 添加或修改交互功能

### 3. 添加图片

在项目根目录创建 `images` 文件夹，并添加以下图片：
- `avatar.jpg` - 你的头像（建议 500x500px）
- `blog1.jpg`, `blog2.jpg`, `blog3.jpg` - 博客文章封面图（建议 800x600px）

### 4. 部署到 GitHub Pages

```bash
git add .
git commit -m "Initial commit - Personal blog website"
git push origin main
```

然后在 GitHub 仓库设置中：
1. 进入 Settings > Pages
2. Source 选择 `main` 分支
3. 点击 Save

几分钟后，你的网站就会在 `https://yourusername.github.io` 上线！

## 自定义指南

### 修改颜色主题

在 `css/style.css` 文件的顶部，你可以找到 CSS 变量：

```css
:root {
    --primary-color: #6366f1;    /* 主色调 */
    --secondary-color: #8b5cf6;  /* 次要色调 */
    --dark-color: #1e293b;       /* 深色文字 */
    --light-color: #f8fafc;      /* 浅色背景 */
}
```

### 添加更多博客文章

在 `index.html` 的博客部分（`<section id="blog">`），复制一个 `blog-card` 并修改内容：

```html
<article class="blog-card">
    <div class="blog-image">
        <img src="images/your-image.jpg" alt="文章标题">
        <span class="blog-category">分类</span>
    </div>
    <div class="blog-content">
        <h3 class="blog-title">你的文章标题</h3>
        <p class="blog-meta">
            <i class="far fa-calendar"></i> 2025-10-27
            <i class="far fa-clock"></i> 5分钟阅读
        </p>
        <p class="blog-excerpt">文章摘要...</p>
        <a href="#" class="blog-link">阅读更多 <i class="fas fa-arrow-right"></i></a>
    </div>
</article>
```

### 修改社交媒体链接

在 `index.html` 的联系部分找到社交链接，更新 `href` 属性：

```html
<a href="https://github.com/yourusername" class="social-link">
    <i class="fab fa-github"></i>
</a>
```

## 技术栈

- HTML5
- CSS3 (Flexbox, Grid, CSS Variables)
- Vanilla JavaScript
- Font Awesome Icons

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 许可证

MIT License - 自由使用和修改

## 联系方式

如有问题或建议，欢迎通过以下方式联系：
- 邮箱: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

---

祝你搭建愉快！🎉
