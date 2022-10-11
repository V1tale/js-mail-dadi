const number = document.getElementById("number");
number.addEventListener ("click", function () {
const pcNumber = parseInt(Math.random() * (10));
console.log(pcNumber);
const userNumber = parseInt(Math.random() * (10));
console.log(userNumber);
    if (userNumber > pcNumber) {
        alert("Hai vinto");
    } else {
        alert("hai perso!");
    }

const userOutput = document.getElementById("usernumber"). innerHTML = `Il tuo numero: ${userNumber}`;
const pcOutput = document.getElementById("pcnumber"). innerHTML = `Il numero scelto dal PC: ${pcNumber}`;
})
