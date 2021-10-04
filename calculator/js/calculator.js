//
function getNumber(num) {
    var manal = document.getElementById('input');
    switch (num) {
        case 1:
            manal.value += '1';
            break;
        case 2:
            manal.value += '2';
            break;
        case 3:
            manal.value += '3';
            break;
        case 4:
            manal.value += '4';
            break;
        case 5:
            manal.value += '5';
            break;
        case 6:
            manal.value += '6';
            break;
        case 7:
            manal.value += '7';
            break;
        case 8:
            manal.value += '8';
            break;
        case 9:
            manal.value += '9';
            break;
        case 0:
            manal.value += '0';
            break;
    }
}

/* clear screen CE button function */
function clearScreen() {
    document.getElementById('input').value = "";
    document.getElementById('answer').value = "";
}

/* for getting the mathematical sign operator */
function getOperand(operand) {
    var manal = document.getElementById('input');
    switch (operand) {
        case '+':
            manal.value += '+';
            break;
        case '-':
            manal.value += '-';
            break;
        case '*':
            manal.value += '*';
            break;
        case '/':
            manal.value += '/';
            break;
        case '+/-':
            manal.value += '-' + manal.value;
            break;
    }
}

/* delete a digit function */
function backspace() {
    var manal = document.getElementById('input');
    var x = manal.value;
    if (x.length > 0) {
        x = x.substring(0, x.length-1); /* removes the last digit */
        manal.value = x;
    }
}

function compute() {
    var manal = document.getElementById('input');
    ans =  +eval(manal.value).toFixed(11);
    document.getElementById('answer').value = '= ' + ans;
}

var i = 0;
function brackets() {
    var manal = document.getElementById('input');
    if (i == 0) {
        manal.value += '(';
        i = 1;
    }else if (i == 1) {
        manal.value += ')';
        i = 0;
    }
}

document.oncontextmenu = function () {
    return false;
}


