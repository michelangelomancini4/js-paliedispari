// chiedi all'utente di scegliere tra pari e dispari e inserire un numero tra 1 e 5

let numeroUtente = parseInt(prompt("scegli pari o dispari ed inserisci un numero da 1 a 5!"));
console.log('Hai scelto il numero :', numeroUtente);

// genera un numero random da 1 a 5 per il pc con una funzione

    let numeroGenerato = Math.floor(Math.random() * 5) + 1;

console.log('Il pc ha scelto il numero:',numeroGenerato );

//  somma il numero del pc e il numero scelto dall'utente

let sommaNumeri = numeroUtente + numeroGenerato;

console.log(sommaNumeri);

console.log(pariODispari (sommaNumeri));

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function pariODispari(numero) {
    
    let risultato;
    // Dichiariamo chi ha vinto.
    if (numero % 2 === 0) {
        risultato = "se hai scelto pari hai vinto!"
    } else {
        risultato = "se hai scelto dispari hai vinto!"
    }
    return risultato
}









