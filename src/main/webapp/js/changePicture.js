
function changePicture(){
    var r = document.getElementById("inputVals:rInput").value;
    var ctx = document.getElementById("canvas").getContext("2d");
    /*ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect (30, 30, 55, 50);*/
    var image = new Image();
    image.src = "images/R1.svg";
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
    ctx.drawImage(image,0,0);
}