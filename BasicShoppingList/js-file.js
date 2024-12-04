const container = document.querySelector("body");

const content = document.createElement("p");
const header3 = document.createElement("h3");
const div = document.createElement("div");
content.textContent = "Hello!";
content.style.color = "red"
header3.textContent = " I'm a blue h3!"
header3.style.color = "blue";
div.setAttribute("style", "border: solid black; background-color: pink;");
container.append(content, header3, div);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
const p = document.createElement("p");
p.textContent = "Me TOO!";
div.append(h1, p);