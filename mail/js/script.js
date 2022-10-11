// INPUT
const email = ["ilfigo@bestemail.com", "ilmenofigo@bestemail.com", "ilpiùfigo@bestemail.com", "l'amicodiquellofigo@bestemail.com" ];
console.log(email);
// COMPUTING
const button = document.getElementById("submit");
const emailInput = document.getElementById("email");
button.addEventListener ("click", function (){
let userEmail = emailInput.value;
console.log(userEmail);
let convalidated = false;
for (let i = 0; i < email.length; i++) {
    console.log(i);
    if (userEmail == email[i]) {
        convalidated = true;
    } 
}
console.log(convalidated);
    if (convalidated) {
        alert("Accesso consentito");
    } else {  
        alert("Accesso negato");
    }
    console.log(convalidated);
})
// MESSAGGIO POSITIVO
// ALTRIMENTI, MESSAGGIO NEGATIVO
