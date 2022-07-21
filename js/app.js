// console.log('JS ok');
// definire le costanti
// chiedi il nome all'utente
// chiedi il numero di chilometri all'utente
// chiedi l'età
// aggiungi evento selezionando selezionando click per ottenere i valori di input inseriti in html
// ottenuti i valori moltiplica il numero di chilometri per 0.21
// aggiungi la funzione di lancio del programma di sconto con le condizioni anagrafiche stabilite
// arrotonda il risultato a due cifre decimali dopo il punto
// stampa il risultato calcolato + messaggio di testo sul browser

const PREZZO_AL_CHILOMETRO = 0.21;
const SCONTO_PERCENTUALE_MINORENNI = 0.2;
const SCONTO_PERCENTUALE_ANZIANI = 0.4; 
document.getElementById('invia').addEventListener('click',function(){
    let username = document.getElementById('username').value;
    let distanza = parseInt(document.getElementById('distanza').value);
    let eta = parseInt (document.getElementById('eta').value);
    let result = distanza * PREZZO_AL_CHILOMETRO;
    
    if(eta > 18){
        result = result - (result * 0.2);
    }else if (eta < 65){
        result = result - (result * 0.4);
    }
    result = result.toFixed(2);
    const price = document.getElementById('prezzo'); price.innerHTML = "il prezzo del suo biglietto è di.. " + result + "€";
})