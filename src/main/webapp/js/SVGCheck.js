$(function (){
    $('.image').click(function (e) {
        var r;
        var x = e.offsetX;
        var y = e.offsetY;
        var optionsR = document.getElementsByName("r");
        var checkR = false;
        for(var i = 0;i<optionsR.length;i++){
            if (optionsR[i].checked){
                jQuery(".Message").html("");
                checkR=true;
                r = optionsR[i].value;
                //Dynamic dots setting
                var shotRect= document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                if(optionsR[i].value=="1.0") {
                    var attr = {x: x, y: y, width: "5", height: "5", fill: 'red'};
                }
                if(optionsR[i].value=="1.5") {
                    var attr = {x: x, y: y, width: "5", height: "5", fill: 'black'};
                }
                if(optionsR[i].value=="2.0") {
                    var attr = {x: x, y: y, width: "5", height: "5", fill: 'green'};
                }
                if(optionsR[i].value=="2.5") {
                    var attr = {x: x, y: y, width: "5", height: "5", fill: 'yellow'};
                }
                if(optionsR[i].value=="3.0") {
                    var attr = {x: x, y: y, width: "5", height: "5", fill: 'blue'};
                }
                for (var k in attr){
                    shotRect.setAttribute(k, attr[k]);
                }
                document.getElementById('svgImage').appendChild(shotRect);
                console.log(shotRect);
                //$(this).append("<rect x=\""+x+"\" y=\""+y+"\" width=\"5\" height=\"5\" fill=\"red\"/>");
                x = ((x - 205)*r)/(205-30);
                y = -((y - 205)*r)/(205-30);
                $.ajax({
                    method: "POST",
                    url: "./controller",
                    data: {x: x, y: y, r: r}
                }).done(function (){
                    console.log("done");
                }).fail(function (){
                    console.log("fail");
                });
            }
        }
        if(checkR==false){
            jQuery(".Message").html("Выберете радиус!");
            e.preventDefault();
        }
    });
});