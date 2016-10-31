//include plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');


//convert sass to css, bundle, prefix and minify
gulp.task('styles', function() {
    gulp.src([  './node_modules/bootstrap/dist/css/bootstrap.min.css', 
                './node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
                './node_modules/font-awesome/css/font-awesome.min.css',
                './source/assets/styles/*.scss'
                ])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./upload/assets/styles'));
});

// minify new images
gulp.task('imagemin', function() {
  var imgSrc = './source/assets/images/**/*',
      imgDst = './upload/assets/images';

  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './source/**/*.htm',
      htmlDst = './upload';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src([    './node_modules/jquery/dist/jquery.min.js',
                './node_modules/bootstrap/dist/js/bootstrap.min.js',
                './source/assets/scripts/*.js'                
                ])
    .pipe(concat('script.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./upload/assets/scripts'));
});


gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles'], function() {
});

//Watch task
// gulp.task('default',function() {
//     gulp.watch('source/sass/**/*.scss',['styles']);
// });