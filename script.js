function revealSurprise() {
  document.querySelector(".surprise").classList.remove("hidden");

  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.4 }
  });

  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 180,
      angle: 90,
      origin: { y: 0.6 }
    });
  }, 800);

  const audio = document.getElementById('bg-music');

    // Try to play the music
    audio.play().then(() => {
      console.log("🎵 Music started");
    }).catch(err => {
      console.log("🚫 Autoplay blocked:", err);
    });

    // Do other surprise stuff here (optional)
    alert("🎉 Happy Birthday! 🎂🎈🎊");
}
