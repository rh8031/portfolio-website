// Display contact information when the Contact button is clicked
document.getElementById("contactBtn").addEventListener("click", function () {
    alert("rakib.hassan80@qmail.cuny.edu");
});

// Create a simple confetti effect when the Celebrate button is clicked
document.getElementById("confettiBtn").addEventListener("click", function() {

    // Generate 50 confetti emojis
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");

        confetti.innerHTML = "🎉";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = Math.random() * window.innerHeight + "px";
        confetti.style.fontSize = "24px";

        // Add confetti to the page
        document.body.appendChild(confetti);

        // Remove confetti after 2 seconds
        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }

});
