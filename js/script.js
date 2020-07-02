let selectConvertTo = document.querySelector(".js-selectConvertTo");
let amount = document.querySelector(".js-amount");
let calculateForm = document.querySelector(".js-calculateForm");
let convertWithResult = document.querySelector(".js-convertWith");
let convertToResult = document.querySelector(".js-convertTo");
let resultBox = document.querySelector(".js-resultBox");

let euroRate = 4.4573;
let usdRate = 3.9741;
let gbpRate = 4.9328;

let calculate = (currencyRate) => {
    return amount.value / currencyRate;
}


let printResult = (result, currencyTo) => {
    convertWithResult.innerText = `${amount.value} pln`;
    convertToResult.innerText = `${result.toFixed(2)} ${currencyTo}`;
    resultBox.classList.add("visible");
}

calculateForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let currencyTo = selectConvertTo.value;
    let result;


    switch (currencyTo) {
        case "euro":
            result = calculate(euroRate);
            printResult(result, currencyTo);
            break;
        case "usd":
            result = calculate(usdRate);
            printResult(result, currencyTo);
            break;
        case "gbp":
            result = calculate(gbpRate);
            printResult(result, currencyTo);
            break;
    }
})