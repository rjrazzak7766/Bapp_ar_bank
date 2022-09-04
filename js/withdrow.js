document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawAmountFild =  document.getElementById('input-withdraw');
    const withdrawAmountString=  withdrawAmountFild.value;
    const withdrawAmount =  parseFloat(withdrawAmountString);
    
    withdrawAmountFild.value = '';
 
    if(isNaN(withdrawAmount)){
        alert('Number Only');
        return;
    };

    
    const previousWithdrawFild =  document.getElementById('withdraw-total');
    const previousWithdrawFildstring =  previousWithdrawFild.innerText;
    const previousWithdraw =  parseFloat(previousWithdrawFildstring);

    const newBalancefild =  document.getElementById('new-Balance');
    const balanceFildString =  newBalancefild.innerText;
    const withDrawbalance =  parseFloat(balanceFildString);
    
    if(withdrawAmount > withDrawbalance){
        alert('Incaficient balance')
        return;
    };

    const withdraw =  withdrawAmount + previousWithdraw;
    previousWithdrawFild.innerText =  withdraw;

    const myNewBalance = withDrawbalance - withdraw;
    newBalancefild.innerText =  myNewBalance;
    
    

})