import 'dotenv/config';
import promptSync from 'prompt-sync';
import fetch from "node-fetch";
import { latLon } from './atv5.js';
const menu = promptSync();

//while (true) {
main();
async function main(){
    console.log('Menu de Opções:');
    console.log('1. Insirir Latitude e Longitude');
    console.log('2. Sair');
    const chOpt = +(menu("= "));

        if(chOpt === 1){
            const [Lat, Lon] = latLon();

            const Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&units=${process.env.UNT}&appid=${process.env.API_KEY}`);
            const temp = await Response.json();
            console.log(`\nTemp: ${temp.main.temp}\n`);
            main();
        }
        else if(chOpt === 2){
            
        }
        else{
            console.log("Digite uma opcao valida");
            main();
        }

}
// function latLon() {
//     while (true) {
//         const Lat = +(menu("Latitude: "));
//         const Lon = +(menu("Longitude: "));
//         if (!(isNaN(Lat) || isNaN(Lon))) {
//         return [Lat, Lon];
//         }
//         console.log("Numeros invalidos.");
    // }
// }
