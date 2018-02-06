const postcss = require('postcss')
const cssnext = require('postcss-cssnext')
const pxtorpx = require('postcss-pxtorpx')

exports.default = function (content, config, file) {
  return new Promise((resolve, reject) => {
    postcss([cssnext({
      features: {
        customProperties: {
          variables: {
            mainColor: '#ff6d66'
          }
        }
      }
    }), pxtorpx({
      multiplier: 2
    })]).process(content, {
      form: undefined
    }).then(res => {
      resolve(res.css)
    }).catch(reject)
  })
}