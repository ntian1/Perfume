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

    $("#changeUserName").click(function (event) {
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").addClass("hide");
        p.find("#changeUserName").addClass("hide");
        p.find("#userNameCancel").removeClass("hide");
        $("#userNameForm").removeClass("hide");
        return false;
    });

    $("#userNameCancel").click(function (event) {
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").removeClass("hide");
        p.find("#changeUserName").removeClass("hide");
        p.find("#userNameCancel").addClass("hide");
        $("#userNameForm").addClass("hide");
        return false;
    });

    $("#changeEmailAddress").click(function (event) {
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").addClass("hide");
        p.find("#changeEmailAddress").addClass("hide");
        p.find("#emailAddressCancel").removeClass("hide");
        $("#emailAddressForm").removeClass("hide");
        return false;
    });

    $("#emailAddressCancel").click(function (event) {
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").removeClass("hide");
        p.find("#changeEmailAddress").removeClass("hide");
        p.find("#emailAddressCancel").addClass("hide");
        $("#emailAddressForm").addClass("hide");
        return false;
    });

    $("#changePassword").click(function (event) {
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").addClass("hide");
        p.find("#changePassword").addClass("hide");
        p.find("#passwordCancel").removeClass("hide");
        $("#passwordForm").removeClass("hide");
        return false;
    });

    $("#passwordCancel").click(function (event) {
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").removeClass("hide");
        p.find("#changePassword").removeClass("hide");
        p.find("#passwordCancel").addClass("hide");
        $("#passwordForm").addClass("hide");
        return false;
    });


    $("#changeGender").click(function (event) {
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").addClass("hide");
        p.find("#changeGender").addClass("hide");
        p.find("#genderCancel").removeClass("hide");
        $("#genderForm").removeClass("hide");
        return false;
    });

    $("#genderCancel").click(function (event) {
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").removeClass("hide");
        p.find("#changeGender").removeClass("hide");
        p.find("#genderCancel").addClass("hide");
        $("#genderForm").addClass("hide");
        return false;
    });


    $("#changeAge").click(function (event) {
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").addClass("hide");
        p.find("#changeAge").addClass("hide");
        p.find("#ageCancel").removeClass("hide");
        $("#ageForm").removeClass("hide");
        return false;
    });

    $("#ageCancel").click(function (event) {
        event.preventDefault();
        const p = $(this).parent();
        p.find("ptag").removeClass("hide");
        p.find("#changeAge").removeClass("hide");
        p.find("#ageCancel").addClass("hide");
        $("#ageForm").addClass("hide");
        return false;
    });

    $("button").click(function (event) {
        if (this.classList.contains("login") || this.classList.contains("btn")) {
            return true;
        }
        event.preventDefault();
        const p = $(this).parent();
        if (!p.find("input")[0].value) {
            alert("Please input something!")
            return false;
        }
        // if (p[0].id == "userNameForm") {
        //     $.ajax({
        //         type: "POST",
        //         url: window.location.href,
        //         data: {
        //             userId: p.parent()[0].id,
        //             newUserName: p.find("#userName").value
        //         },
        //         success: function (result) {
        //             alert('Succes!');
        //             window.location.reload();
        //         },
        //         error: function (result) {
        //             alert("Error " + result);
        //         }
        //     });
        // }
        else if (p[0].id == "emailAddressForm") {
            $.ajax({
                type: "POST",
                url: "/users/changeEmail",
                data: {
                    changeEmail: p.find("#emailAddress")[0].value
                },
                success: function (result) {
                    alert('Succes!');
                    window.location.reload();
                },
                error: function (result) {
                    alert("Error " + result);
                }
            });
        }
        else if (p[0].id == "passwordForm") {
            $.ajax({
                type: "POST",
                url: "/users/changePassword",
                data: {
                    changePassword: p.find("#password")[0].value
                },
                success: function (result) {
                    alert('Succes!');
                    window.location.reload();
                },
                error: function (result) {
                    alert("Error " + result);
                }
            });
        }
        else if (p[0].id == "genderForm") {
            const v = p.find("#gender");
            $.ajax({
                type: "POST",
                url: "/users/changeGender",
                data: {
                    changeGender: p.find("#gender")[0].value
                },
                success: function (result) {
                    alert('Succes!');
                    window.location.reload();
                },
                error: function (result) {
                    alert("Error " + result);
                }
            });
        }
        else if (p[0].id == "ageForm") {
            $.ajax({
                type: "POST",
                url: "/users/changeAge",
                data: {
                    changeAge: p.find("#age")[0].value
                },
                success: function (result) {
                    alert('Succes!');
                    window.location.reload();
                },
                error: function (result) {
                    alert("Error " + result);
                }
            });
        }
        else if (p.classList.contains("perfumeReviewForm")) {
            $.ajax({
                type: "POST",
                url: "",
                data: {
                    reviewId: p.parent()[0].id,
                    newReview: p.find("textarea").text(),
                    newRating: p.find("input").val()
                },
                success: function (result) {
                    alert('Succes!');
                    window.location.reload();
                },
                error: function (result) {
                    alert("Error " + result);
                }
            });
        }
        else {return true;}
        return false;
    });

    $(".changeReview").click(function (event) {
        event.preventDefault();
        const p = $(this).parent().parent();
        const reviewContent = p.find(".reviewContent");
        reviewContent.addClass("hide");
        const reviewRating = p.find(".reviewRating");
        reviewRating.addClass("hide");
        p.find(".changeReview").addClass("hide");
        p.find(".reviewLikes").addClass("hide");
        p.find(".reviewDislikes").addClass("hide");
        p.find(".deleteReview").addClass("hide");
        p.find(".reviewCancel").removeClass("hide");
        const perfumeReviewForm = p.find(".perfumeReviewForm");
        perfumeReviewForm.removeClass("hide");
        perfumeReviewForm.find("textarea").text(reviewContent.text().replace("Review Content:", "").substring(1));
        const rating = reviewRating.text().replace("Rating:", "").substring(1);
        perfumeReviewForm.find("input").val(rating);
        return false;
    });

    $(".reviewCancel").click(function (event) {
        event.preventDefault();
        const p = $(this).parent().parent();
        p.find(".reviewContent").removeClass("hide");
        p.find(".reviewRating").removeClass("hide");
        p.find(".reviewDislikes").removeClass("hide");
        p.find(".reviewLikes").removeClass("hide");
        p.find(".changeReview").removeClass("hide");
        p.find(".deleteReview").removeClass("hide");
        p.find(".reviewCancel").addClass("hide");
        p.find(".perfumeReviewForm").addClass("hide");
        return false;
    });

    $(".deleteReview").click(function (event) {
        event.preventDefault();
        const p = $(this).parent();
        if (confirm("Are you sure you want to delete it?")) {
            $.ajax({
                type: "DELETE",
                url: window.location.href,
                data: {
                    reviewId: p.parent()[0].id
                },
                success: function (result) {
                    alert('Succes!');
                    window.location.reload();
                },
                error: function (result) {
                    alert("Error " + result);
                }
            });
        }
    });

    $(".like").click(function (event) {
        event.preventDefault();
        const p = $(this).parent();
        $.ajax({
            type: "POST",
            url: "/perfume/like",
            data: {
                reviewId: p.parent()[0].id
            },
            success: function (result) {
                alert('Succes!');
                p.find("ltag").text(parseInt(p.find("ltag").text()) + 1);
            },
            error: function (result) {
                alert("Error " + result);
            }
        });
    });

    $(".dislike").click(function (event) {
        event.preventDefault();
        const p = $(this).parent();
        $.ajax({
            type: "POST",
            url: "/perfume/dislike",
            data: {
                reviewId: p.parent()[0].id
            },
            success: function (result) {
                alert('Succes!');
                p.find("dltag").text(parseInt(p.find("dltag").text()) + 1);
            },
            error: function (result) {
                alert("Error " + result);
            }
        });
    });
});
