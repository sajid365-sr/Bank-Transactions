
document.getElementById('withdrawBtn').addEventListener('click',function(){

let newWithdrawAmount = getInputFieldValueById('WithdrawField');

let PreviousTotalWithdraw = totalDepositWithdrawValue('totalWithdraw');

const newWithdrawTotal = PreviousTotalWithdraw + newWithdrawAmount;

setDepositWithdrawValue('totalWithdraw',newWithdrawTotal);

let totalPreviousBalance = totalDepositWithdrawValue('totalBalance');
let newBalanceTotal = totalPreviousBalance - newWithdrawAmount;

setDepositWithdrawValue('totalBalance',newBalanceTotal);
})

