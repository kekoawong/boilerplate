module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            navigation: "./src/navigation",
            theme: "./constants/theme.jsx",
            screens: "./src/screens",
            event: "./src/event",
            library: "./src/library",
            root: "../"
          },
        },
      ],
    ],
  };
};
