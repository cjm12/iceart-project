
$("#nav").find("li").eq(3).siblings().hover(function () {
    $("#nav").find("li").eq(3).stop().animate({
        left: this.offsetLeft,
        width: this.offsetWidth
    })
}, function () {
    $("#nav").find("li").eq(3).stop().animate({
        left: $("#nav").find("li")[1].offsetLeft,
        width: $("#nav").find("li")[1].offsetWidth
    })
    /*console.log($("#nav").find("li").eq(1)[0].offsetWidth)*/
})

$("#navAbout").find("li").eq(3).siblings().hover(function () {
    $("#navAbout").find("li").eq(3).stop().animate({
        left: this.offsetLeft,
        width: this.offsetWidth
    })
}, function () {
    $("#navAbout").find("li").eq(3).stop().animate({
        left: $("#navAbout").find("li")[2].offsetLeft,
        width: $("#navAbout").find("li")[2].offsetWidth
    })
})

$("#share").find("a").hover(function () {
    $(this).css({
        transform: "rotate(360deg)"
    })
}, function () {
    $(this).css({
        transform: "rotate(0deg)"
    })
})
$("#share").find("a").eq(1).stop().hover(function () {
    $("#share").find("img").animate({
        top: 30,
        opacity: 1
    })
}, function () {
    $('#share').find("img").stop().animate({
        top: -20,
        opacity: 0
    })
})
$("#blog").hover(function () {
    $(this).css({
        background: "#5259f3",
    });
    $(this).find("a").css({
        color: "#fff"
    })
}, function () {
    $(this).css({
        background: "",
    });
    $(this).find("a").css({
        color: '#fff'
    })
})

// 顶部部分js结束
$(".innerText>div").css({
    width: window.innerWidth
})
$(".innerText").css({
    width: window.innerWidth * 3
})
$(".innerImg>div").css({
    width: window.innerWidth
})
$(".innerImg").css({
    width: window.innerWidth * 2
})
// 图片和背景一起滚动
var bgarr = ["image/b1.jpg", "image/b2.jpg", "image/b3.jpg"],
    arr = ["image/bb1.png", "image/bb2.png", "image/bb3.png"],
    n = 0,
    m = 0,
    a = 0;

setInterval(function () {
    m++;
    if (m > 2) {
        m = 0
    };
    $(".bg").eq(m).css({
        opacity: 1
    });
    $(".bg").eq(m).siblings(".bg").css({
        opacity: 0
    });
    $("#img0").find("img").attr("src", arr[n])
    $(".innerImg").css({
        left: 0
    });
    $("#img1").find("img").attr("src", arr[n = n < arr.length - 1 ? ++n : 0]);
    $(".innerImg").animate({
        left: -window.innerWidth
    }, 1000);

}, 3000)

var x = 0;
setInterval(function () {
    if (x >= 3) {
        x = 0;
        $(".innerText").css({
            left: 0
        })
    };
    x++;
    $(".innerText").animate({
        left: -x * window.innerWidth
    });
}, 2000)

// 鼠标滚动的时候导航条消失显示
Scroll(document, function (o) {
    if (o) {
        $("#header").css({
            top: -68
        })
    } else {
        $("#header").css({
            top: 0
        })
    }
})

$(window).bind('scroll', function () {    //绑定滚动事件

    if ($(document).scrollTop() + $(window).height() >= $(document).height()) {
        console.log($(window).height());
        console.log($(document).scrollTop());
        console.log($(document).height());
        //......
    }
});

// 判断鼠标是向上滚动还是向下滚动
function Scroll(obj, callBack) {
    if (window.navigator.userAgent.toLowerCase().indexOf("chorme")) {
        obj.addEventListener("mousewheel", fn)
    }
    if (window.navigator.userAgent.toLowerCase().indexOf("firefox")) {
        obj.addEventListener("DOMMouseScroll", fn)
    }
    function fn(e) {
        var down = true;
        if (e.wheelDelta) {
            down = e.wheelDelta < 0 ? true : false;
        } else {
            down = e.detail > 0 ? true : false;
        }
        if (callBack && typeof callBack === "function") {
            callBack(down);
        }
    }
}

// // 鼠标滚动
// document.onmousewheel = scroll;
// if (document.addEventListener) {
//     document.addEventListener("DOMMouseScroll", scroll, false);
// }
// function scroll(ev) {
//     var ev = ev || event;
//     var b = true;
//     if (ev.wheelDelta) {
//         b = ev.wheelDelta > 0 ? true : false;
//     } else {
//         b = ev.detail < 0 ? true : false;
//     }
//     if (b) {
//         $("#header").css({
//             top: -68
//         })
//     } else {
//         $("#header").css({
//             top: 0
//         })
//     }
// }

var arrAnimation = ["a", "b", "c", "d", "e"],
    arrScale = ["scale .4s cubic-bezier(0, 0, 0.71, 1.17) 0s both", "scale .4s cubic-bezier(0, 0, 0.71, 1.17) .2s both", "scale .4s cubic-bezier(0, 0, 0.71, 1.17) .4s both", "scale .4s cubic-bezier(0, 0, 0.71, 1.17) .6s both", "scale .4s cubic-bezier(0, 0, 0.71, 1.17) .8s both", "scale .4s cubic-bezier(0, 0, 0.71, 1.17) 1s both", "scale .4s cubic-bezier(0, 0, 0.71, 1.17) 1.2s both", "scale .4s cubic-bezier(0, 0, 0.71, 1.17) 1.4s both", "scale .4s cubic-bezier(0, 0, 0.71, 1.17) 1.6s both", "scale .4s cubic-bezier(0, 0, 0.71, 1.17) 1.8s both"],


    arrLeft = ["left .4s cubic-bezier(0, 0, 0.71, 1.17) 0s both", "left .4s cubic-bezier(0, 0, 0.71, 1.17) .2s both", "left .4s cubic-bezier(0, 0, 0.71, 1.17) .4s both", "left .4s cubic-bezier(0, 0, 0.71, 1.17) .6s both", "left .4s cubic-bezier(0, 0, 0.71, 1.17) .8s both", "left .4s cubic-bezier(0, 0, 0.71, 1.17) 1s both"];

document.onmousewheel = function (e) {
    // 给合作伙伴添加动画效果，css已经写好了参数
    if ($("#cooperate").length) {
        if ($("#cooperate")[0].getBoundingClientRect().top < window.innerHeight) {
            $("#cooperate").find("li").each(function (i, e) {
                $(e).addClass(arrAnimation[i])
            })
        }
        if ($("#footer")[0].getBoundingClientRect().top < window.innerHeight) {
            $(".container>div").each(function (i, e) {
                $(e).addClass(arrAnimation[i])
            })
        }
    }

    // about us js 
    if ($(".container1").length > 0) {
        if ($(".container1")[0].getBoundingClientRect().top < window.innerHeight - 200) {
            $(".childx").css({
                animation: "scale .4s cubic-bezier(0, 0, 0.71, 1.17) .4s both "
            })
        }

        if ($("#service")[0].getBoundingClientRect().top < window.innerHeight) {
            $("#service").find(".title1").css({
                animation: "topOpacity 2s"
            })
            $("#service").find(".title2").css({
                animation: "topOpacity 2s"
            })
        }
        // 能力的动画
        if ($("#ability-contents").length > 0) {
            if ($("#ability-contents")[0].getBoundingClientRect().top < window.innerHeight - 200) {
                $(".ability-contents1").find("img").each(function (i, e) {
                    $(e).css({
                        animation: arrScale[i]
                    })
                })
                $(".ability-contents1").find(".child-content-title").each(function (i, e) {
                    $(e).css({
                        animation: arrLeft[i]
                    })
                })
                $(".ability-contents1").find(".child-content-info").each(function (i, e) {
                    $(e).css({
                        animation: arrLeft[i]
                    })
                })
            }
        }

    }
}
// 鼠标移动的时候内容出现
$(".childx").eq(0).hover(function () {
    $(".childx").eq(0).find(".msg1").css({
        transform: "translateX(40%)",
        opacity: 1
    })
}, function () {
    $(".childx").eq(0).find(".msg1").css({
        transform: "translateX(100%)",
        opacity: 0
    })
})
$(".childx").eq(1).hover(function () {
    $(".childx").eq(1).find(".msg1").css({
        top: -100,
        opacity: 1
    })
}, function () {
    $(".childx").eq(1).find(".msg1").css({
        top: 0,
        opacity: 0
    })
})
$(".childx").eq(2).hover(function () {
    $(".childx").eq(2).find(".msg1").css({
        transform: "translateX(110%)",
        opacity: 1
    })
}, function () {
    $(".childx").eq(2).find(".msg1").css({
        transform: "translateX(100%)",
        opacity: 0
    })
})
$(".childx").eq(3).hover(function () {
    $(".childx").eq(3).find(".msg1").css({
        top: 200,
        opacity: 1
    })
}, function () {
    $(".childx").eq(3).find(".msg1").css({
        top: 0,
        opacity: 0
    })
})
$(".childx").eq(4).hover(function () {
    $(".childx").eq(4).find(".msg1").css({
        top: 200,
        opacity: 1
    })
}, function () {
    $(".childx").eq(4).find(".msg1").css({
        top: 0,
        opacity: 0
    })
})
$(".childx").eq(5).hover(function () {
    $(".childx").eq(5).find(".msg1").css({
        top: 200,
        right: 244,
        opacity: 1
    })
}, function () {
    $(".childx").eq(5).find(".msg1").css({
        top: 0,
        opacity: 0
    })
})
$(".childx").eq(6).hover(function () {
    $(".childx").eq(6).find(".msg1").css({
        top: 200,
        opacity: 1
    })
}, function () {
    $(".childx").eq(6).find(".msg1").css({
        top: 0,
        opacity: 0
    })
})
//能力部分的js动画
$(".ability-child").each(function (i, e) {
    $(e).hover(function () {
        $(e).find("img").css({
            left: 10
        });
        $(e).find(".child-content").css({
            left: 160
        })
    }, function () {
        $(e).find("img").css({
            left: 38
        });
        $(e).find(".child-content").css({
            left: 140
        })
    })
})



$(".ability-nav").find("div").eq(0).click(function () {

    $(this).addClass("active").siblings().removeClass("active");
    $(".ability-contents1").css({
        display: "block"
    });
    $(".ability-contents2").css({
        display: "none"
    })
    $(".ability-contents1").find("img").each(function (i, e) {
        $(e).css({
            animation: arrScale[i]
        })
    })
    $(".ability-contents1").find(".child-content-title").each(function (i, e) {
        $(e).css({
            animation: arrLeft[i]
        })
    })
    $(".ability-contents1").find(".child-content-info").each(function (i, e) {
        $(e).css({
            animation: arrLeft[i]
        })
    })
    $(".ability-contents2").find("img").each(function (i, e) {
        $(e).css({
            animation: ""
        })
    })
})
$(".ability-nav").find("div").eq(1).click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".ability-contents1").css({
        display: "none"
    });
    $(".ability-contents2").css({
        display: "block"
    })
    $(".ability-contents1").find("img").each(function (i, e) {
        $(e).css({
            animation: ""
        })
    })
    $(".ability-contents1").find(".child-content-title").each(function (i, e) {
        $(e).css({
            animation: ""
        })
    })
    $(".ability-contents1").find(".child-content-info").each(function (i, e) {
        $(e).css({
            animation: ""
        })
    })
    $(".ability-contents2").find("img").each(function (i, e) {
        $(e).css({
            animation: arrScale[i]
        })
    })
})

// contact js effect
