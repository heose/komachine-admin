module.exports = api => {
  api.cache(true);
  const presets = ['next/babel'];
  const plugins = [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              removeAttrs: { attrs: '(data-name)' },
            },
            {
              cleanupIDs: true,
            },
          ],
        },
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'lodash',
  ];
  return {
    presets,
    plugins,
  };
};
// {
//   "presets": ["next/babel"],
//   "plugins": [
//     "inline-react-svg",
//     [
//       "babel-plugin-styled-components",
//       {
//         "ssr": true,
//         "displayName": true,
//         "preprocess": false
//       }
//     ],
//     ["@babel/plugin-proposal-decorators", { "legacy": true }],
//     ["@babel/plugin-proposal-class-properties", { "loose": true }]
//     "lodash"
//   ]
// }
