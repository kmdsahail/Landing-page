let dayNight = document.querySelector(".day-night");
let banner = document.querySelector(".banner");

dayNight.addEventListener("click", () => {
  banner.classList.toggle("night");
});

let typingFx = new Typed("#text", {
  strings: ["Tobi", "Anime Lover", "Coder"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
});
