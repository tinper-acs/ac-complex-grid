var gulp = require("gulp");
var sass = require("gulp-sass");
var path = require("path");

gulp.task("sass_component", function () {
    console.log("###### sass convert  ######");
    return gulp
        .src([path.join(process.cwd(), "./src/**/*.scss")])
        .pipe(sass())
        .pipe(gulp.dest("./build"));
});

