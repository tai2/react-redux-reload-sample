'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var sass = require('gulp-sass');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var hmr = require('browserify-hmr');
var merge = require('merge-stream');
var del = require('del');
var gutil = require('gulp-util');

gulp.task('clean', function() {
    return del('./dist');
});

gulp.task('copy-assets', function() {
    var t1 = gulp.src([
        'assets/images/**/*',
    ], { base: 'assets' })
    .pipe(gulp.dest('dist'));
    var t2 = gulp.src([
        'assets/html/*'
    ], { base: 'assets/html' })
    .pipe(gulp.dest('dist'));

    return merge(t1, t2);
});

gulp.task('css:develop', function() {
    return gulp
    .src('assets/stylesheets/base.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload());
});

gulp.task('css:watch', ['css:develop'], function() {
    livereload.listen();
    gulp.watch('./assets/stylesheets/*.scss', ['css:develop']);
});

var w;
gulp.task('js:watch', function bundle() {
    if (!w) {
        w = browserify(['./src/index_dev.jsx'], {
            debug: true,
            cache: {},
            packageCache: {},
            plugin: [watchify, hmr],
        })
        .on('update', bundle)
        .on('log', gutil.log);
    }

    return w.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('./bundle_dev.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist'));
});

gulp.task('js:develop', function() {
    return browserify({
        entries: './src/index_dev.jsx',
        debug: true,
    })
    .bundle()
    .pipe(source('./bundle_dev.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('server', function() {
    var path = require('path');
    var express = require('express');
    var app = express();
    var logger = require('morgan');
    var connectLivereload = require('connect-livereload');

    app.use(logger('dev'));
    app.use(connectLivereload({ port: 35729 })); // 35729 is livereload's default
    app.use('/', express.static(path.resolve(__dirname, 'dist'), {index: 'index_dev.html'}));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'dist', 'index_dev.html'));
    });
    app.listen(process.env.PORT || 3000);
});

gulp.task('develop', ['copy-assets', 'css:develop', 'js:develop']);

gulp.task('watch', ['copy-assets', 'css:watch', 'js:watch', 'server']);

