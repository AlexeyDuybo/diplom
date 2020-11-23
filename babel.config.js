module.exports = {
    'presets': [
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
                development: true,
            },
        ],
        '@babel/preset-typescript',
    ],
    'plugins': [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
};
