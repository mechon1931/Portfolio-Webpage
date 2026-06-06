// Theme Toggle with proper Light/Dark Mode 
const themeToggle =document.getElementById('theme-toggle')

function setTheme(mode) {
    if(mode === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌞'; // Sun for light mode
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.textContent = '🌙'; // Moon for Dark mode
    }
    // Save the user's preference in localStorage
    localStorage.setItem('theme', mode);
}
// Load the saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to dark mode if no preference is saved
        setTheme('dark');
    }
}

// Date and Greeting Update
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

// Update greeting based on time of day
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

// Initialize the page
updateDate();
updateGreeting();
loadTheme();
