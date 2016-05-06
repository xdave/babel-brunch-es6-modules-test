module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'vendor.js': /^(?!app)/,
                'app.js': /^app/
            }
        }
    },
    modules: {
        autoRequire: { 'app.js': ['main'] }
    },
    plugins: {
        npm: ['babel-brunch'],
        replacement: {
            replacements: [{
                files: /\.js$/,
                matches: [{
                    find: 'TEST_SOMETHING',
                    replace: JSON.stringify('TEST_SOMETHING_ELSE')
                }]
            }]
        }
    }
};
