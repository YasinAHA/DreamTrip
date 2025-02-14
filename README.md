# 🌍 Yasinaha DreamTrip

Bienvenido a **Yasinaha DreamTrip**, un sitio web diseñado para inspirar y facilitar la planificación de viajes. Desarrollado con **Bootstrap**, **AOS**, y **SASS**, ofrece una interfaz moderna, adaptable y dinámica.

## 📁 Estructura del Proyecto

```
├── README.md
├── package.json
├── public/
│   ├── index.html
│   ├── assets/
│   │   └── img/
│   │       ├── hero-bg-dark.webp
│   │       ├── hero-bg.webp
│   │       ├── newyork.webp
│   │       ├── paris.webp
│   │       ├── testimonials-1.webp
│   │       ├── testimonials-2.webp
│   │       ├── testimonials-3.webp
│   │       ├── testimonials-4.webp
│   │       ├── testimonials-5.webp
│   │       ├── testimonials-6.webp
│   │       └── tokyo.webp
│   └── css/
│       └── style.css
└── src/
    ├── js/
    │   └── main.js
    └── scss/
        ├── _contacto.scss
        ├── _destinos.scss
        ├── _footer.scss
        ├── _global.scss
        ├── _hero.scss
        ├── _modal.scss
        ├── _navbar.scss
        ├── _services.scss
        ├── _spinner.scss
        ├── _testimonios.scss
        ├── _variables.scss
        └── main.scss
```

## 🚀 Tecnologías Utilizadas

- **HTML5** - Estructura semántica del sitio.
- **CSS3 / SASS** - Diseño adaptable y estilos optimizados.
- **Bootstrap 5** - Framework de diseño responsivo.
- **Bootstrap Icons** - Iconografía moderna y ligera.
- **AOS (Animate On Scroll)** - Animaciones al hacer scroll.
- **JavaScript (ES6+)** - Interactividad y funcionalidades dinámicas.

## 🔧 Instalación y Uso

### 1️⃣ Clonar el repositorio
```sh
$ git clone https://github.com/tu-usuario/yasinaha-dreamtrip.git
$ cd yasinaha-dreamtrip
```

### 2️⃣ Instalar dependencias
```sh
$ npm install
```

### 3️⃣ Compilar SASS automáticamente
```sh
$ npm run sass
```

### 4️⃣ Abrir en el navegador
Simplemente abre `public/index.html` en tu navegador favorito.

## 🛠 Scripts Disponibles

```json
"scripts": {
  "sass": "sass --watch src/scss/main.scss public/css/style.css",
  "clean": "rm -rf public/css/*.css",
  "start": "live-server public"
}
```

- **`npm run sass`** → Observa y compila los archivos SASS en tiempo real.
- **`npm run clean`** → Elimina los archivos CSS compilados.
- **`npm run start`** → Inicia un servidor local para probar la web en vivo.

## 🎨 Personalización

Puedes modificar los estilos globales en `src/scss/_variables.scss` y personalizar la paleta de colores, fuentes y más.

## 📄 Licencia

Este proyecto está bajo la licencia **ISC**.

---

✉️ **Contacto:** Si tienes preguntas o sugerencias, no dudes en escribir a [tu.email@example.com](mailto:email@example.com). ¡Feliz viaje! 🌎✈️

