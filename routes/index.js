var express = require('express');
	router = express.Router(),
	request = require('request'),
	async = require('async');

router.get('/index', function(req, res, next) {
	async.parallel({
		goods: function(done) {
			var headers = {
				'Content-Type': 'application/x-www-form-urlencoded'
			};
			var options = {
				method: 'GET',
				url: 'http://mockhttp.cn/mock/apis/vueNode',
				headers: headers
				// form: data
			};
			request(options, function(err, response, body) {
				if(!err) {
					done(null, body);
				} else {
					done(err, null);
				}
			});

		}
	}, function(err, result) {
		var data = JSON.parse(result.goods);
//		res.render('index', {
//			'title': data.seller.name
//		});
		res.send(data.seller);
	});
});

module.exports = router;