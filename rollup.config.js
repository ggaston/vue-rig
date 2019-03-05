import commonjs from 'rollup-plugin-commonjs';
import path from 'path';

module.exports = {
    input: 'src/app.js',
    output: {
      file: 'html/script/app.js',
      format: 'iife'
    },
    plugins: [
        commonjs({
            namedExports: { './src/vue.js': ['Vue'] }
        })
    ],
    external: [
        path.resolve( __dirname, './src/vue.js' )
    ]
    
  };