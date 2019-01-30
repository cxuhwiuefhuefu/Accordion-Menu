/* 
    实现效果
        点击     缓慢下拉展开  箭头旋转向上
        再从点击 缓慢上拉收回  箭头旋转向下

    可选择的参数
        菜单是否展开    
        添加的class类名

*/


var obj = {// 可选的参数
    mutiple: true,  // 是否展开多级菜单
    addClass: "active" // 添加的类名
}
new menuPlugin(obj);


/* 
    
    插件的特点
        1. 复用性
        2. 易用性
        3. 高效性 考虑执行的效率还有内存优化
    
    模块化开发 把业务需求分模块化 每个模块负责一个功能的实现    
    
    插件的几种形式
        1. 面向对象思想类的方式 方法写在原型上
        2. 闭包方式
    
*/

/* 
    jQuery滑动方法可使元素上下滑动    
        $(selector).slideDown(speed, callback)
            speed: 规定效果的时长  slow/fast/毫秒
            callback: 是滑动完成之后所执行的函数名称

        $(selector).slideDown(speed, callback)  
            speed: 规定效果的时长 show/fast/毫秒
            callback: 是滑动完成之后所执行的函数名称

        jQuery slideToggle()方法可以在slideDown和slideUp方法之间进行切换
            如果元素向下滑动 则slideToggle()可向上滑动它们
            如果元素向上滑动 则slideToggle()可向下滑动它们  
            speed: 规定效果的时长 show/fast/毫秒
            callback: 是滑动完成之后所执行的函数名称



    jQuery addClass()方法
        向不同的元素添加class属性 当然 在添加类时 你也可以选取多个元素

    jQuery removeClass()方法
        在不同的元素中删除指定的class属性

    jQuery toggleClass()方法
        该方法对被选元素进行添加/删除类的切换操作

    
        
    $(selector).on(event, childSelector, data, function)
        event: 必须 规定要从被选元素移除的一个或多个事件或命名空间 由空格分隔多个事件值
               也可以是数组  必须是有效的事件
        childSelector: 规定只能添加到指定的子元素上的事件处理程序(且不是选择器本身 比如已废弃的delegate()方法)
        data: 规定传递到函数的额外数据
        function: 规定当事件发生时运行的函数

*/
