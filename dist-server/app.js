"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '..', 'build')));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.get('/', function (req, res) {
  res.send('Home Page');
});
var recipes = [{
  name: 'nom1',
  content: 'some random stuff'
}, {
  name: 'nom100',
  content: 'this is not nom'
}];
app.get('/recipes', function (req, res) {
  console.log('recipes route');
  res.json(recipes);
});
module.exports = app;