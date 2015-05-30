module.exports = function() {
  //define base paths
  //the test libraries live in the node modules folder

  var nodeModules = 'node_modules';


  //this these two strings get all of our js
  var config = {

    alljs: [
      './src/**/*.js',
      './*.js'
    ],

    //and these paths get all our testing libraries
    testlibraries: [
      nodeModules + '/mocha/mocha.js',
      nodeModules + '/chai/chai.js',
      nodeModules + '/mocha-clean/index.js',
      nodeModules + '/sinon-chai/lib/sinon-chai.js'
    ],

    //unclear quite what this is for, but looks basic enough
    source: 'src/'

    //one thing that stands out to me is not having a spec runner
    //in this example, the spec runner lives in
    //'./src/client/'

    //idk if I need a client folder... since I'm just trying to test a single js file

    //and something lives in report. lets not worry about that either

  };

  //Karma settings

  config.karma = getKarmaOptions();

  return config;

  function getKarmaOptions() {
    //lets leave this empty for now
    //looks like some stuff for coverage reporting
  }

};
