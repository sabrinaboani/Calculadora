const display = document.getElementById('display');

function appendValue(value) {
    if(display.innerText === "0") display.innerText = "";
    display.innerText += value;
}

function clearDisplay() {
    display.innerText = "0";
}

function calculate() {
    try {
        let expression = display.innerText.replace(/÷/g, "/").replace(/×/g, "*");
        display.innerText = eval(expression);
    } catch {
        display.innerText = "Erro";
    }
}
