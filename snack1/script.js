console.log("ciao");


// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// Definiiamo il nostro array di oggetti 
const racingBike = [
    {
        name: "pinarello" ,
        weight: 7.5
    },
    {
        name: "orbea" ,
        weight: 7.2
    },
    {
        name: "factor" ,
        weight: 8
    },
    {
        name: "specialized" ,
        weight: 8.3
    },
    {
        name: "scott" ,
        weight: 6.5
    },
]

// creo un array vuoto che andrà a contenere il peso di ogni bicicletta 
const racingBikeWeights = [];

// per ogni oggetto dell'array bici da corsa, prendo il valore della key peso e lo inserisco nell'array 
for(i=0; i<racingBike.length; i++){
    const currentWeight = racingBike[i].weight;
    racingBikeWeights.push(currentWeight);
}

racingBikeWeights.sort();

for(i=0; i < racingBike.length; i++){
    const currentWeight = racingBike[i].weight;
    const currentName = racingBike[i].name;
    if(racingBikeWeights[0] === currentWeight){
        console.log(`La bici con il peso minore è: ${currentName}.
            Il suo peso è ${currentWeight} kg`);
    }
}