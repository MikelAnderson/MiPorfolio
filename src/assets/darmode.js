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


//GSAP Animation
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import SocialPill from "../components/icons/SocialPill.astro";

gsap.registerPlugin(ScrollTrigger,SplitText);

let split = SplitText.create(".split", { type: "words, chars", });

gsap.from(split.words, {
  y: 20,
  filter: "blur(10px)",
  autoAlpha: 0,
  stagger: 0.05,
});

gsap.from(".social", {
  y: 20,
  autoAlpha: 0, 
filter: "blur(10px)",
  stagger: 0.05,
  delay: 0.5,});
  
gsap.from(".badge", {
  y: 20,
  autoAlpha: 0,
  filter: "blur(10px)",
delay: 1,
})  

gsap.from(".header ",{
  transform: "scale(0.1)",
  autoAlpha: 0,
  filter: "blur(10px)",
})

gsap.from("img",{
  transform: "scale(0.5)",
  autoAlpha: 0,
  filter: "blur(10px)",
})
