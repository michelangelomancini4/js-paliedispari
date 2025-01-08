// Chiedere all’utente di inserire una parola

let parolaUtente = prompt ("Inserisci una parola");


console.log(parolaUtenteReverse(parolaUtente));


// Creare una funzione per capire se la parola inserita è palindroma(quindi se la parola è identica alla parola revertata)

function parolaUtenteReverse (stringa) {

    let parolaRevertata='';

    // ciclo per revertare parola

    for (let i = stringa.length - 1; i >= 0; i--) {

        let valoreCarattere = stringa.charAt(i);
        parolaRevertata = parolaRevertata + valoreCarattere
    }

    //verifica uguaglianza tra parole + risultato

    if ( parolaUtente === parolaRevertata) {
        console.log('La parola è palindroma:', parolaUtente);
    }
    else {
        console.log('Mi dispiace ma la parola non è palindroma:');
    }
        return parolaRevertata
}