module.exports = function (api) {
    api.cache(true);

    const presets = [
        ['@babel/preset-env',
            {
                useBuiltIns: "usage",
                corejs: 3,
                targets: {
                    chrome: "58",
                    ie: "11"
                }
            }
        ],
        '@babel/react',
        '@babel/typescript'
    ];

    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
        ['@babel/plugin-transform-runtime', { corejs: 3 }],
        'babel-plugin-styled-components'

    ];

    return {
        presets,
        plugins
    };
}
