// Domandare il nome all'utente
const name = prompt("Qual è il tuo nome?");
console.log(name);

// Domandare il congnome all'utente
const surname = prompt("Qual è il tuo cognome?");
console.log(surname);

// Domandare il colore preferito all'utente
const color = prompt("Qual è il tuo colore preferito?");
console.log(color);

// Impostare un numero in una variabile
const number = 21

// Comporre password
const password = name + surname + color + number;
console.log(password);

// Stampare password
document.getElementById('user-password').innerHTML = password;