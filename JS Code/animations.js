document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-sidebar");
    const sidebar = document.querySelector(".sidebar");

    toggleButton.addEventListener("click", () => {
        sidebar.classList.toggle("hidden");
    });
});