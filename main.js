function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (mathata) {
        display.value = 'mathata';
    }
}

function calculateQuadratic() {
    const a = parseFloat(prompt("Enter coefficient a:"));
    const b = parseFloat(prompt("Enter coefficient b:"));
    const c = parseFloat(prompt("Enter coefficient c:"));
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        alert(`Roots are real and different: ${root1}, ${root2}`);
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        alert(`Root is real and same: ${root}`);
    } else {
        alert("Roots are complex and different.");
    }
}
