
// Function to open the modal
function openModal(src) {
  const modal = document.getElementById('myModal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = "block";
  modalImage.src = src;
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = "none";
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {  // Verifica se a tecla pressionada é 'Esc'
      closeModal();  // Chama a função closeModal para fechar o modal
  }
});
