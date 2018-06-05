exports.config = {
  globalStyle: 'src/global/app.css',
  outputTargets: [
    { 
      type: 'www',
      dir: 'docs'
   }
  ]
};

exports.devServer = {
  root: 'docs',
  watchGlob: '**/**'
};
