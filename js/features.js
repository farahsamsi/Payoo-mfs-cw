// // show the cash out form
// document
//   .getElementById("btn-show-cash-out")
//   .addEventListener("click", function () {
//     // show the cash out form
//     document.getElementById("cash-out-form").classList.remove("hidden");

//     // hide the add money form
//     document.getElementById("add-money-form").classList.add("hidden");
//   });

// //   show add money form and hide the cash out form
// document
//   .getElementById("btn-show-add-money-form")
//   .addEventListener("click", function () {
//     // show add money form
//     document.getElementById('add-money-form').classList.remove('hidden');

//     document.getElementById('cash-out-form').classList.add('hidden');
//   });

document
  .getElementById("btn-show-add-money-form")
  .addEventListener("click", function () {
    showSectionById("add-money-form");
  });

document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    showSectionById("cash-out-form");
  });

document.getElementById('btn-show-transactions').addEventListener('click', function(){
  showSectionById('transaction-section');
})
