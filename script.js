let containerEl = document.querySelector(".container");

for (let index = 0; index < 6; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
    
}