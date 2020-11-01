const express = require('express');
const moment = require('moment');
const axios = require('axios');
const router = express.Router();

// 登入
router.post('/login', function (req, res, next) {
    console.log('[準備登入]');
    console.log('[前端送來的資料]', req.body);
    // Create session cookie
    // https://firebase.google.com/docs/auth/admin/manage-cookies#create_session_cookie
    // TODO: 取得前端傳來的使用者 idToken
    const idToken = req.body.idToken;
    console.log('[前端傳來的idToken]', idToken);
    // 有效期間
    const expiresIn = 60 * 60 * 24 * 5 * 1000;
    // 建立 Session Cookie
    // admin.auth().createSessionCookie(idToken, {expiresIn})

});

// 登出
router.post('/logout', function (req, res, next) {
    // Sign Out
    // https://firebase.google.com/docs/auth/admin/manage-cookies#sign_out
    const cookieName = req.app.locals.cookieName;
    const sessionCookie = req.cookies[cookieName] || '';
    // admin.auth().verifySessionCookie(sessionCookie)
    //     .then(user => {

    //     })
    //     .catch(err => {
    //         res.status(200).json({ msg: 'Logout' })
    //     });
});

// 新增商品
router.post('/product/create', function (req, res, next) {
    console.log('[準備新增商品]');
    console.log('[前端送來的資料]', req.body);
    // Add a document
    // https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document
    const product = req.body;

});

// 更新商品
router.put('/product/:pid', function (req, res, next) {
    console.log('[準備更新商品]');
    console.log('[前端送來的資料]', req.body);
    console.log('[pid]', req.params.pid);
    const pid = req.params.pid;
    const product = req.body;

});

// 刪除商品
router.delete('/product/:pid', function (req, res, next) {
    console.log('[準備刪除商品]');
    console.log('[pid]', req.params.pid);
    const pid = req.params.pid;

});

module.exports = router;
