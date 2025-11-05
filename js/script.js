const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark"    );

    // switch icon
    if (body.classList.contains('dark')) {
        toggleButton.textContent = '☀️'; 
        // Sun icon for light mode
    } else {
        toggleButton.textContent = '🌙';
         // Moon icon for dark mode
    }

    
});