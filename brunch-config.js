module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'vendor.js': /^(?!app)/,
                'app.js': /^app/
            }
        },
        stylesheets: { joinTo: 'app.css' }
    },
    modules: {
        autoRequire: { 'app.js': ['main'] }
    },
    plugins: {
        babel: Object.assign({

        }, require('./babelrc.json'))
    }
};
