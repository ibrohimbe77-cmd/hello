const openBtn = document.querySelector('#openBtn');
const message = document.querySelector('#message');
const heartsLayer = document.querySelector('.hearts');


openBtn.addEventListener('click', () => {
  message.hidden = false;
  openBtn.textContent = 'Улыбнись 😊';
  openBtn.disabled = true;
  for (let i = 0; i < 16; i++) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = ['💗', '💖', '💕', '✨'][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 3) + 's';
    heart.style.fontSize = (14 + Math.random() * 18) + 'px';
    heartsLayer.appendChild(heart);
    heart.addEventListener('animationend', () => heart.remove());
  }
});
