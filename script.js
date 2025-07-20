function addItem() {
  const item = document.getElementById("itemInput").value;
  const category = document.getElementById("categorySelect").value;
  if (item && category) {
    const list = document.getElementById(category).querySelector("ul");
    const li = document.createElement("li");
    li.textContent = item;
    const delBtn = document.createElement("button");
    delBtn.textContent = "×";
    delBtn.onclick = () => li.remove();
    li.appendChild(delBtn);
    list.appendChild(li);
    document.getElementById("itemInput").value = "";
  }
}

function clearAll() {
  document.querySelectorAll(".category ul").forEach(ul => ul.innerHTML = "");
}

function exportExcel() {
  alert("Excel export coming soon.");
}

function exportPDF() {
  alert("PDF export coming soon.");
}

function downloadImage() {
  alert("Image download coming soon.");
}
