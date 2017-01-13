System.config({
  defaultJSExtensions: true,
  map: {
    angular: '/node_modules/angular/index.js',
    'plugin-babel': '/node_modules/systemjs-plugin-babel/plugin-babel.js',
    'systemjs-babel-build': '/node_modules/systemjs-plugin-babel/systemjs-babel-browser.js'
  },
  transpiler: 'plugin-babel'
});
