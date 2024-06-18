var result = 0;
var acumulator = 0;
let displayn = document.getElementById("displaynum");
let lastnum = 0;

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
    
    if (lastnum == 0) {
        acumulator = String(num);
    } else {
        acumulator = lastnum + String(num);
    }
    lastnum = acumulator;
    console.log(acumulator);
    displayn.innerHTML = acumulator;
}


