// $('button').click(function() {
// 	console.log(1)
// });



// 选择器      事件      方法
// 选择器   写法 $('xxx')     css选择器   jquery自带    :first  :eq   :input  :checkbox
// 事件 click  mouseenter  mouseleave  mousemove  keypress  keydown  keyup  focus  blur dblclick  scroll  change   ready
 // 事件绑定的其他方法     之前的方法   xxx.click(function(){})  
 // 其他方法   on 绑定事件
// xx.trigger('click')
 // $('input').focus(function() {
 // 		$(this).attr('placeholder','')
 // });
 //  $('input').blur(function() {
 // 		$(this).attr('placeholder','xxx')
 // });
 //  on 绑定事件可以同时绑定多个事件
 // 	off 解除事件绑定,所有事件都能解除不是非得 on 绑定的事件才能解除
 // $('input').on('focus',function(){
 // 	$(this).attr('placeholder','')
 // })
 //  $('input').on('blur',function(){
 //  	$(this).attr('placeholder','xxx')
 // 		$(this).off('focus')
 // })

// ready 事件是默认触发的  ready 是绑定给 document(文档) 的
// 我们写的有些 js 代码，是需要页面所有 dom 元素加载完毕之后才能执行的，比如说事件绑定前提是 该元素在页面中渲染完毕,所以这些 js 代码需要写在 ready 事件内部 以下是写法

// $(document).ready(function(){
// 	// dom 加载完毕  添加我们要写的 js 代码
// })
// 上述写法有个简写  

// $(fucntion($){

// })


// event 事件对象   
// 获取鼠标相对于文档坐标  event.pageX  event.pageY
// 获取键盘码   event.which      13
// 阻止默认行为的触发  event.preventDefault()   阻止a的默认跳转   submit按钮的默认提交
// 获取事件类型  event.type
// *********事件冒泡 以及 事件委托



// 方法      
// 修改样式类    .css()    addClass()    removeClass()   .toggleClass()   .width()   .height()   .innerWidth()包括padding   .outerWidth()包括boder    .scrollTop()设置滚动体距离顶部的距离         .offset().top   offset().left  获取某个元素距离文档的偏移

// 效果类  .fadeIn()  .fadeOut()  .fadeToggle()  .fadeTo()  slideDown() .slideUp() .slideToggle() .show() .hide()  .toggle()   .animate({},1000)  .stop()   .delay()   注意动画回调

// 筛选类  .parent()   .find()   .children()   .parents()   .siblings()   .next()  .prev()   .eq()  .first()  .last()    ||||  .fliter()    .has() 

// dom 类  .append()   .prepend()   .after()    .before()    .remove()     .empty() 清空一个标签

// 属性   attr()    removeAttr()    text()   val()   html()    prop() 

// 特殊工具类   index() 


// AJAX

