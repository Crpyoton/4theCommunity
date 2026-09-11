document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const heroContainer = document.getElementById('heroContainer');
    const contentTitle = document.getElementById('content-title');
    const contentDesc = document.getElementById('content-desc');
    const extraContent = document.getElementById('dynamic-extra-content');
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    // Toggle mobile menu visibility
    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    if (navLinks.length && heroContainer && contentTitle && contentDesc) {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                // Update active link styling states
                navLinks.forEach(item => item.classList.remove('active'));
                link.classList.add('active');

                // Close mobile menu after clicking an option
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                }

                const selectedTheme = link.getAttribute('data-theme');
                const newTitle = link.getAttribute('data-title');
                const newDesc = link.getAttribute('data-desc');

                // Swap theme and background container
                heroContainer.className = `hero-container ${selectedTheme}`;

                // Reset animations
                contentTitle.style.animation = 'none';
                contentDesc.style.animation = 'none';
                extraContent.innerHTML = '';
                contentTitle.offsetHeight; 
                contentDesc.offsetHeight;

                contentTitle.style.animation = 'fadeIn 0.4s ease-in-out';
                contentDesc.style.animation = 'fadeIn 0.4s ease-in-out';

                contentTitle.textContent = newTitle;
                contentDesc.textContent = newDesc;

                // Add interactive product checklist box exclusively for Products & Services tab
                if (selectedTheme === 'theme-products') {
                    extraContent.innerHTML = `
                        <div class="checklist-box">
                            <label><input type="checkbox" checked> UI Kit Components</label>
                            <label><input type="checkbox"> Advanced Analytics Dashboard</label>
                            <label><input type="checkbox"> Custom Automation Scripts</label>
                            <label><input type="checkbox"> Priority Tech Support</label>
                        </div>
                    `;
                }
            });
        });
    }
});
    // Toggle mobile menu
    if (mobileMenu) {
        mobileMenu.addEventListener("click", () => {
            navList.classList.toggle("active");
        });
    }

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Remove active class from all links
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            // Change background theme
            const theme = link.getAttribute("data-theme");
            heroContainer.className = `hero-container ${theme}`;

            // Hide all content sections and show the targeted one
            sections.forEach(sec => sec.classList.remove("active"));
            
            const sectionName = theme.replace("theme-", "");
            const targetSection = document.getElementById(`section-${sectionName}`);
            if (targetSection) {
                targetSection.classList.add("active");
            }

            // Close mobile menu on click if open
            if (navList.classList.contains("active")) {
                navList.classList.remove("active");
            }
        });
    });
;