# Git 提交规范

本项目采用 [Conventional Commits](https://www.conventionalcommits.org/) 规范，确保提交历史清晰可追溯。

---

## 提交格式

```
<type>(<scope>): <subject>

[body]

[footer]
```

### 示例

```
feat(project): 新增 SuperBizAgent 项目详情页

- 添加四阶段混合检索流水线可视化展示
- 添加三层 Agent 协作流程图
- 添加关键设计决策卡片组件
```

---

## Type 类型说明

| 类型 | 说明 | 示例 |
|------|------|------|
| `feat` | 新功能、新页面、新组件 | `feat(blog): 新增算子优化博客文章` |
| `fix` | 修复 Bug | `fix(nav): 修复移动端菜单无法关闭` |
| `style` | 样式调整（不影响逻辑） | `style(index): 优化卡片 hover 动效` |
| `refactor` | 重构（不新增功能也不修复 Bug） | `refactor(css): 提取公共变量到 style.css` |
| `docs` | 文档变更 | `docs: 更新 README 部署说明` |
| `chore` | 构建/工具/配置变更 | `chore: 更新 .gitignore` |
| `perf` | 性能优化 | `perf(js): 减少粒子数量降低 CPU 占用` |
| `content` | 纯内容更新（文案/数据） | `content(index): 更新技术栈描述` |

---

## Scope 范围说明

| 范围 | 对应内容 |
|------|---------|
| `index` | 首页 `index.html` |
| `project` | 项目详情页 `project-*.html` |
| `blog` | 博客页面 `blog.html` |
| `article` | 博客文章页 `article-*.html` |
| `css` | 样式文件 `css/` |
| `js` | 脚本文件 `js/` |
| `images` | 图片资源 `images/` |
| `nav` | 导航栏组件 |
| 省略 | 影响多个模块时可不写 |

---

## 规则

1. **subject 用中文**，简洁明了，不超过 50 字
2. **不加句号**结尾
3. **body 可选**，用于补充改动细节，每行不超过 72 字
4. **一次提交只做一件事**，避免把不相关的改动混在一起
5. **先 `git diff` 确认改动**，再写 commit message

---

## 常见场景参考

```bash
# 新增页面
git commit -m "feat(project): 新增 SuperBizAgent 智能运维项目详情页"

# 修改首页
git commit -m "style(index): 优化项目卡片布局和配色"

# 修复问题
git commit -m "fix(article): 修复代码块在移动端溢出"

# 更新内容
git commit -m "content(index): 更新个人简介和技术栈"

# 多处改动
git commit -m "feat: 新增 Agent 项目页并优化首页项目展示"
```
