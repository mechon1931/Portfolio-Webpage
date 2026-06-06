const themeToggle =document.getElementById('theme-toggle')

function setTheme(mode) {
    if(mode === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌞';
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.textContent = '🌙';
    }

    localStorage.setItem('theme', mode);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('dark');
    }
}

function updateDate() {
    const dateEl = document.getElementById('current-date');
    const now = new Date();
    const options = { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
    };
    dateEl.textContent = now.toLocaleDateString('en-US', options);
}

function updateGreeting() {
    const greetingEl = document.getElementById('greeting');
    const hour = new Date().getHours();

    if (hour < 12) {
        greetingEl.textContent = 'Good Morning!';
    } else if (hour < 17) {
        greetingEl.textContent = 'Good Afternoon!';
    } else {
        greetingEl.textContent = 'Good Evening!';
    }
}



themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-mode');
    setTheme(isLight ? 'dark' : 'light');
});

updateDate();
updateGreeting();
loadTheme();
