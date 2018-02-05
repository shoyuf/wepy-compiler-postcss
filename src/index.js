'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (content, config, file) {
  return new Promise(function (resolve, reject) {
    (0, _postcss2.default)([(0, _postcssCssnext2.default)({
      cssnextConf: cssnextConf
    })]).process(content, {
      from: undefined
    }).then(function (res) {
      resolve(res.css);
    }).catct(reject);
  });
};

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _postcssCssnext = require('postcss-cssnext');

var _postcssCssnext2 = _interopRequireDefault(_postcssCssnext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import path from 'path'

var cssnextConf = {
  features: {
    customProperties: {
      variables: {
        mainColor: '#ff6d66'
      }
    }
  }
};