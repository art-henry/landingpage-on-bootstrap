const gulp = require('gulp'); // Подключаем Gulp
const    browserSync  = require('browser-sync'); // Подключаем Browser Sync

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({
        server: {baseDir: './'},
        startPath: 'index.html',
        serveStaticOptions: {extensions: ["html"] },
        ghostMode: {scroll: false },
        notify: false,
      });
});

gulp.task('css', function () {
    return gulp.src('css/**/*.css')
        .pipe(browserSync.reload({stream: true}))
})

gulp.task('script', function () {
    return gulp.src('js/**/*.js')
        .pipe(browserSync.reload({stream: true}))
})

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(browserSync.reload({stream: true}));
})

gulp.task('watch', function() {
    gulp.watch(['css/**/*.css'], gulp.parallel('css')); // Наблюдение за css файлами в папке css
    gulp.watch(['js/**/*.js'], gulp.parallel('script')); // Наблюдение за css файлами в папке css
    gulp.watch('*.html', gulp.parallel('html'));
});

gulp.task('default', gulp.parallel('watch', 'browser-sync',
() => { console.log('dev start');}))