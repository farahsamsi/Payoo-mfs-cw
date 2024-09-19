// add money to the account

// step 1 : add a event handler for on clicking the add money button
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    // step 2 : get money to be added to the account balance
    const addMoneyInput = document.getElementById('input-add-money').value;

    console.log(addMoneyInput)

    // get the PIN number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;

    console.log(pinNumberInput)
  });
