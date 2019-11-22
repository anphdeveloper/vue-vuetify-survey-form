
let devServer = {
  disableHostCheck: true
};

if (process.env.NODE_ENV === "production") {
  console.log("Vue config has been registered for production.");
} else {
  console.log("Vue config has been registered for development."); 
}



// module.exports = {
//     css: {
//       loaderOptions: {
//         scss: {
//           prependData: `@import '~@/assets/scss/main.scss';`
//         }
//       }
//     },
//     configureWebpack: {
//         module: {
//           rules: [{
//             test: /\.(ttf|otf|eot|woff|woff2)$/,
//             use: {
//               loader: "file-loader",
//               options: {
//                 name: "fonts/[name].[ext]",
//               },
//             },
//           }]
//         }
//       }
//   };
