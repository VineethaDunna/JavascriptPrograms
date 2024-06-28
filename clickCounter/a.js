let clickCounterContainer = document.getElementById('clickCounterContainer');
let heading = document.createElement("h1");
heading.textContent = "The Button has been clicked";
clickCounterContainer.appendChild(heading);

let spanItem = document.createElement('span')
spanItem.id = "counterValue";

spanItem.textContent = "0";
spanItem.classList.add("span");
clickCounterContainer.appendChild(spanItem);

let heading1 = document.createElement("h1");
heading1.textContent = "times";
clickCounterContainer.appendChild(heading1);

let para = document.createElement("p");
para.textContent = "Click the button to increase the count!";
clickCounterContainer.appendChild(para);

let button = document.createElement("button");
button.textContent = "Click Me!";
button.id = "incrementBtn";
button.classList.add("btn", "btn-primary", "p-2", "text-center");
clickCounterContainer.appendChild(button);
let number = 0;
localStorage.setItem("clickCount", number);

button.onclick = function() {

    number = number + 1;
    spanItem.textContent = number;
    localStorage.setItem("clickCount", number);



};
