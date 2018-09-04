Page({
    data: {
        ary: [{
            latitude: 23.099994,
            longitude: 113.324520,
        }]
    },
    onReady:function(){
        this.mapCtx = wx.createMapContext('map')
    },
    // 查看当前位置经纬度
    getNowWhere:function(){
        this.mapCtx.getCenterLocation({
            success:function(res){
               console.log('当前latitude:'+res.latitude,'当前longitude:'+res.longitude)
            }
        })
    },
    // 移动到当前位置
    goNowWhere:function(){
        this.mapCtx.moveToLocation()
    },
    // 缩放当前经纬度
    includePoints: function () {
        this.mapCtx.includePoints({
            points: [{
                latitude: 23.10229,
                longitude: 113.3345211,
            }, {
                latitude: 23.00229,
                longitude: 113.3345211,
            }]
        })
    }
})