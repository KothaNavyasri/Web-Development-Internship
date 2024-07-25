// scripts.js

document.querySelectorAll('.background-upload').forEach(input => {
    input.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const targetSection = document.querySelector(input.dataset.target);
        if (file && targetSection) {
            const reader = new FileReader();
            reader.onload = function(e) {
                targetSection.style.backgroundImage = `url(${e.target.result})`;
            };
            reader.readAsDataURL(file);
        }
    });
});
