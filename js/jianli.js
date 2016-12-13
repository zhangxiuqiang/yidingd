window.onload=function () {

    function orient() {
        //alert('gete');
        if (window.orientation == 0 || window.orientation == 180) {
            $("body").attr("class", "portrait");
            orientation = 'portrait';
            return false;
        }
        else if (window.orientation == 90 || window.orientation == -90) {
            $("body").attr("class", "portrait");
            orientation = 'portrait';

            return false;
        }
    }


    $(function () {
        orient();
    });


    $(window).bind('orientationchange', function (e) {
        orient();
    });


    ~function (desW) {
        var winW = document.documentElement.clientWidth,
            oMain = document.getElementById("main"),
            n = winW / desW;
        if (winW > desW) {
            oMain.style.width = desW + "px";
            return;
        }
        document.documentElement.style.fontSize = n * 100 + "px";
    }(640);

//->Swiper
    var sw = new Swiper(".swiper-container", {
        loop: true,
        direction: "vertical",
        /*--当切换结束的时候我需要给当前展示的这个区域增加对应的ID(page1或者page2),从而实现里面子元素的运动--*/
        onSlideChangeEnd: function (swiper) {
            //->获取总共的SLIDE
            var slideAry = swiper.slides,
                trueNum = slideAry.length - 2,
                lastIn = trueNum + 1;

            //->获取当前活动块的索引
            var curIn = swiper.activeIndex;

            [].forEach.call(slideAry, function (item, index) {
                if (index == curIn) {
                    switch (curIn) {
                        case 0:
                            item.id = "page" + trueNum;
                            break;
                        case lastIn:
                            item.id = "page1";
                            break;
                        default:
                            item.id = "page" + curIn;
                    }
                    return;
                }
                item.id = null;
            });
        }
    });
}