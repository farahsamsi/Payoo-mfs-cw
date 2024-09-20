// add money to the account

// step 1 : add a event handler for on clicking the add money button
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    // step 2 : get money to be added to the account balance
    const addMoneyInput = document.getElementById("input-add-money").value;

    // get the PIN number provided
    const pinNumberInput = document.getElementById("input-pin-number").value;

    // step 3 : verify the PIN number
    if (pinNumberInput === "1234") {
      console.log("adding money to your account");

      // step 4 : get the current balance
      const balance = document.getElementById("account-balance").innerText;

      // step 5 : add addMoneyInput with balance
      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);

      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);

      // step 6 : update the balance in UI/DOM
      document.getElementById("account-balance").innerText = newBalance;

       // add to transaction history
       const div = document.createElement("div");
       div.classList.add("bg-yellow-300");
       div.innerHTML = `
         <h4 class="text-2xl font-bold"> Add Money </h4>  
         <p>${addMoneyNumber} is added. New Balance ${newBalance}</p>
       `;
 
       document.getElementById('transaction-container').appendChild(div);
    } else {
      alert("Failed to add money");
    }
  });
