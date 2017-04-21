/*
    导入配置包
 */
var express = require('express');
var request = require('request');
var async = require('async');

var ERR_MSG = "服务器错误，请联系管理员";

var ajaxRouter = function(opts) {
    async.parallel({
        /**
         * 前端请求nodeExpress接口封装
         * @param  {method: 请求后台方法; url: 请求后台url data:传递给后台数据; req: 请求; res: 响应 } 
         * @return {json}
         */
        fn: function(done) {
            var headers = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };
            if (!opts.data) {
                var options = {
                    method: opts.method,
                    url: opts.url,
                    headers: headers,
                };
            } else {
                var options = {
                    method: opts.method,
                    url: opts.url,
                    headers: headers,
                    form: opts.data
                };
            }
            request(options, function(err, response, body) {
                if (!err) {
                    done(null, body);
                } else {
                    done(err, null);
                }
            });
        }
    }, function(err, result) {
        if (!err) {
            var data = JSON.parse(result.fn);
            opts.res.send(data);
        } else {
            opts.res.send(ERR_MSG);
        }
    });
}

exports.ajaxRouter = ajaxRouter;