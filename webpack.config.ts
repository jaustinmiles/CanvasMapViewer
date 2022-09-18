const WriteFilePlugin = require("write-file-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(glsl?|vs?|fs?)$/,
                loader: 'ts-shader-loader',
                exclude: /node_modules/,
            }
        ]
    },
    stats: {warnings: false},
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.glsl'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: ['./dist'],
        hot: true,
    },
    plugins: [
        new WriteFilePlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './index.html',
                    to: 'index.html'
                },
                {
                    from: './src/images',
                    to: 'images'
                }
            ]
        })
    ]
}