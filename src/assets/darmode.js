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


