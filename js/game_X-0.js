const container = document.querySelector("js-content");
console.log(container);
let markup = '';

for (let i = 0; i < 9; i++) {
markup += `<div class = "item"></div>;`    
}

container.innerHTML = markup;