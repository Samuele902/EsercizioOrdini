// Creare una funzione per calcolare il totale ordine (il calcolo dell'ordine è asincrono e ci mette 5 secondi). Il calcolo è imponibile + IVA.
function asyncCalcolaOrdine(imponibile, iva, callback) {
  setTimeout(function () {
    callback(imponibile + iva);
  }, 5000);
}

// Per poterlo calcolare è necessario recuperare l'imponibile e l'iva chiamando una funziona asincrona che restituisce i valori dopo 3 secondi.
export default function asyncGetImponibileEIva(callback) {
  setTimeout(function () {
    callback([100, 22]);
  }, 3000);
}

function callbackCalcoloOrdine(totale) {
  console.log("Totale ordine: " + totale + " euro");
}

function callbackGetImponibileEIva(valori) {
  console.log("Imponibile: " + valori[0] + " euro");
  console.log("IVA: " + valori[1] + " euro");

  // Catena di chiamate asincrone. Ora che ho i valori li passo al calcolo ordine.
  asyncCalcolaOrdine(valori[0], valori[1], callbackCalcoloOrdine);
}

asyncGetImponibileEIva(callbackGetImponibileEIva);
