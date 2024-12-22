function showresult(){
    var input = document.getElementById("screen");
    var c =input.value.replace(/x/g , "*");
    if(c.indexOf("(")!==-1){
        while (c.indexOf("(")!==-1) {
            var stidx = c.indexOf("(");
            var endidx = c.indexOf(")","(");
            p1=c.slice(stidx+ 1 , endidx);
            try {
                var result = eval(p1);
            } catch (error) {
                input.value="error";
                return;
            }
            c=c.slice(0,stidx)+result+c.slice(endidx+1);
        }
    }
    try {
        var result = eval(c);
        input.value = result;
    } catch (error) {
        input.value="error";
    }
}
function del(){
    var input = document.getElementById("screen");
    c=input.value;
    l=c.length;
    input.value=c.slice(0,l-1);
}
function click(buttonID){
    var button= document.getElementById(buttonID);
    var input= document.getElementById("screen");
    button.addEventListener("click" , function(){
        btext=button.innerHTML;
        var c = input.value;
        input.value+= btext;
    })
}
var buttonID =["bt1","bt2","bt3","bt4","bt5","bt6","bt7","bt8","bt9","bt0","bt+","bt-","btx","bt/","btarcop","btarccl","bt."];
window.onload=function(){
    for (var i=0 ; i<buttonID.length ; i++){
        click(buttonID[i]);
    }
}
function resetres() {
    var input=document.getElementById("screen");
    input.value= "";
}
