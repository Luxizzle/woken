const gulp = require('gulp');
const ts = require('gulp-typescript');

const packages = {
  core: ts.createProject('packages/core/tsconfig.json'),
  'entity-service': ts.createProject('packages/entity-service/tsconfig.json'),
  'render-service': ts.createProject('packages/render-service/tsconfig.json'),
};
const modules = Object.keys(packages);

gulp.task('default', function() {
  modules.forEach(module => {
    gulp.watch(
      [`packages/${module}/src/**/*.ts`, `packages/${module}/src/**/*.tsx`],
      gulp.series(module)
    );
  });

  gulp.parallel(modules)();
});

modules.forEach(module =>
  gulp.task(module, function() {
    return packages[module]
      .src()
      .pipe(packages[module]())
      .pipe(gulp.dest(`packages/${module}/dist`));
  })
);
