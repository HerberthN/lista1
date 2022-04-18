function Mult (n1, n2){
    return n1 * n2;
}

function Divi (n1, n2){
    if (n2 !== 0){
        return n1 / n2;
    }
    else{
        return 'error'
    }
}

function Addi (n1, n2){
    return n1 + n2;
}

function Subt (n1, n2){
    return n1 - n2;
}

console.log(Divi(1, 2))