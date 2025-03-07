// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// Buona giornata e buon lavoro! :spock-hand:

const basketTeams = [
    {
        name  : "San Antonio Spurs",
        points : 0,
        takenFouls : 0
    },
    {
        name  : "Los Angeles Lakers",
        points : 0,
        takenFouls : 0
    },
    {
        name  : "Los Angeles Clippers",
        points : 0,
        takenFouls : 0
    },
    {
        name  : "Chicago Bulls",
        points : 0,
        takenFouls : 0
    },
    {
        name  : "Boston Celtics",
        points : 0,
        takenFouls : 0
    }
]
console.log(basketTeams);

// Creo dei min e dei max per la generazione dei numeri casuali 
const minFoul = 0;
const maxFoul = 15;
const minPoint = 0;
const maxPoint = 100;


// Per ogni elemento dell'array creo due numeri casuali e li inserisco 
// come values all'interno delle keys points and takenFouls 
for(i=0; i<basketTeams.length; i++){
    const randomPoints = randomNumberGenerate(minPoint, maxPoint);
    console.log(randomPoints);
    const randomFouls = randomNumberGenerate(minFoul, maxFoul);
    console.log(randomFouls);
    basketTeams[i].points = randomPoints;
    basketTeams[i].takenFouls = randomFouls;
}

const basketTeamsAndFouls = [];

for(i=0; i< basketTeams.length; i++){
    const newObject = {};
    newObject.name = basketTeams[i].name;
    newObject.takenFouls = basketTeams[i].takenFouls;
    basketTeamsAndFouls.push(newObject);
}

console.log(basketTeamsAndFouls);



// console.log("array originale", basketTeams);
// // //ESERCIZIO CON DELETE
// // const basketTeamsAndFouls = basketTeams;

// // for(i=0; i < basketTeamsAndFouls.length; i++){
// //     delete basketTeamsAndFouls[i].points;
// // }

// // console.log("Nuovo array ", basketTeamsAndFouls);
// // console.log("Array originale", basketTeams);








// Funzione per Generare numeri Random 

function randomNumberGenerate (min, max){
    const randomNum = Math.floor(Math.random() * (max - min -1) + min);
    return randomNum;
}