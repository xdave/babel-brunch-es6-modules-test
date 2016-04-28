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
    }
};
