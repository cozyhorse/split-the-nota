//Dessa är alla variabler du behöver använda. 
//De ska dock ligga i olika funktioner och inte nedanför.
//Hämtar det som skrivits i inputfältet med ID numberOfFriends
const numberOfFriends = document.getElementById('numberOfFriends');
//Hämtar det som skrivits i inputfältet med ID tip
const tip = document.getElementById('tip');
//Hämtar det som skrivits i inputfältet med ID sum
const sum = document.getElementById('sum');
const friendSum = document.getElementById('friendSum');
function calculateTip(sum, tip) {
    const calculatedTip = sum * tip;
    const total = sum + calculatedTip;
    console.log("total", total);
    //Use Unary operators in typescript to convert into a number. "+numberOfFriends.value" same as "Number(numberOfFriends.value)"
    divideTotal(total, +numberOfFriends.value);
}
document.getElementById('calculateButton').addEventListener('click', () => {
    console.log(true);
    calculateTip(+sum.value, +tip.value);
    document.getElementById('inputForm').classList.toggle('hide');
});
function divideTotal(total, numberOfFriends) {
    const sumDivided = total / numberOfFriends;
    showDividedSum(sumDivided);
}
function showDividedSum(sum) {
    friendSum.innerHTML = sum + ' kr';
    document.getElementById('showSum').classList.toggle('hide');
}
