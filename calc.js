var num = 0;
var currOp = '';
var display = document.querySelector(".screen");
var operators = {
    '+': function(a, b){ return a+b },
    'x': function(a, b){ return a*b },
    '-': function(a, b){ return a-b },
    '/': function(a, b){ return a/b }
}
document.querySelector("#clear").addEventListener("click", function(){
    num = 0;
    currOp = '';
    display.innerHTML = "0";
})

document.querySelector("#delete").addEventListener("click", function(){
    if(display.innerHTML != 0) {
        let str = display.innerHTML;
        display.innerHTML = str.substring(0, str.length - 1);
        if(display.innerHTML == ""){
            display.innerHTML = "0";
        }
    }
})

document.querySelector("#nine").addEventListener("click", function(){
    if(display.innerHTML == 0){
        display.innerHTML = "9";
    }
    else{
        display.append("9");
    }
})

document.querySelector("#eight").addEventListener("click", function(){
    if(display.innerHTML == 0){
        display.innerHTML = "8";
    }
    else{
        display.append("8");
    }
})

document.querySelector("#seven").addEventListener("click", function(){
    if(display.innerHTML == 0){
        display.innerHTML = "7";
    }
    else{
        display.append("7");
    }
})

document.querySelector("#six").addEventListener("click", function(){
    if(display.innerHTML == 0){
        display.innerHTML = "6";
    }
    else{
        display.append("6");
    }
})

document.querySelector("#five").addEventListener("click", function(){
    if(display.innerHTML == 0){
        display.innerHTML = "5";
    }
    else{
        display.append("5");
    }
})

document.querySelector("#four").addEventListener("click", function(){
    if(display.innerHTML == 0){
        display.innerHTML = "4";
    }
    else{
        display.append("4");
    }
})

document.querySelector("#three").addEventListener("click", function(){
    if(display.innerHTML == 0){
        display.innerHTML = "3";
    }
    else{
        display.append("3");
    }
})

document.querySelector("#two").addEventListener("click", function(){
    if(display.innerHTML == 0){
        display.innerHTML = "2";
    }
    else{
        display.append("2");
    }
})

document.querySelector("#one").addEventListener("click", function(){
    if(display.innerHTML == 0){
        display.innerHTML = "1";
    }
    else{
        display.append("1");
    }
})

document.querySelector("#zero").addEventListener("click", function(){
    if (display.innerHTML != 0) {
        display.append("0");
    }
})

document.querySelector("#multiply").addEventListener("click", function(){
    if(display.innerHTML != 0){
        if (currOp != '' && num != 0) {
            num = operators[currOp](num, parseInt(display.innerHTML, 10));
        }
        else{
            num = parseInt(display.innerHTML, 10);
        }
        currOp = 'x';
        display.innerHTML = "0";
    }
})

document.querySelector("#divide").addEventListener("click", function(){
    if(display.innerHTML != 0){
        if (currOp != '' && num != 0) {
            num = operators[currOp](num, parseInt(display.innerHTML, 10));
        }
        else{
            num = parseInt(display.innerHTML, 10);
        }
        currOp = '/';
        display.innerHTML = "0";    
    }
})

document.querySelector("#add").addEventListener("click", function(){
    if(display.innerHTML != 0){
        if (currOp != '' && num != 0) {
            num = operators[currOp](num, parseInt(display.innerHTML, 10));
        }
        else{
            num = parseInt(display.innerHTML, 10);
        }
        currOp = '+';
        display.innerHTML = "0";
    }
})

document.querySelector("#minus").addEventListener("click", function(){
    if(display.innerHTML != 0){
        if (currOp != '' && num != 0) {
            num = operators[currOp](num, parseInt(display.innerHTML, 10));
        }
        else{
            num = parseInt(display.innerHTML, 10);
        }
        currOp = '-';
        display.innerHTML = "0";
    }
})

document.querySelector("#equal").addEventListener("click", function(){
    if (currOp != '') {
        num = operators[currOp](num, parseInt(display.innerHTML, 10));
        display.innerHTML = Math.round(num);
    }
})