// LISTENER
$(function() {
    $('.Form').submit(function(e) {
        var optionsX = document.getElementsByName("x");
        var optionsR = document.getElementsByName("r");
        var Y = document.getElementById("y");
        var checkX = false;
        var checkR = false;
        var checkY = true;
        var countX = 0;
        for(var i = 0;i<optionsX.length;i++){
            if (optionsX[i].checked){
                checkX=true;
                ++countX;
            }
        }
        for(var i = 0;i<optionsR.length;i++){
            if (optionsR[i].checked){
                checkR=true;
            }
        }
        if(checkX==false||checkR==false){
            jQuery(".Message").html("Выберете все значения координат!");
        }
        var val = parseInt(Y.value);
        if(isNaN(val)){
            jQuery(".Message").html("Недопустимое значение Y!");
            checkY = false;
        }
        if (val <= -5 || val >= 3) {
            jQuery(".Message").html("Число вышло за пределы диапазона.\nПовторите ввод\n Y ∈ (-5;3)");
            checkY = false;
        }
        if(countX>1){
            jQuery(".Message").html("Выбрано более одного значения X");
            checkX = false;
        }
        if(checkY==false||checkR==false||checkX==false){
            e.preventDefault();
        }
    });
});
