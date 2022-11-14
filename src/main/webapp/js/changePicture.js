
function changePicture(){
    var r = document.getElementById("inputVals:rInput").value;
    switch (r){
        case "1":
            jQuery("#svgImage").attr("src","images/R1.svg");
            break
        case "1.5":
            jQuery("#svgImage").attr("src","images/R2.svg");
            break
        case "2":
            jQuery("#svgImage").attr("src","images/R3.svg");
            break
        case "2.5":
            jQuery("#svgImage").attr("src","images/R4.svg");
            break
        case "3":
            jQuery("#svgImage").attr("src","images/R5.svg");
            break
        case "3.5":
            jQuery("#svgImage").attr("src","images/R6.svg");
            break
        case "4":
            jQuery("#svgImage").attr("src","images/R7.svg");
            break
    }
}