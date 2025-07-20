
function addItem() {
  const input = document.getElementById('itemInput');
  const category = document.getElementById('categorySelect').value;
  const text = input.value.trim();
  if (!text) return;
  const div = document.createElement('div');
  div.className = 'item';
  div.textContent = text;
  document.getElementById(category).appendChild(div);
  input.value = '';
}

document.getElementById('addButton').addEventListener('click', addItem);

document.getElementById('clearButton').addEventListener('click', () => {
  ['Inputs', 'Activities', 'Outputs', 'Short-Term Outcomes', 'Medium-Term Outcomes', 'Long-Term Outcomes']
    .forEach(id => document.getElementById(id).innerHTML = `<h2>${id}</h2>`);
});

document.getElementById('exportExcel').addEventListener('click', () => {
  alert('Excel export feature coming soon!');
});

document.getElementById('exportPDF').addEventListener('click', () => {
  alert('PDF export feature coming soon!');
});

document.getElementById('exportImage').addEventListener('click', () => {
  alert('Image download feature coming soon!');
});
