module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: true
  }
};