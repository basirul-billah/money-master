// geting input from input fields
function getInput(keyword) {
    const inputField = document.getElementById(keyword + '-input');
    const inputAmount = parseFloat(inputField.value);

    return inputAmount;
}

// updates fields
function updateValues(fieldVariable, updateId) {
    const outputField = document.getElementById(updateId);
    outputField.innerText = fieldVariable;
}

// calculates total expence and shows to user 
document.getElementById('calculate-button').addEventListener('click', function () {

    // gets input from the input fields
    const incomeAmount = getInput('income');
    const foodAmount = getInput('food');
    const rentAmount = getInput('rent');
    const clotheAmount = getInput('clothe');

    // calculates and updates expence 
    const totalExpence = foodAmount + rentAmount + clotheAmount;
    updateValues(totalExpence, 'total-expence');

    // calculates and updates balance 
    const balance = incomeAmount - totalExpence;
    updateValues(balance, 'balance-output');
})
