document.getElementById("contactBtn").addEventListener("click", function () {
    alert("rakib.hassan80@qmail.cuny.edu");
});

document.getElementById("confettiBtn").addEventListener("click", function() {

    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");

        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = Math.random() * window.innerHeight + "px";
        confetti.style.fontSize = "24px";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }

});
