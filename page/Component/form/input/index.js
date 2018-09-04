Page({
    data:{
        val:'输入的内容会在这里展示'
    },
    bindtap:function(){
        this.setData({
            focus:true
        })
    },
    bindinput:function(e){
        var data = this.data;
        data.val = e.detail.value;
        this.setData(data)
    }
})