// chiedi all'utente di scegliere tra pari e dispari e inserire un numero tra 1 e 5

let numeroUtente = parseInt(prompt("scegli pari o dispari ed inserisci un numero da 1 a 5!"));
console.log('Hai scelto il numero :', numeroUtente);

// genera un numero random da 1 a 5 per il pc

function numeroRandomPc(numMin,numMax) {
    const numeroGenerato = Math.floor(Math.random() * 5) + 1;
    return numeroGenerato
}
console.log('Il pc ha scelto il numero :',numeroRandomPc(5, 1));

//  somma i numero del pc e il numero scelto dall'utente

let sommaNumeri = numeroUtente + numeroRandomPc;
console.log(sommaNumeri);
