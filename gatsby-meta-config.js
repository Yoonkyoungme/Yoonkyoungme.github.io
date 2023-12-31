module.exports = {
  title: `yoonkyoungme.github.io`,
  description: `yoonkyoung's tech blog`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://yoonkyoungme.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    giscus: {
      repo: 'Yoonkyoungme/Yoonkyoungme.github.io',
      repoId: 'R_kgDOKWaEnA',
      categoryId: 'DIC_kwDOKWaEnM4CbL8z',
    },
  },
  author: {
    name: `김윤경`,
    bio: {
      role: `개발자`,
      description: ['성장과 경험을 추구하는', '세상에 가치를 더하는', '사용자 중심의'],
      thumbnail: 'profile.png',
    },
    social: {
      github: `https://github.com/Yoonkyoungme`,
      linkedIn: `www.linkedin.com/in/yoonkyoung-kim/`,
      email: `dev.yoonkyoung@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],
  },
};
