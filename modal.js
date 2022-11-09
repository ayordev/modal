
      const container = document.getElementById('container');
      const toggleButton = document.getElementById('toggle-button');
      const modal = document.getElementById('modal-box');
      const closeButton = document.getElementById('close');
      const saveButton = document.getElementById('save-changes');

      function toggleModal() {
        modal.style.display = 'block';
        document.body.style.backgroundColor = 'rgba(108, 105, 105, 0.212)';
      }

      function applyClose(e) {
        console.log(e.target);
      }
      function closeModal() {
        modal.style.display = 'none';
        document.body.style.backgroundColor = 'transparent';
      }

      window.addEventListener('click', (e) => {
        if (e.target.classList.contains('container')) {
          closeModal();
        }
      });
      modal.addEventListener('click', closeModal);
      saveButton.addEventListener('click', closeModal);
      closeButton.addEventListener('click', closeModal);
      toggleButton.addEventListener('click', toggleModal);
   
