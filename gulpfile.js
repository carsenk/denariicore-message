'use strict';

var gulp = require('gulp');
var denariicoreTasks = require('denariicore-build');

denariicoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
