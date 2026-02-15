export default {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    hot: true,
    port: 3000,
    watchFiles: "../src/template.html",
  },
};
