/* =====================================================
   MENU MOBILE
===================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            nav.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/* =====================================================
   FERMETURE DU MENU APRÈS CLIC
===================================================== */

document
    .querySelectorAll(".nav a")
    .forEach(link => {

        link.addEventListener("click", () => {

            nav?.classList.remove("open");

            menuToggle?.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


/* =====================================================
   ANIMATION DES ÉLÉMENTS AU SCROLL
===================================================== */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "visible"
                );

                observer.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold: 0.12
    }

);


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* =====================================================
   ANNÉE AUTOMATIQUE DU FOOTER
===================================================== */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =====================================================
   SCROLL FLUIDE
===================================================== */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", event => {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });