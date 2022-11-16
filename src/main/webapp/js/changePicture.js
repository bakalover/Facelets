function changePicture(){
    let r = document.getElementById("inputVals:rInput").value;
    let ctx = document.getElementById("canvas").getContext("2d");
    let image = new Image();
    switch (r){
        case "1":
            image.src = "images/R1.svg";
            break
        case "1.5":
            image.src = "images/R2.svg";
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
        case "3.5":
            image.src = "images/R6.svg";
            break
        case "4":
            image.src = "images/R7.svg";
            break
    }
    image.onload = function (){ctx.drawImage(image,0,0);} // Canvas ждёт пока svg загрузиться, а потом рисует
}