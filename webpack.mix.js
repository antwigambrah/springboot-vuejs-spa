let mix=require('laravel-mix');

mix.js('./src/main/resources/frontend/js/app.js', './src/main/resources/static/js')
    .sass('./src/main/resources/frontend/scss/app.scss', './src/main/resources/static/css');

mix.browserSync({
    proxy: 'localhost:8080',
    files: ["./src/main/resources/static/js", "./src/main/resources/static/css"]
});

