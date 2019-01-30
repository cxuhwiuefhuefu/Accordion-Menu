menuPlugin.prototype.shrinkToggle = function(obj) {  

    var item = obj.data;
   
    if(!item.mutiple && $(this).parent()[0] !== $('li.active')[0]) { // 不展开多级菜单 || 不点击之前的.active

        // 先把有active类名的元素删除箭头旋转 收起 然后展开点击的菜单        
        $('.'+ item.addClass +' .secondaryMenu').slideUp(500);
        $('.' + item.addClass).removeClass(item.addClass);

    } 

    $(this).next().slideToggle(500); // 上下拉
    $(this).parent().toggleClass(item.addClass); // 箭头旋转
    
}

function menuPlugin(obj) {

    // 绑定点击事件
    $('.title').on('click', obj, menuPlugin.prototype.shrinkToggle); // 绑定点击事件
}
