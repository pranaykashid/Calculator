let input_box2 = document.getElementsByClassName('input2')[0];
let input_box1 = document.getElementsByClassName('input1')[0];

let equation;
function getval(num){
    if(input_box2.value == "0"){ 
        input_box2.value=num;
    }
    else{
     input_box2.value+=num;
    }
}
function getans(){
    let ans = eval(input_box2.value);
    equation = input_box2.value;
    input_box2.value = ans;
    input_box1.value = equation + '=';
}

function clr(){
    input_box2.value = '0';
    input_box1.value = '';
}

