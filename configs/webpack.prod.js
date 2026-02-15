import TerserPlugin from "terser-webpack-plugin"
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"

export default {
  mode: "production",
  devtool: 'source-map',
  optimization: { 
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
  }
}
