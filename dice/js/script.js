const number = document.getElementById("number");
number.addEventListener ("click", function () {
const pcNumber = parseInt(Math.random() * 5 + 1);
console.log(pcNumber);
const userNumber = parseInt(Math.random() * 5 + 1);
console.log(userNumber);
    console.log(userNumber);
    if (userNumber > pcNumber) {
        alert("Hai vinto!");
    } else if (userNumber < pcNumber) {
        alert("hai perso!");
    } else {
        alert("Pareggio!");
    }

const userOutput = document.getElementById("usernumber"). innerHTML = `Il tuo numero: ${userNumber}`;
const pcOutput = document.getElementById("pcnumber"). innerHTML = `Il numero scelto dal PC: ${pcNumber}`;
})
