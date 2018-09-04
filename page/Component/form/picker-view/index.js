var date = new Date(),
    years = [],
    months = [],
    days = [];
for (var i = 1980; i <= date.getFullYear(); i++) {
    years.push(i)
}
for (var i = 0; i <= 12; i++) {
    months.push(i)
}
for (var i = 0; i <= 31; i++) {
    days.push(i)
};
Page({
    data: {
        year: '2018',
        month: '8',
        day: '8',
        years,
        months,
        days,
        value: [9999, 8, 8],
    },
    bindchange: function(e) {
        var data = this.data;
        data.value = e.detail.value;
       var detail = e.detail.value;
        data.year ='20'+detail[0]-20;
        data.month = detail[1];
        data.day = detail[2];
        this.setData(data)
    }
})