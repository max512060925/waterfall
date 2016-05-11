$(document).ready(function() {
    $(window).on("load", function() {
        
        $(window).scroll(function() {
            var scrollHeight = $(window).scrollTop();
            var boxWrapper=$(".box-wrapper")
            if (scrollHeight> 100) {
                $(".box-wrapper").css({ "position": "fixed", "top": "0" })
            } else {
                $(".box-wrapper").css({ "position": "relative" , "top": "0"})
            }
        })
        imgLocation();
        var dataImg = { "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }, { "src": "5.jpg" }, { "src": "6.jpg" }, { "src": "7.jpg" }, { "src": "8.jpg" }, { "src": "9.jpg" }, { "src": "10.jpg" }] };
        window.onscroll = function() {
            if (scrollside()) {
                $.each(dataImg.data, function(index, value) {
                    var li = $("<li>").appendTo($(".picturebox ul"));
                    $("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(li);
                });
                imgLocation();
            };
        };
    })
})

function scrollside() {
    var box = $(".picturebox ul li"); //获取相片
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var docHeight = $(document).width();
    var scrollHeight = $(window).scrollTop();
    return (lastboxHeight < scrollHeight + docHeight) ? true : false;
}

function imgLocation() {
    var box = $(".picturebox ul li"); //获取相片
    var boxWidth = box.eq(0).width(); //获取相片宽度
    var num = Math.floor($(".picturebox").width() / boxWidth); //计算宽度能放多少相片
    var boxArr = [];
    box.each(function(index, value) {
            var boxHeight = box.eq(index).height(); //获取相片高度

            if (index < num) {
                boxArr[index] = boxHeight;
                box.eq(index).css({
                    "top": 0,
                    "left": index * boxWidth,
                });
            } else {
                var minboxHeight = Math.min.apply(null, boxArr); //获取最小高度
                var minboxIndex = $.inArray(minboxHeight, boxArr); //获取最小高度相片
                boxArr[minboxIndex] += boxHeight;
                box.eq(index).css({
                    "top": minboxHeight,
                    "left": boxWidth * minboxIndex,
                });

            }
        })
        // box.each(function(index, value) {
        //     var boxHeight = box.eq(index).height();
        //     if (index < num) {
        //         boxArr[index] = boxHeight;
        //     } else {
        //         var minboxHeight = Math.min.apply(null,boxArr);
        //         var minboxIndex = $.inArray(minboxHeight, boxArr);
        //         $(value).css({
        //             "position": "absolute",
        //             "top": minboxHeight,
        //             "left": box.eq(minboxIndex).position().left
        //         });
        //         boxArr[minboxIndex] += box.eq(index).height();
        //     }
        // });




}
