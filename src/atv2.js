export const Mult = (n1, n2) => n1 * n2;


export const Divi = (n1, n2) =>{
    if (n2 !== 0){
        return n1 / n2;
    }
    else{
        return 'error'
    }
}

export const Addi = (n1, n2) => n1 + n2;


export const Subt = (n1, n2) => n1 - n2;
