import 'dotenv/config';
import promptSync from 'prompt-sync';
import fetch from "node-fetch";
const menu = promptSync();

//while (true) {
main();
function main(){
    console.log('Menu de Opções:');
    console.log('1. Insirir Latitude e Longitude');
    console.log('2. Sair');
    const chOpt = +(menu("= "));

        if(chOpt === 1){
            const [Lat, Lon] = latLon();
            const prev = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&units=${process.env.UNT}&appid=${process.env.API_KEY}`)
            .then(Response => {
                Response.json()
                    .then(t => {
                        console.log(`\nTemp: ${t.main.temp}\n`)
                        main();
                    });
            })
            .catch(err => console.log('Failed'))
        }
        else if(chOpt === 2){
            return
        }
        else{
            console.log("Digite uma opcao valida");
        }

}
export function latLon() {
    while (true) {
        const Lat = +(menu("Latitude: "));
        const Lon = +(menu("Longitude: "));
        if (!(isNaN(Lat) || isNaN(Lon))) {
        return [Lat, Lon];
        }
        console.log("Numeros invalidos.");
    }
}
