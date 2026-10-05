const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const fileinclude = require('gulp-file-include');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch('src/**/*.html').on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src('src/sass/**/*.+(scss|sass)')
            .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({suffix: '.min', prefix: ''}))
            .pipe(autoprefixer())
            .pipe(cleanCSS())
            .pipe(gulp.dest('dist/css'))
            .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.+(scss|sass|css)', gulp.parallel('styles'));
    gulp.watch('src/**/*.html').on('change', gulp.parallel('html'));
    gulp.watch('src/templates/*.html').on('change', gulp.parallel('templates'));
    gulp.watch('src/js/**/*.js').on('change', gulp.parallel('scripts'));
    gulp.watch('src/assets/fonts/**/*').on('all', gulp.parallel('fonts'));
    gulp.watch('src/assets/icons/**/*').on('all', gulp.parallel('icons'));
    gulp.watch('src/assets/img/**/*').on('all', gulp.parallel('images'));
});

gulp.task('html', function() {
    return gulp.src("src/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist/"));
});

gulp.task('templates', function() {
    return gulp.src("src/templates/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("dist/templates"));
});

gulp.task('scripts', function() {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function() {
    return gulp.src("src/assets/fonts/**/*")
        .pipe(gulp.dest("dist/assets/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function() {
    return gulp.src("src/assets/icons/**/*")
        .pipe(gulp.dest("dist/assets/icons"))
        .pipe(browserSync.stream());
});

gulp.task('images', function() {
    return gulp.src("src/assets/img/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("dist/assets/img"))
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'templates', 'scripts', 'fonts', 'icons', 'images'));