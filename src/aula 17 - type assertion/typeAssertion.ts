// quando tiver a certeza de que algum elemento da DOM existe, é comum utilizar o type assertion.
const body = document.querySelector("body") as HTMLBodyElement;
body.style.background = "blue";

// quando não tiver a certeza, basta criar uma condicional.
const h1 = document.querySelector("h1");
if (h1 !== null) h1.style.color = "red";
