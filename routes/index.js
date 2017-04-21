var express = require('express');
router = express.Router(),
    request = require('request'),
    async = require('async');

var ajaxRouter = require('./routerConfig.js');
var httpUrl = 'http://mockhttp.cn/mock/';

// {method: 请求后台方法; url: 请求后台url data:传递给后台数据; req: 请求; res: 响应 } 
router.get('/index', function(req, res) {
    ajaxRouter.ajaxRouter({
        method: "GET",
        url: httpUrl + "apis/vueNode",
        res: res,
        req: req
    })
});


module.exports = router;