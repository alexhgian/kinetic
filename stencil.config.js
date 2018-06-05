exports.config = {
  globalStyle: 'src/global/app.css',
  outputTargets: [
    { 
      type: 'www',
      dir: 'docs',
      baseUrl: '/kinetic'
   }
  ]
};

exports.devServer = {
  root: 'docs',
  watchGlob: '**/**'
};
