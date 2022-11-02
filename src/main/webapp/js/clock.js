function clock()
{
    var date = new Date();

    var time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    var days = date.getDay();
    var daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

    if(time[0] < 10){
        time[0] = "0"+ time[0];
    }
    if(time[1] < 10){
        time[1] = "0"+ time[1];
    }
    if(time[2] < 10){
        time[2] = "0"+ time[2];
    }

    var curr_time = [time[0], time[1], time[2]].join(':');
    var clock = document.getElementById("clock");
    var day = document.getElementById("dayOfWeek");

    clock.innerHTML = curr_time;
    day.innerHTML = daysOfWeek[days];

    setTimeout("clock()", 1000);
}