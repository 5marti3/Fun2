/*
setTimeout (wakeUpUser, 50000);
function wakeUpUser(){
    alert("Are you going to stare at this boring page forever?");
}
/*
var name = "Joe";
var i = 0 ;
while (i < 2){
    document.write("Happy Birthday to you.<br>");
    i++;
}
document.write("Happy Birthday dear " + name + ", <br>");
document.write("Happy Birthday to you.<br>");



var num = 99 ;

while (num > 0 ){
    console.log(num + " bottles of beer on the wall,");
    console.log(num + " bottles of beer,");
    console.log("Take one down, pass it around,");
    num--;
}


console.log("No more bottles of beer on the wall");

let heading = document.querySelector("h1");
let myButton = document.querySelector("button");

function changeText() {
  let text = prompt("Your message: ");
  localStorage.setItem("text", text);
  heading.textContent = "Hallo, " + text;
}

if (!localStorage.getItem("text")) {
  changeText();
} else {
  let storedText = localStorage.getItem("text");
  heading.textContent = "Hallo, " + storedText;
}

myButton.onclick = function() {
  changeText();
};
*/

// Changes style of h1 heading when clicked

function changeH1() {
  const h1 = document.querySelector("h1");
  h1.textContent = "Javascript is cool";
  h1.style.color = "black";
  h1.style.textDecoration;
}

// Changes image when clicked (repeatable)

function changeImg() {
  let myImage = document.querySelector("img");
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Download2.png") {
    myImage.setAttribute("src", "images/Download.png");
  } else {
    myImage.setAttribute("src", "images/Download2.png");
  }
}

// Countdown and prompt for name (only alerts :/)

function countdown(n, m) {
  for (i = 0; i < n; i++) {
    alert(JSON.stringify(m));
    m--;
  }
}

function magicButton() {
  countdown(3, 3);

  let myText = prompt("Wie ist dein Name?");

  alert("Moin " + myText);
}

// Width of body changes

function bodyWidth() {
  let body = document.querySelector("body");
  if (body.style.width === "1000px") {
    body.style.width = "96%";
  } else {
    body.style.width = "1000px";
  }
}

// Creates a paragraph with text

function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'Magic!';
  document.body.appendChild(para);
}





