var gulp = require('gulp');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var less = require('gulp-less');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('jsx', () => {
	return browserify({
			entries: './app/index.jsx',
			extensions: ['.jsx'],
			debug: true
		})
		.transform('babelify', {
			presets: ["stage-0", 'es2015', 'react'],
			plugins: [
			    ["transform-class-properties", { "spec": true }]
			]
		})
		.bundle()
		.on('error', function(err){
			gutil.log(gutil.colors.red.bold('[browserify error]'));
			gutil.log(err.message);
			this.emit('end');
		})
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('public'));
});

gulp.task('less', function() {
	gulp.src('styles/**/*.{css,less}')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(concat('bundle.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public'));
});

gulp.task('webserver', function() {
	connect.server({
		livereload: true,
		root: ['.'],
		port: 3333
	});
});

gulp.task('livereload', function() {
	gulp.src(['public/**/*.css', 'public/**/*.js'])
		.pipe(watch(['public/**/*.css', 'public/**/*.js']))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('styles/*.{css,less}', ['less']);
	gulp.watch('app/*.jsx', ['jsx']);
	gulp.watch('app/actions/*.js', ['jsx']);
	gulp.watch('app/components/Input/*.jsx', ['jsx']);
	gulp.watch('app/components/Menu/*.jsx', ['jsx']);
	gulp.watch('app/components/Works/*.jsx', ['jsx']);
	gulp.watch('app/constants/Works/*.js', ['jsx']);
	gulp.watch('app/data/WorksPack/*.json', ['jsx']);
	gulp.watch('app/images/portfolio/*.jpg', ['jsx']);
	gulp.watch('app/reducers/*.js', ['jsx']);
})

gulp.task('default', ['jsx', 'less', 'webserver', 'livereload', 'watch']);
