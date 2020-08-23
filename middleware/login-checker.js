const admin = require('../firebase');
const db = require('../db');

// 登入驗證關口
function loginChecker(router) {
    // Verify session cookie and check permissions
    // https://firebase.google.com/docs/auth/admin/manage-cookies#verify_session_cookie_and_check_permissions
    router.use(function (req, res, next) {
        console.log('[進入登入檢查站]');
        // TODO: 設計登入驗證關卡...
        // 取得使用者的sessionCookie,若沒有則設定為空字串
        const cookieName = '';
        const sessionCookie = req.cookies[cookieName] || '';
        // admin.auth().verifySessionCookie(sessionCookie, true)

    });
}

module.exports = loginChecker;