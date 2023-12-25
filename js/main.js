// ********** Sidebar Toggler **********
const sidebarToggler = () => {
    const sidebar = document.querySelector("nav .sidebar");
    
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("toggler")) {
            sidebar.classList.toggle("-translate-x-[100%]");
        } else {
            sidebar.classList.add("-translate-x-[100%]");
        }
    });
};
sidebarToggler();
