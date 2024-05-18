/** @type {import('peraglot-tools').config.PeraglotConfigInput} */
const peraglotConfig = {
  source: {
    locale: "en_US",
    path: "public/lang/en.json",
  },
  targets: {
    ja_JP: {
      path: "public/lang/ja.json",
    },
    zh_CN: {
      path: "public/lang/zh.json",
    },
  },
  detectionBranch: "main",
  translationBranch: "main",
  publishBranch: "main",
};

module.exports = peraglotConfig;
