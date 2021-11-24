/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

const button = document.getElementById("conferma");
button.addEventListener("click",
  function () {
    const input = document.getElementById("mail");
    const mail = input.value;
    console.log (mail);
  });