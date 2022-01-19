let a = ''; //first number
let b = ''; //second number
let sign = ''; // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4','5', '6', '7', '8', '9','.'];
const action = ['-', '+', 'X', '/', '%'];

// экран

const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = ''; //first number
    b = '';//second number
    sign = ''; // знак операции
    finish = false;
    out.textContent = 0;
}

// function calc_percent(){
//     let arr = input.value;
//     let first_num = arr.split(/_(.+|-|*|/)/)[0];// цифры, введенные до одного из разделителей (+, -, *, /)
// let second_num = arr.split(/_(.+)/)[1];//цифры, введенные после любого активного разделителя(например -)
// let percent = first_num/100*second_num;// процент
// input.value = percent;// вывод данных по нажатию на кнопку %  <button type = "button" class = "second_row" onclick = "calc_percent()">%</button>
// }

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (even) => {
        // нажата не кнопка
        if(!event.target.classList.contains('btn')) return;
        // нажата кнопка clearAll
        if(event.target.classList.contains('ac')) return;

        out.textContent = '';
        // получаю нажатю кнопу
        const key = event.target.textContent;

        //если нажата цифровая кнопка 0-9 или точка
        if (digit.includes(key)) {
            if (b === '' && sign === '') {
                a += key;
                console.log(a, b, sign);
                out.textContent = a;
            } else if (a !== '' && b !== '' && finish) {
                b = key;
                finish = false;
                out.textContent = b;
            }
            else {
                b += key;
                out.textContent = b;
            }
            console.table(a, b, sign);
            return;
        }

    //если нажата цифровая кнопка + - / x
    if (action.includes(key)) {
        sign=key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }
    //нажата кнопка =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = "Ошибка";
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            case "%":
               a = a % b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
}