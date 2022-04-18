import {Oper} from "./atv3.js";
import promptSync from 'prompt-sync';
const menu = promptSync();

const optOper = new Map([
    [1, Oper.Addi],
    [2, Oper.Subt],
    [3, Oper.Mult],
    [4, Oper.Divi]
]);

while (true) {
    console.log('Menu de Opções:');
    console.log('1. Soma');
    console.log('2. Subtracao');
    console.log('3. Multiplicacao');
    console.log('4. Divisao');
    console.log('5. Sair');
    const chOpt = +(menu("= "));

        if(chOpt === 5){
            break;
        }
        else if(optOper.has(chOpt)){
            const num = funNumber();
            const n3 = optOper.get(chOpt)(...num);
            console.log(`${n3}\n`)
        }
        else{
            console.log(`Selecione uma opcao valida\n`)
        }
    }
function funNumber() {
    while (true) {
        const n1 = +(menu("n1: "));
        const n2 = +(menu("n2: "));
        if (!(isNaN(n1) || isNaN(n2))) {
            return [n1, n2];
        }
        console.log("Numeros invalidos.");
    }
}