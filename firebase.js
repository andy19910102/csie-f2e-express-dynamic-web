// 初始化firebase
// FIREBASE NODE.JS初始化文件
// https://firebase.google.com/docs/firestore/quickstart#node.js_1
const admin = require("firebase-admin");

const serviceAccount = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// 輸出 admin 供其他檔案使用
module.exports = admin;