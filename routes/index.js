const express = require('express');
const router = express.Router();

// 首頁路由
router.get('/', async function (req, res, next) {
  // TODO: 取得產品列表
  res.render('index');
});

// API示範頁面
router.get('/api-demo', function (req, res, next) {
  res.render('api-demo');
});

// 名言頁面
router.get('/quote/:num', function (req, res, next) {
  const quoteList = [
    {
      author: "莊子",
      img: 'https://picsum.photos/id/1042/1000/600',
      text: "相濡以沫，不如相忘於江湖。"
    },
    {
      author: "老子",
      img: 'https://picsum.photos/id/1044/1000/600',
      text: "天下皆知美之為美，斯惡矣。皆知善之為善，斯不善矣。"
    },
    {
      author: "孔子",
      img: 'https://picsum.photos/id/112/1000/600',
      text: "知者不惑，仁者不憂，勇者不懼。"
    }
  ];
  // TODO: 根據:num參數選擇渲染的資料
  // 規則：使用/3的餘數為資料取得索引
  // TODO: 渲染相對應的畫面
});

module.exports = router;
