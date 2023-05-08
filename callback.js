function operazioneAsincrona(callback) {
  setTimeout(function () {
    callback("42");
  }, 3000);
}

function callbackFinale(value) {
  console.log("Esecuzione della callbackFinale");
  console.log(value);
}

// inizio esecuzione
console.log("Inizio operazione asincrona");
operazioneAsincrona(callbackFinale);
console.log("Fine operazione asincrona");
