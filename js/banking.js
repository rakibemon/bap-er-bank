/* document.getElementById("deposit-button").addEventListener('click', function () {
    const depositInput = document.getElementById("deposit-input");
    const depositInputValue = depositInput.value;
    let updateDepositBalance = parseFloat(document.getElementById("deposit-balance").innerText) + parseFloat(depositInputValue);
    document.getElementById("deposit-balance").innerText = updateDepositBalance;
    let updateTotalBalance = parseFloat(document.getElementById("total-balance").innerText) + parseFloat(depositInputValue);
    document.getElementById("total-balance").innerText = updateTotalBalance;

}) */

// Add Event Handler on Deposit Button

document.getElementById("deposit-button").addEventListener('click', function () {
    // Get the Amount Deposited
    const depositInput = document.getElementById("deposit-input");
    const depositAmount = depositInput.value;
    console.log(depositAmount);
    const depositTotal = document.getElementById("deposit-balance");
    /* depositTotal.innerText = depositAmount; */
    let updateDepositBalance = parseFloat(document.getElementById("deposit-balance").innerText) + parseFloat(depositAmount);
    document.getElementById("deposit-balance").innerText = updateDepositBalance;

    // Add the Deposit Money to Total Balance
    let updateTotalBalance = parseFloat(document.getElementById("total-balance").innerText) + parseFloat(depositAmount);
    document.getElementById("total-balance").innerText = updateTotalBalance;

    // clear the deposit input field
    depositInput.value = '';
});

// Add Event Handler on Withdraw Button

document.getElementById("withdraw-button").addEventListener("click", function () {
    // Get the Amount Withdrawed
    const withdrawInput = document.getElementById("withdraw-input");
    // Get the Current Withdraw Balance
    let withdrawBalance = document.getElementById("withdraw-balance");
    // Get the Current Total Balance
    let totalBalance = document.getElementById("total-balance");
    // Check have you enough moneu to Withdraw
    if (parseFloat(withdrawInput.value) <= parseFloat(totalBalance.innerText)) {
        // Add every Withdraw Money
        const updateWithdrawBalance = parseFloat(withdrawBalance.innerText) + parseFloat(withdrawInput.value);
        // Update the total Withdraw Money to Withdraw.innerText
        withdrawBalance.innerText = updateWithdrawBalance;
        // Deducted withdraw Money from Total Balance
        const updateTotalBalance = parseFloat(totalBalance.innerText) - parseFloat(withdrawInput.value);
        // Update the total Balance after deduct from withdraw
        totalBalance.innerText = updateTotalBalance;

        // clear the withdraw input field
        withdrawInput.value = '';
    }
    else {
        alert("You Don't have money to withdraw");
    }
})