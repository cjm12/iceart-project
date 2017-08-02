
// 先找到nav下面所有的li元素，除了第六个外，eq的索引是从第0个开始的，鼠标经过的时候发生一件事，找到第六个li元素，停止它的动画效果，确定他的left的值和width值，

$('#nav').find('li').eq(3).siblings().hover(function () {
    $('#nav').find('li').eq(3).stop().animate({
        left: this.offsetLeft,
        width: this.offsetWidth
    })
}, function () {
    $('#nav').find('li').eq(3).stop().animate({
        left: $('#nav').find('li')[0].offsetLeft,
        width: $('#nav').find('li')[0].offsetWidth
    })
})

$('#share').find('a').hover(function () {
    $(this).css({
        transform: 'rotate(360deg)'
    })
}, function () {
    $(this).css({
        transform: 'rotate(0deg)'
    })
})

$('#share').find('a').eq(1).hover(function () {
    $('#share').find('img').animate({
        top: 30,
        opacity: 1
    })
}, function () {
    $('#share').find('img').animate({
        top: -20,
        opacity: 0
    })
})

$('#blog').hover(function () {
    $(this).css({
        background: '#fff',
    });
    $(this).find('a').css({
        color: '#000'
    })
}, function () {
    $(this).css({
        background: ''
    });
    $(this).find('a').css({
        color: '#fff'
    })
})
// 顶部部分js结束

// 开始的时候第一屏logo移动的函数
move();
function move() {
    $("#content").find("img").eq(1).animate({
        top: 0
    }, 500, function () {
        $("#content").find("img").eq(0).animate({
            opacity: 1
        })
    })
}
// 第二屏js effect
var arrFall = ["fall 1s", 'fall 1.2s', 'fall 1.4s', 'fall 1.6s']
$('#wrap').fullpage({
    navigation: true,
    verticalCentered: false,
    navigationColor: '#fff',

    onLeave: function (index, nextIndex, direction) {
        if (nextIndex == 1) {
            $("#content").find("img").eq(1).animate({
                top: 0
            }, 1000, function () {
                $("#content").find("img").eq(0).animate({
                    opacity: 1
                })
            });
            $("#content1").find(".child").each(function (e, i) {
                $(i).css({
                    animation: ""
                })
            });
            for (var j = 0; j < $("#content1").find(".child").length; j++) {
                $("#content1").find(".msg").eq(j).removeClass("show");
                $("#content1").find(".btn").eq(j).removeClass("color");
            };
            $(".About").css({
                animation: ""
            })
        };
        if (nextIndex == 2) {
            $("#content").find("img").eq(1).css({ top: -500 });
            $("#content").find("img").eq(0).css({ opacity: 0 });

            $("#content1").find(".child").each(function (i, e) {
                $(e).css({
                    animation: arrFall[i]
                })
            });
            $(".About").css({
                animation: ""
            })
        }
        if (nextIndex == 3) {
            $(".About").css({
                animation: "fall 2s"
            });
            $("#content1").find(".child").each(function (i, e) {
                $(e).css({
                    animation: ""
                })
            })
            $("#content").find("img").eq(1).css({ top: -500 });
            $("#content").find("img").eq(0).css({ opacity: 0 });
            for (var j = 0; j < $("#content1").find(".child").length; j++) {
                $("#content1").find(".msg").eq(j).removeClass("show");
                $("#content1").find(".btn").eq(j).removeClass("color");
            }
        }
    }
})



// 第二屏动画的的效果
$("#content1").find(".child").each(function (i, e) {
    $(e).mouseover(function () {
        for (var j = 0; j < $("#content1").find(".child").length; j++) {
            $("#content1").find(".msg").eq(j).removeClass("show");
            $("#content1").find(".btn").eq(j).removeClass("color");
            $("#bg").find("div").eq(j).removeClass("show1");
        }
        $("#content1").find(".msg").eq(i).addClass("show");
        $("#content1").find(".btn").eq(i).addClass("color");
        $("#bg").find("div").eq(i).addClass("show1");
    })
})

/// 封装一个函数，使背景图片可以随着鼠标左右晃动
ScrollBg();
function ScrollBg() {
    var mountain = document.getElementById("mountain"),
        mountain2 = document.getElementById('mountain2'),
        mountain3 = document.getElementById('mountain3'),
        x = document.body.offsetWidth / 2;

    document.onmousemove = function (ev) {
        var disX = ev.clientX;
        mountain.style.marginLeft = (x - disX) / 90 * mountain.style.zIndex + 'px';
        mountain2.style.marginLeft = (x - disX) / 90 * mountain2.style.zIndex + 'px';
        mountain3.style.marginLeft = -(x - disX) / 90 * mountain3.style.zIndex - 650 + 'px';
    }
}


// 第三屏动画

var arr = [

    {
        transform: "rotate(0deg)",
        opacity: 1
    },
    {
        transform: "rotate(-50deg)",
        opacity: 0
    },
    {
        transform: "rotate(-180deg)",
        opacity: 0
    },
    {
        transform: "rotate(50deg)",
        opacity: 0
    }
];
setInterval(function () {
    arr.push(arr.shift());   // 把第一个放在最后一个
    setStyle1();
    setStyle2();
    setStyle3();
    setStyle4()
}, 4000);

function setStyle1() {
    $("#child1").css(
        {
            transform: arr[0].transform,
            opacity: arr[0].opacity
        }
    );
    $("#info1").css(
        {
            transform: arr[0].transform,
            opacity: arr[0].opacity
        }
    )
}
function setStyle2() {
    $("#child2").css(
        {
            transform: arr[1].transform,
            opacity: arr[1].opacity
        }
    );
    $("#info2").css(
        {
            transform: arr[1].transform,
            opacity: arr[1].opacity
        }
    )
}
function setStyle3() {
    $("#child3").css(
        {
            transform: arr[2].transform,
            opacity: arr[2].opacity
        }
    );
    $("#info3").css(
        {
            transform: arr[2].transform,
            opacity: arr[2].opacity
        }
    )
}
function setStyle4() {
    $("#child4").css(
        {
            transform: arr[3].transform,
            opacity: arr[3].opacity
        }
    );
    $("#info4").css(
        {
            transform: arr[3].transform,
            opacity: arr[3].opacity
        }
    )
}

function myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}

var mb = myBrowser();
if ("FF" == mb) {
    $("#box1").css({
        background: "rgb(70, 90, 255)"
    })

}
if ("Chrome" == mb) {
    $("#box1").css({
        background: "-webkit-gradient(linear, 0% 100%, 100% 0%, from(rgb(133, 85, 255)), to(rgb(64, 94, 245)))"
    })
}
