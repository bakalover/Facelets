$(function(){
    $("#inputVals\\:submButt").on("click",function check(e) {
        let a = $("#inputVals\\:yInput").val();
        if(a[1]==','){
            a[1] = '.';
        }
        let b = a.replace(',','.');
        $("#inputVals\\:yInput").val(b);
        let options = $("#inputVals\\:n4X,#inputVals\\:n3X,#inputVals\\:n2X,#inputVals\\:n1X,#inputVals\\:p0X,#inputVals\\:p1X,#inputVals\\:p2X,#inputVals\\:p3X,#inputVals\\:p4X");
        console.log(options);
        let checkX = false;
        for(var i = 0;i<options.length;i++){
            if (options[i].checked){
                checkX=true;
            }
        }
        if(checkX==false){
            e.preventDefault();
            $("#messageForX").html("<span style = \"color: blue\">Choose X</span>");
        }
        else{
            $("#messageForX").html("");
            let r = document.getElementById("inputVals:rInput").value;
            let y = document.getElementById("inputVals:yInput").value;
            for(var i = 0;i<options.length;i++){
                if (options[i].checked){
                    console.log(i-4);
                    let x_offset = (i-4)*35/0.5+315;
                    let y_offset = (-y)*35/0.5+320;
                    draw(x_offset,y_offset,check_shot((i-4),y,r));
                    dots[(r-1)*2].push(new Dot(x_offset,y_offset,check_shot((i-4),y,r)));
                }
            }
            sessionStorage.setItem("DOTS",JSON.stringify(dots));
        }
    });
});
