const currencies = [
  "EUR",
  "CAD",
  "HKD",
  "ISK",
  "PHP",
  "DKK",
  "HUF",
  "CZK",
  "AUD",
  "RON",
  "SEK",
  "IDR",
  "INR",
  "BRL",
  "RUB",
  "HRK",
  "JPY",
  "THB",
  "CHF",
  "SGD",
  "PLN",
  "BGN",
  "TRY",
  "CNY",
  "NOK",
  "NZD",
  "ZAR",
  "USD",
  "MXN",
  "ILS",
  "GBP",
  "KRW",
  "MYR",
];

const root = document.getElementById("root");
const container = document.createElement("div");
container.id = "container";
root.appendChild(container);

const dropDown = document.createElement('select');
container.appendChild(dropDown);
//these last 2 I got from others..copied to make sure doing right

const dropDownOutput = document.createElement('select');
container.appendChild(dropDownOutput);

for (let currency of currencies){
  let option = document.createElement('option')
  option.innerText = 
  dropDown.appendChild(option)
}


fetch(
  `https://openexchangerates.org/api/latest.json?app_id=
  3255668a2ccf498894ba64e4a8fbdc88
  &symbols=${selectConverter.value}`
)
  .then(response => response.json())
  .then(data =>  {

    let dropDown = document.createElement('select')
    let dropDownLabel = document.createElement('label')
    dropDownLabel.innerText = 'toCurrency'

    let input = document.createElement('input')
    
  
  

//     let dropDown = document.createElement("select");
    // let input = document.createElement("input");
    // let button = document.createElement("button");
    // button.innerText = "Search";
    // container.appendChild(input);
    // container.appendChild(button);
//     button.addEventListener("click", (event) => {
//       console.log(input.value);
//       for (currency of currencies) {
//         if (input.value.toLowerCase() === item.name.toLowerCase()) {
//           fetch(`https://openexchangerates.org/api/latest.json?app_id=3255668a2ccf498894ba64e4a8fbdc88&symbols=${selectConverter.value}`).then((response) => response.json());
//         }
//       }
//     });

//     for (item of data) {
//       let option = document.createElement("option");
//       option.innerText = item.name;
//       option.value = item.id;
//       dropDown.appendChild(option);
//     }
//     container.appendChild(dropDown);

//     dropDown.addEventListener("change", (event) => {
//       console.log(event.target.value);
//       fetch(`https://openexchangerates.org/api/latest.json?app_id=3255668a2ccf498894ba64e4a8fbdc88&symbols=${selectConverter.value}`)
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     });
//     // button.addEventListener('click', (event) => {
//     //   console.log(option.value)
//     //   fetch(https)
//     // })
//   });

//Need to use fetch function to use js and Ajax.
//(https://exchangeratesapi.io/) is the exchange rate info db
//Will need the following steps
// - DOM manipulation
// - event listeners
// - making fetch requests

// - read the base and target currencies from their dropdowns
// - read the currency amount from its form field
// - make a fetch request to
//`https://openexchangerates.org/api/latest.json?app_id=API_KEY&base=BASE_CURRENCY` where `BASE_CURRENCY` is a placeholder for the base currency code and `API_KEY` is a placeholder for an access key to use this api. You can get one by creating a free account on openexchangerates.org.
// - use the data from the fetch request to calculate the target currency amount
// - update the page with that amount

// There are other events you should listen for:
// you will want to update the user interface whenever someone
// chooses a currency or changes the amount of currency they are
//c onverting.

// We have provided a skeleton HTML, CSS, and JavaScript file for you to help you get started.
// `fetch();`
// function addEventListener(
