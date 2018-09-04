var str = 'this is first line\nthis is second line'
Page({
    data: {
        text: str,
        texts: ['other line', 'other line']
    },
    add: function () {
        var str1 = 'other line',
            datas = this.data;
        datas.texts.push(str1)
        this.setData(datas)
    },
    remove: function () {
        var datas = this.data;
        datas.texts.pop();
        this.setData(datas)
    }
})