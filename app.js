//for Node.js - app.js

// (a)使用モジュールの読み込み
var express = require('express');
var cfenv = require('cfenv');

// (b)アプリケーションの作成
var app = express();
app.use(express.static(__dirname + '/dist/Tutorial_angular'));

// (f)リクエストの受け付け
var appEnv = cfenv.getAppEnv();
var server = app.listen(appEnv.port || 4200, '0.0.0.0', function() {
  console.log('Listening on port %d', server.address().port);
});