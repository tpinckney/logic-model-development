
function addItem() {
    const itemInput = document.getElementById("itemInput");
    const category = document.getElementById("categorySelect").value;
    const value = itemInput.value.trim();

    if (!value) return;

    const ul = document.getElementById(category);
    const li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);
    itemInput.value = "";
}
