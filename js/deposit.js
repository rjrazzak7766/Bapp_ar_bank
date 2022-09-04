document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount =  document.getElementById('input-deposit');
    const newdeposit =  depositAmount.value;
    const deposit = parseFloat(newdeposit);

    const depositTotalElements =  document.getElementById('deposit-total')
    const previousdePositAmount = depositTotalElements.innerText;
    const previousdePosit =  parseFloat(previousdePositAmount);

    const myTotalDeposit =  previousdePosit + deposit;

    depositTotalElements.innerText = myTotalDeposit;

    const newBalance =  document.getElementById('new-Balance');
    const balanceString =  newBalance.innerText;
    const balance =  parseFloat(balanceString);

    const myTotalBalance =  balance + deposit;

    newBalance.innerText =  myTotalBalance;

    depositAmount.value= '';
})