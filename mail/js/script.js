/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */



// prelevo il button dal dom
const button = document.getElementById("conferma");

// creo l'array
const listaMail = ["pippo@gmail.com", "paperino@hotmail.it", "pluto@virgilio.it", "topolino@gmail.com"];
console.log(listaMail);

// dichiaro il div e lo prelevo dal dom
let div= document.querySelector("div");

// dichiaro la classe booleana find
let find = false; 

// chiedo all'utente la sua email
button.addEventListener("click",
  function () {
    const mailInserita = document.getElementById("mail");
    const mail = mailInserita.value;
    console.log (mail);
  
    for (let index = 0; index < listaMail.length; index++) {
      const element = listaMail[index];
    //se l'elemento è uguale alla listaMail allora l'elemento inserito è valido
      if (mail == element) {
        find = true;
      }
    }

    if (mail == '') { // se l'input non è stato riempito
      console.log('mail non inserita');
      div.innerHTML = 'Inserisci la tua email';
    } else if (find) { //se la mail inserita dall'utente è uguale alla mail nella lista dell'array 
      console.log('Indirizzo email ' + mail + ' presente nella lista');
      div.innerHTML = 'Indirizzo mail ' + mail + ' presente nella lista.';
    } else if (find == false) { //se non è presente nella lista
      console.log('Indirizzo email ' + mail + ' non presente nella lista');
      div.innerHTML = 'Indirizzo mail ' + mail + ' non presente nella lista.';
    }
  }
)