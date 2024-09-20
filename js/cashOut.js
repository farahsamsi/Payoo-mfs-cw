// step 1
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // step 2
    const cashOut = parseFloat(document.getElementById("input-cash-out").value);
    const pinNumber = document.getElementById("input-cash-out-pin").value;

    if (pinNumber === "1234") {
      const balance = parseFloat(
        document.getElementById("account-balance").innerText
      );

      // reduce balance
      const newBalance = balance - cashOut;

      if(cashOut>balance){
        alert('Failed');
        return;
      }

      // update the UI
      document.getElementById("account-balance").innerText = newBalance;

      // add to transaction history
      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
        <h4 class="text-2xl font-bold"> Cash Out </h4>  
        <p>${cashOut} withdraw. New Balance ${newBalance}</p>
      `;

      document.getElementById('transaction-container').appendChild(div);
    } else {
      alert("Failed to Cash out. Please try later");
    }
  });
