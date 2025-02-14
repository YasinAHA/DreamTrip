document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Detectar modo oscuro desde localStorage antes de cargar la página
        const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        }

        // Spinner - Simulación de carga de la página
        const showSpinner = async () => {
            document.getElementById("loadingSpinner").classList.remove("d-none");
        };

        const hideSpinner = async () => {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulación de carga
            document.getElementById("loadingSpinner").classList.add("d-none");
        };

        await showSpinner();
        await hideSpinner();

        console.log("Página completamente cargada");

        // Inicializar AOS (Animaciones)
        AOS.init({
            once: false,
            duration: 1000
        });

        // Inicializar tooltips y popovers de Bootstrap
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));
        document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new bootstrap.Popover(el));

        // Navbar: Reducir tamaño y cambiar color al hacer scroll
        const navbar = document.querySelector('#mainNav');
        const navbarShrink = () => {
            if (!navbar) return;
            navbar.classList.toggle('navbar-shrink', window.scrollY > 50);
        };

        navbarShrink();
        document.addEventListener('scroll', navbarShrink);

        // Activar ScrollSpy en el Navbar
        if (navbar) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                rootMargin: '0px 0px -40%',
            });
        }

        // Cerrar menú responsive al hacer clic en un enlace
        const navbarToggler = document.querySelector('.navbar-toggler');
        if (navbarToggler) {
            document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarToggler.click();
                    }
                });
            });
        }

        // Resaltar el enlace activo en el navbar con una línea inferior
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');

        const highlightActiveLink = () => {
            let scrollPos = window.scrollY + 200;
            sections.forEach(section => {
                if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                    navLinks.forEach(link => link.classList.remove('active-link'));
                    document.querySelector(`.nav-link[href="#${section.id}"]`)?.classList.add('active-link');
                }
            });
        };

        document.addEventListener('scroll', highlightActiveLink);
        highlightActiveLink();

        // Modo Oscuro con localStorage
        const darkModeToggle = document.querySelector('#darkModeToggle');
        const darkModeIcon = document.querySelector('#darkModeIcon');

        const enableDarkMode = () => {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
            darkModeIcon.classList.replace('bi-moon', 'bi-sun');
        };

        const disableDarkMode = () => {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
            darkModeIcon.classList.replace('bi-sun', 'bi-moon');
        };

        if (isDarkMode) {
            enableDarkMode();
        }

        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', () => {
                document.body.classList.contains('dark-mode') ? disableDarkMode() : enableDarkMode();
            });
        }

        // FUNCIONALIDAD DEL FORMULARIO DE CONTACTO
        const form = document.querySelector(".needs-validation");
        if (form) {
            form.addEventListener("submit", async (event) => {
                event.preventDefault(); // Evita que se recargue la página
                
                if (!form.checkValidity()) {
                    event.stopPropagation();
                    form.classList.add("was-validated"); // Muestra los errores de validación
                    return;
                }

                // Simular envío con delay
                const submitButton = form.querySelector("button[type='submit']");
                submitButton.disabled = true; // Desactiva el botón temporalmente
                submitButton.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...`;

                await new Promise(resolve => setTimeout(resolve, 2000)); // Simulación del envío

                // Mostrar modal de confirmación
                const modal = new bootstrap.Modal(document.getElementById("modalEnvio"));
                modal.show();

                // Resetear formulario
                form.reset();
                form.classList.remove("was-validated");

                // Restaurar botón
                submitButton.disabled = false;
                submitButton.innerHTML = `<i class="bi bi-send"></i> Enviar Mensaje`;
            });
        }

        
        // Actualizar el año en el footer automáticamente
        const yearElement = document.querySelector("#year");
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }

    } catch (error) {
        console.error("Error durante la carga de la página:", error);
        document.getElementById("loadingSpinner").classList.add("d-none"); // Asegurar que el spinner se oculta en caso de error
    }
});
