// step 1
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicking on btn");

    // step 2
    const cashOut = parseFloat(document.getElementById('input-cash-out').value);
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    if(pinNumber === '1234'){
        const balance = parseFloat(document.getElementById('account-balance').innerText);
       
        // reduce balance
        const newBalance = balance - cashOut;
        console.log(newBalance);

        // update the UI
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to Cash out. Please try later')
    }
  });
