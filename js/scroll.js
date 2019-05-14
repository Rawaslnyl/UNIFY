$(window).scroll(function(){

                var topHeight = $(window).scrollTop()

                if(topHeight > 80){
                    $('.back').stop().fadeIn(500)
                }else{
                     $('.back').delay(20).stop().fadeOut(500)
                }
            })


            $('.back').click(function(){
                //让滚动条以动画形式返回顶部
                //修改css 修改html或body的scrolltop 样式
                $('html,body').animate({'scrollTop':0},1000)
            })