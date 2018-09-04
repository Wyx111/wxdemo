Page({
    data: {
        country: [
            '中国',

            '美国',

            '日本',

            '法国',
        ],
        index: 0,
        twodarray: [
            ['无脊柱动物', '脊柱动物'],
            ['扁形动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
            ['猪肉条虫', '吸血虫']
        ],
        twodarrayIndex: [0, 0, 0],
        start: '12:12',
        end: '24:00',
        nowTime:'00：00',
        nowDate:'2018-09-03',
        region:'河南省，郑州市，高新开荒区'
    },
    onebindchange: function(e) {
        var val = e.detail.value;
        var data = this.data;
        data.index = val;
        this.setData(data)
    },
    twobindchange:function(e){
        var data = this.data;
        data.twodarrayIndex = e.detail.value;
        this.setData(data)
    },
    bindcolumnchange: function(e) {
        console.log(e)
        var data = this.data;
        data.twodarrayIndex= e.detail.value;
        this.setData(data)
    },
    timebindchange:function(e){
        var data = this.data;
        data.nowTime = e.detail.value;
        this.setData(data);
    },
    datebindchange:function(e){
        var data = this.data;
        data.nowDate = e.detail.value;
        this.setData(data)
    },
    regionbindchange:function(e){
        var data = this.data;
        data.region = e.detail.value;
        this.setData(data)
    }
})