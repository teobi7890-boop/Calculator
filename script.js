let screen = document.getElementById("screen");

let a = "";
let b = "";
let operator = "";
let answer = 0;
let turn = false;

let buttons = document.querySelectorAll(".row button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if(value === "C"){
            a = "";
            b = "";
            operator = "";
            answer = 0;
            turn = false;
            screen.value = "";
        }

        if(value === "+" || value === "/" || value === "-" || value === "*"){
            turn = true;
            operator = value;
            screen.value = operator;
        }

        if(value === "="){
            if(operator === "+"){
                answer = Number(a) + Number(b);
                screen.value = answer;
            }else if(operator === "/"){
                answer = Number(a) / Number(b);
                screen.value = answer;
            }else if(operator === "-"){
                answer = Number(a) - Number(b);
                screen.value = answer;
            }else if(operator === "*"){
                answer = Number(a) * Number(b);
                screen.value = answer;
            }

            a = answer.toString();
            b = "";
            turn = false;
            operator = "";
        }

        if(value >= "0" && value <= "9"){
            if(!turn){
                a += value;
                screen.value = a;
                screen.scrollLeft = screen.scrollWidth;
            }else{
                b += value;
                screen.value = b;
                screen.scrollLeft = screen.scrollWidth;
            }
        }

        
        
        console.log(a);
        console.log(b);
        console.log(operator);
        console.log(answer);
        console.log(turn);
    })
})