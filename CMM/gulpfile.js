var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

gulp.task('scripts', function(){
  return gulp.src('js/*.js')
   
    //.pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
});

gulp.task('server', function(){
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('copy-index', function(){
  return gulp.src('index.html')
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
});

gulp.task('images', function(){
  return gulp.src('img/**/*.{jpg,png,gif,mp3}')
    // .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('data', function(){
  return gulp.src(['xml/*.xml', 'json/*.json', '!json/secret.json']).pipe(gulp.dest('dist/json'));
});

gulp.task('build', ['copy-index', 'images', 'scripts', 'sass', 'css'], function(){
  console.log('编译成功！');
});

gulp.task('watch', function(){
  gulp.watch('index.html', ['copy-index']);
  gulp.watch('img/**/*.{jpg,png,mp3}', ['images']);
  gulp.watch(['xml/*.xml', 'json/*.json', '!json/secret.json'], ['data']);
  gulp.watch('stylesheet/**/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['scripts']);
  gulp.watch('css/**/*.css', ['css']);
});

gulp.task('less', function(){
  return gulp.src('css/**/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass', function(){
  return gulp.src('stylesheet/**/*.scss')
    .pipe(sass())
    //.pipe(minifyCSS())
    .pipe(gulp.dest('css'));
});

gulp.task('css', function(){
  return gulp.src('css/**/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['server', 'watch']);

















// end
