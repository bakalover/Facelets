let dots;
function restoreDots(r){
    if(Array.isArray(dots)) {
        for (let i = 0; i < dots[(r - 1) * 2].length; i++) {
            draw(dots[(r - 1) * 2][i].x_offset, dots[(r - 1) * 2][i].y_offset, dots[(r - 1) * 2][i].status);
        }
    }
}
function changePicture(){
    let r = document.getElementById("inputVals:rInput").value;
    let ctx = document.getElementById("canvas").getContext("2d");
    let image = new Image();
    image.onload = function (){
        ctx.drawImage(image,0,0); // Canvas ждёт пока svg загрузиться, а потом рисует
        restoreDots(r);
    }
    dots = JSON.parse(sessionStorage.getItem("DOTS"));
    if(dots===null){
        dots = [[],[],[],[],[],[],[]];
    }
    switch (r){
        case "1":
            image.src = "images/R1.svg";
            break
        case "1.0":
            image.src = "images/R1.svg";
            break
        case "1.5":
            image.src = "images/R2.svg";
            break
        case "2.0":
            image.src = "images/R3.svg";
            break
        case "2":
            image.src = "images/R3.svg";
            break
        case "2.5":
            image.src = "images/R4.svg";
            break
        case "3":
            image.src = "images/R5.svg";
            break
        case "3.0":
            image.src = "images/R5.svg";
            break
        case "3.5":
            image.src = "images/R6.svg";
            break
        case "4":
            image.src = "images/R7.svg";
            break
        case "4.0":
            image.src = "images/R7.svg";
            break
    }
}
$(document).ready(function(){changePicture();}); // Загрузка при открытии страницы