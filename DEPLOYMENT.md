# GitHub Pages 部署指南

## 步骤 1: 准备你的 GitHub 仓库

1. 确保你的仓库名称是 `yourusername.github.io` 格式
   - 例如：如果你的 GitHub 用户名是 `zhangsan`，仓库名应该是 `zhangsan.github.io`

## 步骤 2: 上传代码到 GitHub

在项目文件夹中打开终端，执行以下命令：

```bash
# 初始化 Git 仓库
git init

# 添加远程仓库（替换成你的仓库地址）
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Personal blog website"

# 推送到 GitHub（如果是首次推送）
git branch -M main
git push -u origin main
```

## 步骤 3: 配置 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 下拉菜单中选择 `main` 分支
5. 文件夹选择 `/ (root)`
6. 点击 **Save**

## 步骤 4: 等待部署

- GitHub 会自动构建和部署你的网站
- 通常需要 1-5 分钟
- 部署完成后，你会看到一个绿色的提示框，显示你的网站地址：`https://yourusername.github.io`

## 步骤 5: 个性化你的网站

### 必须修改的内容：

1. **个人信息** (`index.html`)
   - 修改名字、职位、简介
   - 更新邮箱、社交媒体链接
   
2. **添加图片** (`images` 文件夹)
   - `avatar.jpg` - 你的头像
   - `blog1.jpg`, `blog2.jpg`, `blog3.jpg` - 博客封面图

3. **博客内容** (`index.html`)
   - 修改博客文章标题、日期、摘要

### 可选修改：

1. **配色方案** (`css/style.css`)
   - 修改 CSS 变量中的颜色值

2. **添加自定义域名**
   - 在仓库根目录创建 `CNAME` 文件
   - 文件内容写入你的域名（如：`www.yourdomain.com`）
   - 在域名提供商处配置 DNS 记录

## 更新网站

每次修改后，执行以下命令更新网站：

```bash
git add .
git commit -m "更新描述"
git push
```

## 常见问题

### Q: 网站显示 404
**A:** 确保：
- 仓库名称正确（`yourusername.github.io`）
- `index.html` 在仓库根目录
- GitHub Pages 已正确配置

### Q: 样式或图片不显示
**A:** 检查：
- 文件路径是否正确
- 文件名大小写是否匹配
- 图片是否已上传到 `images` 文件夹

### Q: 如何添加自己的博客文章？
**A:** 目前这是一个单页面展示网站。如需完整的博客功能，建议：
- 使用 Jekyll（GitHub Pages 原生支持）
- 使用 Hugo 或 Hexo 静态网站生成器
- 或者手动创建多个 HTML 页面

## 进阶优化

1. **SEO 优化**
   - 添加 meta 标签
   - 创建 `sitemap.xml`
   - 添加 `robots.txt`

2. **性能优化**
   - 压缩图片
   - 使用 CDN 加载库文件
   - 启用浏览器缓存

3. **添加分析**
   - Google Analytics
   - 百度统计

## 获取帮助

如果遇到问题，可以：
- 查看 [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- 在项目的 Issues 区域提问
- 搜索相关技术论坛

祝你搭建顺利！🎉
