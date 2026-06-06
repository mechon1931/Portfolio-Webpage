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

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('theme-toggle');
    icon.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
});

updateDate();
updateGreeting();