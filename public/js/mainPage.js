//将电话加入剪切板
$('#phoneLink').click(async function () {
    await navigator.clipboard.writeText("+1 (201) 123-1234");
    window.alert("Our phone number \"+1 (201) 123-1234\" has been added to your clipboard!");
    return false;
});

//将邮箱加入剪切板
$('#emailLink').click(function () {
    await navigator.clipboard.writeText("admin@gmail.com");
    window.alert("Our email address \"admin@gmail.com\" has been added to your clipboard!");
    return false;
});

