document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);
localStorage.theme = "light";
localStorage.theme = "dark";
localStorage.removeItem("theme");

const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleBtn = document.getElementById('theme-toggle');

// Verifica si el sistema está en modo oscuro
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Inicializa los íconos basándose en la preferencia del sistema
if (systemPrefersDark) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function () {
    // Alternar íconos
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // Alternar modo oscuro manualmente (sin usar localStorage)
    document.documentElement.classList.toggle('dark');
});



import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger,SplitText);

// the target can be selector text, an element, or an Array of elements
let split = SplitText.create(".split", { type: "words, chars", });

console.log(split.chars); // log the characters to the console  

// now animate the characters in a staggered fashion
gsap.from(split.words, {
  duration: 2, 
  opacity: 0, // animate from opacity: 0
  ease:"sine.out", // ease out effect
  stagger: 0.1
  , // 0.05 seconds between each
});