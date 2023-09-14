// Get a reference to the overlay menu content
const overlayMenuContent = document.querySelector('.overlay-menu-content');

// Add a click event listener to the overlay menu content
overlayMenuContent.addEventListener('click', (event) => {
    console.log('triggered submenu');
    const target = event.target;

    // Check if the clicked element has a data-toggle-submenu attribute
    const submenuId = target.getAttribute('data-toggle-submenu');
    if (submenuId) {
        const submenu = document.querySelector(submenuId);

        // Toggle the visibility of the submenu
        submenu.classList.toggle('active');

        // Hide other open submenus
        const otherSubmenus = overlayMenuContent.querySelectorAll('.submenu');
        otherSubmenus.forEach((otherSubmenu) => {
            if (otherSubmenu !== submenu) {
                otherSubmenu.classList.remove('active');
            }
        });
    } else {
        // Close the overlay menu when a menu item is clicked (not a submenu)
        const overlayMenu = document.getElementById('overlay-menu');
        overlayMenu.style.display = 'none';
    }
});
