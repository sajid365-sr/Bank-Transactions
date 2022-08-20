// Get the input field(deposit/withdraw) value

function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = Number(inputField.value);
    inputField.value = '';
  return inputFieldValue;
  
}
 //Get the total deposit/withdraw/balance value

function totalDepositWithdrawValue(totalId){
const displayTotal = Number(document.getElementById(totalId).innerText);
return displayTotal;
}

//set total diposit/withdraw/balance value

function setDepositWithdrawValue(elementId, newValue){
  const displayTotal = document.getElementById(elementId);
  displayTotal.innerText = newValue;
}
