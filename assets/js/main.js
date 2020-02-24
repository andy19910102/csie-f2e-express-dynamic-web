// 登入表單送出時
$('#loginForm').submit(function (event) {
    event.preventDefault();
    const email = $('#loginEmail').val(),
        password = $('#loginPassword').val();
    console.log('[開始登入]', { email: email, password: password });
});

// 註冊表單送出時
$('#signUpForm').submit(function (event) {
    event.preventDefault();
    const email = $('#signUpEmail').val(),
        password = $('#signUpPassword').val();
    console.log('[開始註冊]', { email: email, password: password });
});

// 登出按鈕點擊時
$('#logoutBtn').click(function () {
    console.log('[開始登出]');
});