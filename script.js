
function addItem() {
    const input = document.getElementById("itemInput");
    const category = document.getElementById("category").value;
    const column = document.getElementById(category);
    const box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `${input.value} <button onclick="this.parentElement.remove()">x</button>`;
    column.appendChild(box);
    input.value = "";
}

function clearAll() {
    ["inputs", "activities", "outputs", "shortTerm", "mediumTerm", "longTerm"].forEach(id => {
        document.getElementById(id).innerHTML = `<h3>${document.getElementById(id).querySelector("h3").textContent}</h3>`;
    });
}

function downloadExcel() {
    alert("Excel download feature to be implemented.");
}

function downloadPDF() {
    alert("PDF download feature to be implemented.");
}

function downloadImage() {
    alert("Image download feature to be implemented.");
}
