// Landing sea scroll animation
window.addEventListener("scroll", () => {
  const sea = document.querySelector(".sea");
  const scrollY = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollY / docHeight;
  sea.style.height = `${50 + scrollPercent * 50}%`;
});

// Smooth scroll from Explore
document.getElementById("scroll-btn").addEventListener("click", () => {
  document.getElementById("info").scrollIntoView({ behavior: "smooth" });
});

// Carousel functionality
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let index = 0;

function updateCarousel(i) {
  track.style.transform = `translateX(-${i * 100}%)`;
}
nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateCarousel(index);
});
prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel(index);
});

// Water rise demo
const yearRange = document.getElementById("yearRange");
const yearLabel = document.getElementById("yearLabel");
const demoWater = document.querySelector(".demo-water");
const townInput = document.getElementById("townInput");
const townName = document.getElementById("townName");

yearRange.addEventListener("input", (e) => {
  const year = parseInt(e.target.value);
  yearLabel.textContent = year;
  
  // Rising water simulation — linear increase
  const progress = (year - 2025) / (2100 - 2025);
  const newHeight = 10 + progress * 60;
  demoWater.style.height = `${newHeight}%`;
});

townInput.addEventListener("input", (e) => {
  const inputTown = e.target.value.trim();
  townName.textContent = inputTown ? inputTown : "Fremantle";
});

// --- Audio Toggle Logic ---
const audio = document.getElementById("background-audio");
const audioToggle = document.getElementById("audio-toggle");
let isPlaying = false;

audioToggle.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    audioToggle.textContent = "🔊";
  } else {
    audio.pause();
    audioToggle.textContent = "🔇";
  }
  isPlaying = !isPlaying;
});
