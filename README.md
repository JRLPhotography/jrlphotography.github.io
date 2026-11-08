# JRL Photography

Sitio multipágina desarrollado con React y Vite. Los componentes compartidos están en `src/main.jsx` y el contenido de las galerías en `src/data/galleries.json`; las páginas HTML de la raíz conservan las URL existentes.

## Desarrollo

- `npm install`: instala las dependencias.
- `npm run dev`: inicia el servidor local de Vite.
- `npm run build`: compila las ocho páginas en `dist/` y copia las fotografías.
- `npm run preview`: sirve localmente la compilación.

El workflow de GitHub Actions publica `dist/` en GitHub Pages al actualizar la rama `main`. En la configuración del repositorio, selecciona **GitHub Actions** como origen de publicación de Pages.
