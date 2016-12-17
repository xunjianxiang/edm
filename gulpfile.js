'use strict';

const fs = require('fs');
const gulp = require('gulp');
const mustache = require('gulp-mustache');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');

gulp.task('channel_week_render', () => {
    let data = JSON.parse(fs.readFileSync(`./src/channel_week/data.json`, 'utf-8'));
    return gulp.src('./src/channel_week/index.html')
        .pipe(plumber())
        .pipe(mustache(data))
        .pipe(gulp.dest('./dest/channel_week'));
})

gulp.task('channel_week', () => {
    browserSync.init({
        server: {
            baseDir: './dest/channel_week'
        }
    })
    gulp.watch(['./src/channel_week/index.html', './src/channel_week/data.json'], () => {
        gulp.start('channel_week_render');
        browserSync.reload();
    })
})