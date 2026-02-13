function checkPassword() {
  const correctPassword = "bebi";
  const userInput = document.getElementById("passwordInput").value;

  if (userInput === correctPassword) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("mainWebsite").style.display = "block";
    document.getElementById("musicFrame").src += "&autoplay=1";
  } else {
    document.getElementById("errorMsg").innerText = "Wrong password 💔";
  }
}

function showSection(sectionId) {
  document.getElementById("menu").style.display = "none";

  document.querySelectorAll(".section").forEach(section => {
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";
}

function openLetter() {
  document.getElementById("envelope").classList.add("open");
}

function backToMenu() {
  document.querySelectorAll(".section").forEach(section => {
    section.style.display = "none";
  });

  document.getElementById("menu").style.display = "block";

  const envelope = document.getElementById("envelope");
  if (envelope) {
    envelope.classList.remove("open");
  }
}