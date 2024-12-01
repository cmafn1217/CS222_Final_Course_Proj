const toggleButton = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");

toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    container.classList.toggle("sidebar-hidden");
});
