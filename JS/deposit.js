
// add 'click' event handler on button(deposit/withdraw)
document.getElementById('depositBtn').addEventListener('click',function(){
  //getting deposit field value
 let newDepositAmount = getInputFieldValueById('depositField');
 //getting total deposit value
 let PreviousTotalDeposit = totalDepositWithdrawValue('totalDeposit');

 //adding current deposit value and previous deposited amount
 const newDepositTotal = PreviousTotalDeposit + newDepositAmount;

 setDepositWithdrawValue('totalDeposit',newDepositTotal);


 //Get previous balance

let totalPreviousBalance = totalDepositWithdrawValue('totalBalance');
let newBalanceTotal = totalPreviousBalance + newDepositAmount;

//set current balance

setDepositWithdrawValue('totalBalance',newBalanceTotal);
});

