// geting input from input fields
function getInput(keyword) {
    const inputField = document.getElementById(keyword + '-input');
    const inputAmount = parseFloat(inputField.value);

    const errorCheck = document.getElementById(keyword + '-error');

    if (typeof inputAmount == 'number' && inputAmount >= 0) {
        return inputAmount;
    }
    else {
        errorCheck.style.visibility = 'visible';
        return 0;
    }
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
    if(totalExpence > incomeAmount) {
        const checkExpence = document.getElementById('expence-error');
        checkExpence.style.visibility = 'visible';
    }
    updateValues(totalExpence, 'total-expence');

    // calculates and updates balance 
    const balance = incomeAmount - totalExpence;
    updateValues(balance, 'balance-output');
})

// calculating and displaying saving amount and remainning amount 
document.getElementById('save-button').addEventListener('click', function () {
    // gets input from the savings input field
    const savingsPercentage = getInput('savings');

    // gets current balance from html text 
    const currentBalance = document.getElementById('balance-output').innerText;

    // gets current income amount from the input field 
    const currentIncome = getInput('income');

    // calculating savings 
    const savingsAmount = currentIncome * (savingsPercentage / 100);

    // calulating remaining amount 
    const remainingAmount = currentBalance - savingsAmount;
    if(remainingAmount < savingsAmount) {
        const checkBalance = document.getElementById('balance-error');
        checkBalance.style.visibility = 'visible';
    }

    // displaying savings amount 
    document.getElementById('saving-amount').innerText = savingsAmount;

    // displaying remainning amount 
    document.getElementById('remainning-balance').innerText = remainingAmount;
})