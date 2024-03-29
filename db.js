// 引用在firebase.js裡已經初始化的admin
// FIRESTORE 文件
// https://firebase.google.com/docs/firestore/quickstart
const { getFirestore } = require('firebase-admin/firestore');
const admin = require('./firebase');

// 初始化db
const db = getFirestore();

// 輸出db讓其他檔案可使用
module.exports = db;
