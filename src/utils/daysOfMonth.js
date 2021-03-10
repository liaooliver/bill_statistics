function getDaysOfMonth(year,month){
    var date=new Date(year,month,0);
    var days=date.getDate();
    return days;
}

module.exports = {
    getDaysOfMonth
};