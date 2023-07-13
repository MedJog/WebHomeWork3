function hello(){
    let name = document.getElementById("yourname").value;
    document.getElementById("result").innerText ="Привет, " + name + "! Добро пожаловать!";
    document.getElementById("yourname").value=" ";
    let img = document.createElement('img');
    img.src = 'photo/cat3.jpg';
    document.getElementById('image').append(img);
    
}

hello()

function calc(){
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);
    let sum = num1 + num2;
    document.getElementById('summa').innerHTML = sum;
}

calc()

function send(){
    let sender = document.getElementById("sendername").value;
    let message = document.getElementById("yourmessage").value;
    document.getElementById("result").innerText= sender + ":" + message;
    document.getElementById("sendername").value=" "; 
    document.getElementById("yourmessage").value=" "; 
}
send()