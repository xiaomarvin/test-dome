module.exports = function (/* ctx */) {
  return {
    // https://v1.quasar.dev/quasar-cli/supporting-ts
    supportTS: false,
    boot: ["i18n", "axios"],
    css: ["app.scss"],
    extras: [
      "ionicons-v4",
      "mdi-v5",
      "fontawesome-v6",
      "eva-icons",
      "themify",
      "line-awesome",
      "bootstrap-icons",
      "roboto-font",
      "material-icons",
    ],
    build: {
      vueRouterMode: "hash",
      extendWebpack(cfg) {
        cfg.module.rules.push({
          resourceQuery: /blockType=i18n/,
          type: "javascript/auto",
          use: [
            { loader: "@kazupon/vue-i18n-loader" },
            { loader: "yaml-loader" },
          ],
        });
      },
      rtl: true,
      // rtl: false,
      // preloadChunks: true,
      // showProgress: false,
      gzip: true,
      // analyze: true,
      // extractCSS: false,
      chainWebpack() {},
    },
    devServer: {
      https: false,
      port: 8080,
      // open: true,
    },
    framework: {
      iconSet: "line-awesome",
      // lang: "en-us",
      // lang: "zh-CN",
      config: {},
      importStrategy: "all",
      plugins: [],
    },

    // animations: 'all',
    animations: [],
    ssr: {
      pwa: false,
    },
    pwa: {
      workboxPluginMode: "GenerateSW",
      workboxOptions: {},
      manifest: {
        name: `Quasar App`,
        short_name: `Quasar App`,
        description: `A Quasar Project`,
        display: "standalone",
        orientation: "portrait",
        background_color: "#ffffff",
        theme_color: "#027be3",
        icons: [
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    cordova: {},
    capacitor: {
      hideSplashscreen: true,
    },
    electron: {
      bundler: "packager", // 'packager' or 'builder'
      packager: {
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',
        // Windows only
        // win32metadata: { ... }
      },
      builder: {
        appId: "quasar-dome",
      },
      nodeIntegration: true,
      extendWebpack() {},
    },
  };
};
