let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';
let fromPara = document.getElementById('from');
let toPara = document.getElementById('to');
let greetText = document.getElementById('greetText');
let parsergreeting = JSON.parse(greeting);

fromPara.textContent = "From: " + parsergreeting.from;
toPara.textContent = "To: " + parsergreeting.to;
greetText.textContent = parsergreeting.greetText;
