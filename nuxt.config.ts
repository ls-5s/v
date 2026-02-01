// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  
  // Nuxt 4 可选：关闭不必要的警告
  devtools: { enabled: false },
  
  css: ['~/assets/css/main.css'],
  
  // Nuxt 4 基础配置
  app: {
    baseURL: '/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  runtimeConfig: {
    // 私有密钥 (仅服务器端可用)
    apiSecret: '', // 可以被 NUXT_API_SECRET 环境变量覆盖
    // 公开配置 (客户端可用)
    public: {
      apiBase: '/api' // 可以被 NUXT_PUBLIC_API_BASE 环境变量覆盖
    }
  },

  // Nitro 配置: Vercel 环境下会自动检测，无需显式配置
  // nitro: {
  //   preset: 'vercel'
  // },

  // Nuxt 4 构建优化（解决兼容问题）
  build: {
    transpile: ['@vue/shared'], // 兼容 vue 依赖的废弃警告
  },
  
  typescript: {
    strict: false // 临时关闭严格模式，避免类型提示干扰部署
  },
  
  vite: {
    build: {
      target: 'es2022' // Correct place for target usually, but user put it in 'build'. I will follow user instruction strictly first.
    }
  }
})
