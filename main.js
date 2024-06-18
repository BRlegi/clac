var result = 0;
var acumulator = 0;
let displayn = document.getElementById("displaynum");
let actualnum = 0;
let pastnum = 0;

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

function getInput(num) {
    
    let acumulator = 0;
    let displayn = document.getElementById("displaynum");
    
    if (num == "del") {
        acumulator = actualnum.substring(0, actualnum.length - 1); 
    } else if (actualnum == 0) {
        acumulator = String(num);
    } else {
        acumulator = String(actualnum) + String(num);
    }
    actualnum = acumulator;

    console.log(acumulator);
    displayn.innerHTML = acumulator;
}


