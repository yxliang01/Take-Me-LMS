const chromeManifestIconify = require('gulp-chrome-manifest-iconify');

import gulp from 'gulp';
import livereload from 'gulp-livereload';
import args from './lib/args';
import gulpif from 'gulp-if';

gulp.task('iconify', () =>
  gulp.src('app/images/source/icon.png')
    .pipe(chromeManifestIconify({
      manifest: 'app/manifest.json',
      resizeMode: chromeManifestIconify.ResizeMode.HERMITE
    }))
    .pipe(gulp.dest(`dist/${args.vendor}`))
    .pipe(gulpif(args.watch, livereload()))
);
