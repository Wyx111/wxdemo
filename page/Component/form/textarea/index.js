Page({
    data:{
        three:'自动聚焦请输入'
    },
    bindinput:function(e){
        var data = this.data;
        data.three =e.detail.value;
        this.setData(data)
    }
})