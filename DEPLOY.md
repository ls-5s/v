# Vercel 部署指南 (官方推荐配置)

根据 [Nuxt 官方文档](https://nuxt.com/deploy/vercel)，Nuxt 项目部署到 Vercel 实际上是 **零配置 (Zero Configuration)** 的。

## 🚀 核心配置

### 1. `nuxt.config.ts`
无需手动指定 `preset: 'vercel'`，Nuxt 会在构建时自动检测 Vercel 环境并应用最佳配置。

### 2. `vercel.json`
**不需要**。官方建议不要包含此文件，以免覆盖 Nuxt 自动生成的 Build Output API v3 配置。

## 🛠️ 部署步骤

1. **推送到 Git**:
   确保代码已提交到 GitHub/GitLab/Bitbucket。

2. **在 Vercel 导入项目**:
   - 选择你的仓库。
   - **Framework Preset**: Vercel 会自动识别为 `Nuxt.js`。
   - **Root Directory**: 如果代码在 `test` 文件夹，请在设置中指定。
   - **Build Command**: `npm run build` (默认)。
   - **Output Directory**: `.output/public` (默认，或自动处理)。

3. **环境变量**:
   在 Vercel 后台添加 `NUXT_API_SECRET` 等变量。

4. **点击 Deploy**。

## 常见问题

- **构建后 404**: 
  - 确保没有 `vercel.json` 干扰。
  - 检查 **Root Directory** 设置是否正确指向 `package.json` 所在目录。
