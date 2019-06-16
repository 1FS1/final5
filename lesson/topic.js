var topic = [
    "太刀超帥超猛",
    "穿紅色衣服",
    "木魔杖的圖好難畫",
];
var top = ["劍士", "射手", "法師"];

var startDate = new Date();

function setMonthAndDay(startMonth,startDay){
    startDate.setMonth(startMonth - 1, startDay);
    startDate.getHours(0);
    startDate.getMinutes(0);
    startDate.getSeconds(0);
}

setMonthAndDay(2, 23);