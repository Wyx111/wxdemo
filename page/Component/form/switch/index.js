var nums =1;
Page({
    data: {
        sex: '男',
        type: 'switch'
    },
    changeSex: function(e) {
        var data = this.data,
            sexbool = e.detail.value;
        data.sex = sexbool === true ? '男' : '女';
        this.setData(data);
    },
    bindtap:function(e){
        var data = this.data;
        data.type =nums%2!==1? 'switch':'checkbox';
        nums+=1;
        this.setData(data);
    }
})