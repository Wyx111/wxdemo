var type = [
    'network', 'media', 'files', 'cache', 'location', 'phone', 'interface', 'third', 'openapi', 'data', 'update', 'multith', 'monitoring', 'debugapi', 'log'
]
Page({
    widgetsToggle: function(e) {
        var id = e.currentTarget.id,
            data = {};
        for (var i = 0; i < type.length; i++) {
            data[type[i] + 'Show'] = false;
        }
        data[id + 'Show'] = !data[id + 'Show'];
        this.setData(data)
    }
})