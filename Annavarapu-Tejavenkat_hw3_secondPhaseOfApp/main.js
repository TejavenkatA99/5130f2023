// Toggle mobile menu
document.getElementById('nav-toggle').addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});

// Add scroll behavior to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Function to toggle between light and dark mode
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
}

// Event listener for the dark mode toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);
function uploadFile() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
     
    if (file) {
       var formData = new FormData();
       formData.append('file', file);
   
       var xhr = new XMLHttpRequest();
       xhr.open('POST', '/upload', true);
       xhr.onload = function () {
         if (xhr.status === 200) {
           alert('File uploaded successfully');
         } else {
           alert('Failed to upload file');
         }
       };
       xhr.send(formData);
    } else {
       alert('Please select a file');
    }
   }

