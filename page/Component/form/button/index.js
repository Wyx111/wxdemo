Page({
    data:{
        disabled:false,
        loading:false,
        plain:false,

    },
    changeState:function(e){
        var id = e.currentTarget.id;
        var data = this.data;
        data[id]=!data[id];
        this.setData(data)
    }
})