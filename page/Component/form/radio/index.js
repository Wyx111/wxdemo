Page({
    data: {
        love:'中国',
        colors: [{
            name: '中国',
            color: 'red'
        }, {
            name: '俄国',
            color: 'orange'
        }, {
            name: '德国',
            color: 'yellow'
        }, {
            name: '美国',
            color: 'green'
        }, {
            name: '法国',
            color: 'skyblue'
        }, {
            name: '英国',
            color: 'blue'
        }, {
            name: '日本',
            color: 'pink'
        }]
    },
    radioChange:function(e){
        var data = this.data;
        data.love = e.detail.value;
        this.setData(data) 
    }
})