var ages =[];
for(var i=0;i<=120;i++){
    ages.push(i)
}
Page({
    data:{
        ages,
        age:18,
        homewhere:'北京市，海淀区，清华大学',
        checked:"未婚"
    },
    agebindchange(e){
        var data = this.data;
        data.age = e.detail.value;
        this.setData(data)
    },
    homebindchange(e){
        var data = this.data;
        data.homewhere = e.detail.value;
        this.setData(data)
    },
    sexbindchange(e){
        var data = this.data;
        data.checked=e.detail.value===true?'已婚':'未婚';
        this.setData(data)
    }
})