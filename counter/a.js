let value = document.getElementById("counterEnter");


function increase() {
    let present_value = parseInt(value.textContent);
    present_value += 1;
    value.textContent = present_value;
    if (present_value > 0) {
        value.style.color = "green";
    } else if (present_value < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "black";
    }
}

function decrease() {
    let present_value = parseInt(value.textContent);
    present_value -= 1;
    value.textContent = present_value;
    if (present_value > 0) {
        value.style.color = "green";
    } else if (present_value < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "black";
    }
}

function reset() {
    let present_value = 0;
    value.textContent = present_value;
    value.style.color = "black";
}
