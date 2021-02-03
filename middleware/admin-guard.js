// 設置管理者路由守衛
function adminGuard(router) {
    router.use(function (req, res, next) {
        // 取得到loginChecker所創建的auth物件 
        const auth = res.locals.auth;
        // 是管理者
        if (auth.isAdmin) {
            // 放行
            next();
        } else {
            // 強制引導到首頁路由
            res.redirect("/");
        }
    });
}

module.exports = adminGuard;