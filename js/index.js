
// Function that display value
function dis(val) {
    document.getElementById("textBox").value += val
}


// Function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("textBox").value
    let y =eval(x)
    document.getElementById("textBox").value = y
}


function myFunction(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("textBox").value += event.key;
}


// Function that clear the display
function clr() {
    document.getElementById("textBox").value = ""
}