document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    yesBtn.addEventListener("click", function () {
        // Redirigir a una página con un mensaje lindo
        window.location.href = "mensaje-lindo.html";
    });

    noBtn.addEventListener("click", function () {
        // Mover el botón "No" a una posición aleatoria en la pantalla
        const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = "absolute";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });
});
