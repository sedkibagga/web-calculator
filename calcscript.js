const b0=document.getElementById("0");
const b1=document.getElementById("1");
const b2=document.getElementById("2");
const b3=document.getElementById("3");
const b4=document.getElementById("4");
const b5=document.getElementById("5");
const b6=document.getElementById("6");
const b7=document.getElementById("7");
const b8=document.getElementById("8");
const b9=document.getElementById("9");
const point=document.getElementById(".");
const plus=document.getElementById("+");
const moins=document.getElementById("-");
const fois=document.getElementById("*");
const sur=document.getElementById("/");
const clear=document.getElementById("c");
const egal=document.getElementById("=");
const inputbox=document.getElementById("input");
function write(val){
    inputbox.value +=val
}
function clearinput(){
    inputbox.value = ""
}
b0.addEventListener("click",()=>write("0"));
b1.addEventListener("click",()=>write("1"));
b2.addEventListener("click",()=>write("2"));
b3.addEventListener("click",()=>write("3"));
b4.addEventListener("click",()=>write("4"));
b5.addEventListener("click",()=>write("5"));
b6.addEventListener("click",()=>write("6"));
b7.addEventListener("click",()=>write("7"));
b8.addEventListener("click",()=>write("8"));
b9.addEventListener("click",()=>write("9"));
plus.addEventListener("click",()=>write("+"));
moins.addEventListener("click",()=>write("-"));
fois.addEventListener("click",()=>write("*"));
sur.addEventListener("click",()=>write("/"));
point.addEventListener("click",()=>write("."));
clear.addEventListener("click",()=>clearinput());
egal.addEventListener("click", () => inputbox.value = eval(inputbox.value) );
