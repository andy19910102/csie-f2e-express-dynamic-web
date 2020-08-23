const express = require('express');
const router = express.Router();

// 首頁路由
router.get('/', function (req, res, next) {
  // TODO: 取得產品列表

  // 將產品列表傳遞到模板
  res.locals.productList = [];
  res.render('index');
});

// API示範頁面
router.get('/api-demo', function (req, res, next) {
  res.render('api-demo');
});

module.exports = router;
