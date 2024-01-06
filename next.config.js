/** @type {import('next').NextConfig} */
const path = require('path')
 
module.exports = {
  distDir: 'docs',
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
