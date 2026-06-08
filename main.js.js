// ========================================
// WELLCARE ORTHOPEDIC & TRAUMA CENTRE
// MAIN JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    initializeMobileMenu();
    initializeStickyHeader();
    initializeScrollAnimations();
    initializeCounters();
    initializeAppointmentModal();
    initializePageTransitions();
    initializeActiveNavigation();

});

// ========================================
// MOBILE MENU
// ========================================

function initializeMobileMenu() {

    const menuBtn = document.querySelector(".mobile-menu-btn");
    const navbar = document.querySelector(".navbar");

    if (!menuBtn || !navbar) return;

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("mobile-active");

        menuBtn.innerHTML =
            navbar.classList.contains("mobile-active")
                ? "✕"
                : "☰";
    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("mobile-active");
            menuBtn.innerHTML = "☰";

        });

    });

}

// ========================================
// STICKY HEADER EFFECT
// ========================================

function initializeStickyHeader() {

    const header = document.querySelector(".header");

    if (!header) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("header-scrolled");

        } else {

            header.classList.remove("header-scrolled");

        }

    });

}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initializeScrollAnimations() {

    const elements = document.querySelectorAll(
        ".service-card, .about-card, .feature-card, .testimonial-card, .insurance-item"
    );

    elements.forEach(el => {

        el.classList.add("fade-in");

    });

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    elements.forEach(el => observer.observe(el));

}

// ========================================
// COUNTER ANIMATIONS
// ========================================

function initializeCounters() {

    const counters = document.querySelectorAll("[data-counter]");

    if (!counters.length) return;

    const counterObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target = parseInt(
                    counter.getAttribute("data-counter")
                );

                let current = 0;

                const increment = target / 100;

                const timer = setInterval(() => {

                    current += increment;

                    if (current >= target) {

                        counter.textContent =
                            target.toLocaleString();

                        clearInterval(timer);

                    } else {

                        counter.textContent =
                            Math.floor(current).toLocaleString();

                    }

                }, 20);

                counterObserver.unobserve(counter);

            });

        },

        {
            threshold: 0.5
        }

    );

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

}

// ========================================
// APPOINTMENT MODAL
// ========================================

function initializeAppointmentModal() {

    const openButtons = document.querySelectorAll(
        ".open-appointment-modal"
    );

    const modal = document.querySelector("#appointmentModal");

    const closeBtn = document.querySelector(
        ".close-appointment-modal"
    );

    if (!modal) return;

    openButtons.forEach(button => {

        button.addEventListener("click", e => {

            e.preventDefault();

            modal.classList.add("show-modal");

            document.body.style.overflow = "hidden";

        });

    });

    if (closeBtn) {

        closeBtn.addEventListener("click", () => {

            modal.classList.remove("show-modal");

            document.body.style.overflow = "auto";

        });

    }

    window.addEventListener("click", e => {

        if (e.target === modal) {

            modal.classList.remove("show-modal");

            document.body.style.overflow = "auto";

        }

    });

}

// ========================================
// PAGE TRANSITIONS
// ========================================

function initializePageTransitions() {

    document.body.classList.add("page-loaded");

    const links = document.querySelectorAll(
        'a[href$=".html"]'
    );

    links.forEach(link => {

        link.addEventListener("click", function(e) {

            const href = this.getAttribute("href");

            if (!href) return;

            e.preventDefault();

            document.body.classList.add("page-exit");

            setTimeout(() => {

                window.location.href = href;

            }, 300);

        });

    });

}

// ========================================
// ACTIVE NAVIGATION
// ========================================

function initializeActiveNavigation() {

    const currentPage = window.location.pathname
        .split("/")
        .pop();

    const navLinks =
        document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (
            href === currentPage ||
            (currentPage === "" &&
                href === "index.html")
        ) {

            link.classList.add("active");

        }

    });

}

// ========================================
// SMOOTH SCROLL FOR ANCHORS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});

// ========================================
// BACK TO TOP BUTTON
// ========================================

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.className = "back-to-top";

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show-top");

    } else {

        backToTop.classList.remove("show-top");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ========================================
// CONTACT FORM
// ========================================

const contactForm =
    document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", e => {

        e.preventDefault();

        alert(
            "Thank you. Your inquiry has been received. We will contact you shortly."
        );

        contactForm.reset();

    });

}

// ========================================
// APPOINTMENT FORM
// ========================================

const appointmentForm =
    document.querySelector("#appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", e => {

        e.preventDefault();

        alert(
            "Appointment request submitted successfully."
        );

        appointmentForm.reset();

    });

}