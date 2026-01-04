
const sections = document.querySelectorAll(".section");
const progressBar = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < trigger) {
      section.classList.add("show");
    }
  });

  /* Scroll Progress */
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / height) * 100;
  progressBar.style.width = progress + "%";
});


/* ================= CURSOR GLOW ================= */
const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});


/* ================= PROJECT TABS ================= */
function showProjects(type) {
  document.querySelectorAll(".project-group").forEach(group => {
    group.classList.remove("active");
  });

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  document.getElementById(type).classList.add("active");
  event.target.classList.add("active");
}


/* ================= TYPING EFFECT ================= */

const roles = [
  "Data Analyst",
  "Frontend Developer"
];

let roleIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-role");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 1500);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typingElement.textContent =
      roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 400);
  }
}


typeRole();
