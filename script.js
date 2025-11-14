document.getElementById("convertBtn").addEventListener("click", function () {
    const temp = parseFloat(document.getElementById("inputTemp").value);
    const type = document.getElementById("inputType").value;
    const resultBox = document.getElementById("result");

    if (isNaN(temp)) {
        resultBox.innerHTML = "Enter a valid number!";
        return;
    }

    let result;

    // Celsius to others
    if (type === "celsius") {
        result = {
            f: (temp * 9) / 5 + 32,
            k: temp + 273.15
        };

        resultBox.innerHTML = `
            ${result.f.toFixed(2)} °F <br>
            ${result.k.toFixed(2)} K
        `;
    }

    // Fahrenheit to others
    else if (type === "fahrenheit") {
        result = {
            c: (temp - 32) * 5 / 9,
            k: (temp - 32) * 5 / 9 + 273.15
        };

        resultBox.innerHTML = `
            ${result.c.toFixed(2)} °C <br>
            ${result.k.toFixed(2)} K
        `;
    }

    // Kelvin to others
    else if (type === "kelvin") {
        result = {
            c: temp - 273.15,
            f: (temp - 273.15) * 9 / 5 + 32
        };

        resultBox.innerHTML = `
            ${result.c.toFixed(2)} °C <br>
            ${result.f.toFixed(2)} °F
        `;
    }
});