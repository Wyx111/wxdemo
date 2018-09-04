var ary =[];
Page({
    data: {
        jackChou: [{
            name: '七里香',
            checked: false
        }, {
            name: '千里之外',
            checked: false
        }, {
            name: '菊花台',
            checked: false
        }, {
            name: '叶惠美',
            checked: false
        }, {
            name: '算什么男人',
            checked: false
        }, {
            name: '告白气球',
            checked: false
        }, {
            name: '龙卷风',
            checked: false
        }, {
            name: '青花瓷',
            checked: false
        }, {
            name: '等你下课',
            checked: false
        }],
        state: false,
        data: {}
    },
    bindchange: function(e) {
        ary = e.detail.value
    },
    changeState: function() {
        var data = this.data;
        for (var i = 0; i < data.jackChou.length; i++) {
            data.jackChou[i].checked = !data.jackChou[i].checked
        };
        this.setData(data)
    },
    noSelect: function() {
    //    var data = this.data;
    //    for(var i=0;i<data.jackChou.length;i++){
    //        for(var t=0;t<ary.length;t++){
    //            if(data.jackChou[i].name!==ary[t]){
    //                data.jackChou[i].checked = !data.jackChou[i].checked
    //            }
    //        }
    //    };
    //    ary =[];
    //    for(var i =0;i<data.jackChou.length;i++){
    //        if(data.jackChou[i].checked===true){
    //            ary.push(data.jackChou[i].name)
    //        }
    //    }
    //     this.setData(data);
    }
})