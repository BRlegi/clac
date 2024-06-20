var result = 0;
var displaytext = 0;
let displayn = document.getElementById("displaynum");
let actualnum = 0;
let pastnum = 0;
let lastn = 0;
let count = 0;
let va = 0;
let operation;
let multiplier = 0;


console.log(`%c 
                                   ▄█████████▄
                                ▄███▀▀"' └"▀▀███▄
                              ╓███└           ▀███▄
                             ╓███               ███⌐
                             ███┐               ▐██▌
                             ███████████████████████
                                 
                             ███████████████████████
                             
                             ███████████████████████`,`color:orange`);






function calc(initn, secondn, operator) {
    
    switch(operator) {
        case sum:
            result = initn + secondn;
            break;
        case sub:
            result = initn - secondn;
            break;
        case mult:
            result = initn * secondn;
            break;
        case division:
            result = initn / secondn;
            break;
    }

}

function toPos(value) {
    value = value * -1;
    return value;
}

function getInput(num) {
    
    displaytext = 0;
    let displayn = document.getElementById("displaynum");
    
    //sum
    if (num == 'sum' || num == 'enter' && operation =='sum') {
        operation = 'sum';
        count = count + 1;
        lastn = lastn + Number(actualnum);
        console.log(displaytext);
        console.log(lastn);
        console.log(count);
        displaytext = 0;
        actualnum = lastn;

        displayn.innerHTML = lastn;
    } 
    
    //subtraction
    else if (num == 'sub' || num == 'enter' && operation == 'sub') {
        operation = 'sub';
        count = count + 1;
        lastn = Number(actualnum) - lastn;
        if (count > 1) {
            lastn = toPos(lastn);
        }
        displayn.innerHTML = lastn;
        console.log("lastn", lastn);
    } 
    
    //multiplication
    else if (num == 'mult' || num == 'enter' && operation == 'mult') {

        console.log('before', lastn, actualnum);
        operation = 'mult';
        count = count + 1;

        if (count % 2 == 1) {
            multiplier = actualnum;
        } else if (count > 2) {
            lastn = Number(lastn) * actualnum;
        } else {
            lastn = Number(actualnum) * multiplier;
        }
        console.log('mult', multiplier);
        console.log('mult lastn', lastn);

        displayn.innerHTML = lastn;
    }
    
    //division
    else if (num == 'divi') {
        operation = 'divi';
        count = count + 1;

        if (count % 2 == 1) {
            multiplier = actualnum;
        } else if (count > 2) {
            lastn = Number(lastn) / actualnum;
            displayn.innerHTML = multiplier;
        } else {
            lastn = multiplier / Number(actualnum);
        }
        console.log('mult', multiplier);
        console.log('mult lastn', lastn);
        if (count < 2) {
            displayn.innerHTML = multiplier;
        } else {
            displayn.innerHTML = lastn;
        }
    }
   
    //keyboard       
    else if (num == "del") {
        displaytext = actualnum.substring(0, actualnum.length - 1); 
        displayn.innerHTML = displaytext;
    } else if (actualnum == 0) {
        displaytext = String(num);
        displayn.innerHTML = displaytext;
    } else {
        displaytext = String(actualnum) + String(num);
        displayn.innerHTML = displaytext;
    }
    actualnum = displaytext;
    console.log(displaytext);
    
    
}