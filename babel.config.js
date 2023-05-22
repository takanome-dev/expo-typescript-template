module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~/assets': './assets',
            '~/src': './src',
            '~/theme': './src/theme',
            '~/components': './src/components',
            '~/navigation': './src/navigation',
            '~/screens': './src/screens',
            '~/slices': './src/redux/slices',
            '~/utils': './src/utils',
          },
        },
      ],
    ],
  };
};
