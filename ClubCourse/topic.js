var topic =[
    "聖誕前夕",
    "不知道",
    "隨便",
    "不想知道",
    "怕",
    "老師讓我過好嗎",
];

var startDate = new Date();

function setMonthAndDay(startMonth, startday)
{
    startDate.setMonth(startMonth-1);
    startDate.setDate(startday);
    startDate.setHours(0);
    startDate.setMinutes(0)
    startDate.setSeconds(0)
}

setMonthAndDay(12,21);
