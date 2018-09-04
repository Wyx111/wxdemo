var type= [
    'view', 'content', 'form', 'interact', 'nav', 'media', 'map', 'canvas'
]
Page({
    data: {},
    widgetsToggle: function(e) {
        var id = e.currentTarget.id,
            data = {};
        // 为data对象中每一个元素添加false
        for (var i = 0, len = type.length; i < len; ++i) {
            data[type[i] + 'Show'] = false;
        }
        data[id + 'Show'] = !this.data[id + 'Show'];
        this.setData(data);
    }
});