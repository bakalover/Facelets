function draw(x_offset,y_offset,check){
    let ctx = document.getElementById("canvas").getContext("2d");
    if(check){
        ctx.fillStyle = "rgb(0,255,0)";
        ctx.fillRect (x_offset, y_offset, 5, 5);
    }
    else{
        ctx.fillStyle = "rgb(255,0,0)";
        ctx.fillRect (x_offset, y_offset, 5, 5);
    }
}
function check_shot(x,y,r){
    return (x<=0&&y>=0&&x**2+y**2<=r**2)||(x<=0&&y<=0&&y>=(-2)*x-r)||(x>=0&&y<=0&&x<=r&&y<=r);
}
$(function (){
    $('canvas').click(function (e) { //Dynamic dots setting
        var r = document.getElementById("inputVals:rInput").value;
        var x_offset = e.offsetX;
        var y_offset = e.offsetY;
        var x = ((x_offset - 315)*0.5)/35;
        var y = -((y_offset - 315)*0.5)/35;
        dots[(r-1)*2].push(new Dot(x_offset,y_offset,check_shot(x,y,r)));
        localStorage.setItem("DOTS",JSON.stringify(dots));
        if(check_shot(x,y,r)){
            draw(x_offset,y_offset,true);
        }
        else{
           draw(x_offset,y_offset,false);
        }
       /* $.ajax({
            method: "POST",
            url: "./controller",
            data: {x: x, y: y, r: r}
        }).done(function (){
            console.log("done");
        }).fail(function (){
            console.log("fail");
        });*/
        /*if(checkR==false){
            jQuery(".Message").html("Выберете радиус!");
            e.preventDefault();
        }*/
    });
});
class Dot{
    x_offset;
    y_offset;
    status;
    constructor(x_offset, y_offset, status){
        this.x_offset = x_offset;
        this.y_offset = y_offset;
        this.status = status;
    }
}