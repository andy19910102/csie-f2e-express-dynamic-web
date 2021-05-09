const admin = require('../firebase');
const db = require('../db');

// 登入驗證關口
function loginChecker(router) {
    // Verify session cookie and check permissions
    // https://firebase.google.com/docs/auth/admin/manage-cookies#verify_session_cookie_and_check_permissions
    router.use(function (req, res, next) {
        console.log("[進入登入檢查站]");
        // 設計登入驗證關卡...
        // 取得使用者的sessionCookie,若沒有則設定為空字串
        const cookieName = "ntu-cookie";
        const sessionCookie = req.cookies[cookieName] || "";
        console.log("[sessionCookie]", sessionCookie);
        // 預設驗證狀態
        const auth = {
            isLogin: false,
            isAdmin: false,
            user: {}
        };
        admin.auth().verifySessionCookie(sessionCookie, true)
            .then(user => {
                console.log("驗證成功", user);
                // 將登入狀態設定為true
                auth.isLogin = true;
                // 將透過sessionCookie喚回的使用者資料存到auth.user內
                auth.user = user;
                // 將auth資料傳遞給模板使用 && 放行
                res.locals.auth = auth;
                // next()
            })
            .catch(err => {
                console.log("驗證失敗", err);
                // TODO: 將auth資料傳遞給模板使用 && 放行
                res.locals.auth = auth;
                // nuxt()
            });
    });
}

module.exports = loginChecker;