module.exports = {
  title: `yoonkyoung`,
  description: `김윤경의 기술 블로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://yoonkyoungme.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `https://github.com/Yoonkyoungme/Yoonkyoungme.github.io`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `김윤경`,
    bio: {
      role: `개발자`,
      description: [
        '성장과 경험을 추구하는',
        '세상에 가치를 더하는',
        '사용자 중심의 개발을 추구하는',
      ],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
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
