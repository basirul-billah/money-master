// geting input from input fields
function getInput(keyword) {
    const inputField = document.getElementById(keyword + '-input');
    const inputAmount = parseFloat(inputField.value);

    return inputAmount;
}

// calculates total expence and shows to user 
document.getElementById('calculate-button').addEventListener('click', function () {

    const incomeAmount = getInput('income');

    const foodAmount = getInput('food');
    const rentAmount = getInput('rent');
    const clotheAmount = getInput('clothe');

    // calculates expence 
    const totalExpence = foodAmount + rentAmount + clotheAmount;

    const totalExpenceOutput = document.getElementById('total-expence');
    totalExpenceOutput.innerText = totalExpence;

    // calculates balance 
    const balance = incomeAmount - totalExpence;

    const balanceOutput = document.getElementById('balance-output');
    balanceOutput.innerText = balance;
})
