// This file is NOT read by peraglot. It is only used to demonstrate how to typecheck the config object locally.
// You can copy the value of the variable, then paste it into your peraglot.config.json file for use.
// Currently only peraglot.config.json is supported by the plugin

/** @type {import('@peraglot-labs/developer-tools').config.PeraglotConfigInput} */
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
