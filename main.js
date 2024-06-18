var result = 0;
var acumulator = 0;
let displayn = document.getElementById("displaynum");

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
    let displayn = document.getElementById("displaynum");
    displayn.innerHTML = num;
    console.log(num);
}


