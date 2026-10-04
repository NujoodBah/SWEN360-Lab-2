// Mission Control Checklist logic
const checkboxes = document.querySelectorAll('#checklist input');
const message = document.getElementById('launch-message');
function allChecked() {
  return Array.from(checkboxes).every(box => box.checked);
}
function updateMessage() {
  if (allChecked()) {
    message.textContent = 'YOU ARE READY FOR LAUNCH 🚀';
  } else {
    message.textContent = '';
  }
}

checkboxes.forEach(box => box.addEventListener('change', updateMessage));
