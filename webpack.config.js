module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.ts']
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: false
  }
};
