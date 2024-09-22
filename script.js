const envelopeElement = document.getElementById('envelope');

envelopeElement.addEventListener('click', () => {
  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  const heartElement = document.querySelector('.heart');
  const tulipElement = document.querySelector('.tulip');
  const messageElement = document.querySelector('.message');

  const isOpen = coverElement.classList.contains('open-cover');

  coverElement.classList.toggle('open-cover', !isOpen);
  heartElement.style.display = isOpen ? 'none' : 'block';
  
  setTimeout(() => {
    paperElement.classList.toggle('open-paper', !isOpen);
    tulipElement.classList.toggle('show-tulip', !isOpen);
  }, 500);
  setTimeout(() => {
    messageElement.classList.toggle('show-message', !isOpen);
  }, 2500)
});
