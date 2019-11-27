
let devServer = {
  disableHostCheck: true
};

if (process.env.NODE_ENV === "production") {
  console.log("Vue config has been registered for production.");
} else {
  console.log("Vue config has been registered for development."); 
}



module.exports = {
    css: {
      loaderOptions: {
        scss: {
          
        }
      }
    },
    devServer: {
      disableHostCheck: true
    },
    configureWebpack: {
        module: {
          rules: [{
            test: /\.styl$/,
            use: {
              loader: 'stylus-loader',
            },
          }]
        }
      }
  };
