module.exports = function(config){
  var gulpConfig = require('./gulp.config')();

  config.set({
    basePath: './',

    frameworks: ['mocha','chai','sinon','chai-sinon'],

    //ignoring everything that doesn't use
    //karma property on gulpConfig
    //which I ignored

    //ignore reporters for now too
    //reporters: ['progress', 'coverage']


    //I really like this patern of objects and arrays
//     coverageReporter: {
//       dir: gulpConfig.karma.coverage.dir,
//       reporters: gulpConfig.karma.coverage.reporters
//     }

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false

  });

};
