document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
});

function createFloatingHearts() {
    const container = document.getElementById('hearts');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 7000);
    }, 300);
}