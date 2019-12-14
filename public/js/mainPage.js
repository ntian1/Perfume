$(document).ready(function () {
    let link = window.location.href.replace("http://localhost:3000/", "");
    if (link != "") {
        link.replace("/", "+");
        link = "search?q=" + link;
    }
    $("#facebookLink").prop("href", "http://www.facebook.com/share.php?u=https://www.google.com/" + link);
    $("#fbshareLink").prop("href", "http://www.facebook.com/share.php?u=https://www.google.com/" + link);
    $("#twitterLink", "#twshareLink").prop("href", "https://twitter.com/share?url=" + encodeURIComponent(window.location.href) + "&text=" + document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');


    //将电话加入剪切板
    $("#phoneLink").click(async function (event) {
        event.preventDefault();
        await navigator.clipboard.writeText("+1 (201) 123-1234");
        alert("Our phone number \"+1 (201) 123-1234\" has been added to your clipboard!");
        return false;
    });

    // //将邮箱加入剪切板
    // $("#emailLink").click(async function (event) {
    //     event.preventDefault();
    //     await navigator.clipboard.writeText("admin@gmail.com");
    //     alert("Our email address \"admin@gmail.com\" has been added to your clipboard!");
    //     return false;
    // });

    $("#instagramLink").click(async function (event) {
        event.preventDefault();
        const url = window.location.href;
        await navigator.clipboard.writeText(url);
        alert("Our website \"" + url + "\" has been added to your clipboard!");
        window.open("https://www.instagram.com/");
        return false;
    });

    $("#searchInput").on("keydown", function (event) {
        if (event.which == 13 || event.keyCode == 13) {
            event.preventDefault();
            const searchContent = document.getElementById("searchInput").value;
            window.location.href = "/search/" + searchContent;
            return false;
        }
        return true;
    });

    $("#cart").click(function (event) {
        event.preventDefault();
        window.open($("#amazonLink")[0].href);
        return false;
    });

    $("#changeUserName").click(function (event){
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").addClass("hide");
        p.find("#changeUserName").addClass("hide");
        p.find("#userNameCancel").removeClass("hide");
        $("#userNameForm").removeClass("hide");
        return false;
    });

    $("#userNameCancel").click(function (event){
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").removeClass("hide");
        p.find("#changeUserName").removeClass("hide");
        p.find("#userNameCancel").addClass("hide");
        $("#userNameForm").addClass("hide");
        return false;
    });

    $("#changeEmailAddress").click(function (event){
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").addClass("hide");
        p.find("#changeEmailAddress").addClass("hide");
        p.find("#emailAddressCancel").removeClass("hide");
        $("#emailAddressForm").removeClass("hide");
        return false;
    });

    $("#emailAddressCancel").click(function (event){
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").removeClass("hide");
        p.find("#changeEmailAddress").removeClass("hide");
        p.find("#emailAddressCancel").addClass("hide");
        $("#emailAddressForm").addClass("hide");
        return false;
    });

    $("#changePassword").click(function (event){
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").addClass("hide");
        p.find("#changePassword").addClass("hide");
        p.find("#passwordCancel").removeClass("hide");
        $("#passwordForm").removeClass("hide");
        return false;
    });

    $("#passwordCancel").click(function (event){
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").removeClass("hide");
        p.find("#changePassword").removeClass("hide");
        p.find("#passwordCancel").addClass("hide");
        $("#passwordForm").addClass("hide");
        return false;
    });

    $("button").click(function (event){
        event.preventDefault();
        const p = $(this).parent();
        if (!p.find("input")[0].value){
            alert("Please input something!")
            return false;
        }
        if (p[0].id == "userNameForm"){
            $.ajax({
                type: "POST",
                url: window.location.href,
                data: {
                    userId: p.parent()[0].id,
                    newUserName: p.find("#userName").value
                },
                success: function(result) {
                    alert('Succes!');
                    window.location.reload();
                },
                error: function(result) {
                    alert("Error " + result);
                }
            });
        }
        if (p[0].id == "emailAddressForm"){
            $.ajax({
                type: "POST",
                url: window.location.href,
                data: {
                    userId: p.parent()[0].id,
                    newEmailAddress: p.find("#emailAddress").value
                },
                success: function(result) {
                    alert('Succes!');
                    window.location.reload();
                },
                error: function(result) {
                    alert("Error " + result);
                }
            });
        }
        if (p[0].id == "passwordForm"){
            $.ajax({
                type: "POST",
                url: window.location.href,
                data: {
                    userId: p.parent()[0].id,
                    newPassword: p.find("#emailAddress").value
                },
                success: function(result) {
                    alert('Succes!');
                    window.location.reload();
                },
                error: function(result) {
                    alert("Error " + result);
                }
            });
        }
        return false;
    });

    $(".changeReview").click(function (event){
        event.preventDefault();
        const p = $(this).parent();
        const asddd = p.find(".reviewContent");
        p.find(".reviewContent").addClass("hide");
        p.find(".reviewRating").addClass("hide");
        p.find(".changeReview").addClass("hide");
        p.find(".deleteReview").addClass("hide");
        p.find(".reviewCancel").removeClass("hide");
        p.find(".perfumeReviewForm").removeClass("hide");
        return false;
    });

    $(".reviewCancel").click(function (event){
        event.preventDefault();
        const p = $(this).parent();
        p.find(".reviewContent").removeClass("hide");
        p.find(".reviewRating").removeClass("hide");
        p.find(".changeReview").removeClass("hide");
        p.find(".deleteReview").removeClass("hide");
        p.find(".reviewCancel").addClass("hide");
        p.find(".perfumeReviewForm").addClass("hide");
        return false;
    });
});
