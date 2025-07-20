
function addItem() {
  const itemInput = document.getElementById('itemInput');
  const category = document.getElementById('categorySelect').value;
  const box = document.getElementById(category);

  if (itemInput.value.trim() !== '') {
    const div = document.createElement('div');
    div.textContent = itemInput.value;
    box.appendChild(div);
    itemInput.value = '';
  }
}

function clearAll() {
  ['inputs', 'activities', 'outputs', 'shortTerm', 'mediumTerm', 'longTerm'].forEach(id => {
    const box = document.getElementById(id);
    while (box.children.length > 1) {
      box.removeChild(box.lastChild);
    }
  });
}

function exportToExcel() {
  alert('Excel export functionality coming soon!');
}

function exportToPDF() {
  alert('PDF export functionality coming soon!');
}

function exportToImage() {
  alert('Image download functionality coming soon!');
}
