const btnChangeTheme = document.querySelector('#change-theme');

function toggleDark() {
    document.body.classList.toggle('dark')
}

function loadTheme() {
    const darkMode = localStorage.getItem('dark');

    if(darkMode) {
        toggleDark();
    }
};

loadTheme();

btnChangeTheme.addEventListener('change', () => {
    toggleDark();
    
    localStorage.removeItem('dark');

    if(document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1);
    }
});
