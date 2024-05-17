/** @type {import('peraglot-tools').config.PeraglotConfig} */
const peraglotConfig = {
  locales: {
    en_US: {
      isSource: true,
      path: "public/lang/en.json",
    },
    ja_JP: {
      path: "public/lang/ja.json",
    },
    zh_CN: {
      path: "public/lang/zh.json",
    },
  },
  publishBranch: "publish",
};

module.exports = peraglotConfig;
