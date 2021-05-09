const express = require('express');
const router = express.Router();

// 首頁路由
router.get('/', function (req, res, next) {
  // Cloud Firestore 規格
  // doc.id => 取得文件的id(字串)
  // doc.data() => 取得文件的原始資料(物件)
  const productList = [];
  // 取得產品列表 ES7
  // 將產品列表傳遞到模板
  res.locals.productList = productList;
  res.render('index');
});

module.exports = router;
