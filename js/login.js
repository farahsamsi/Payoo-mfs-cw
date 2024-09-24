// console.log('button clicking file added');

// form submit reloading the page

// step 1 : set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    // step 2 : prevent default behavior (prevent reloading browser)
    event.preventDefault();

    // step 3 : get the phone number and pin number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    console.log(phoneNumber, pinNumber);

    //step 4 : validate the numbers
    // this temporary, should not do like this
    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("You are logged in");
      window.location.href = '/27.Payoo-mfs-cw/home.html'
    } else {
      alert("Wrong phone number or PIN");
    }
  });
