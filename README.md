# Marco Antonio Vazquez Alonso - Personal Site

Sitio web estático personal y currículum interactivo.

## Características

- 100% Estático: Sin dependencias de Node.js, npm, yarn o procesadores SCSS.
- Estilos en CSS puro (Vanilla CSS).
- Carga dinámica de datos desde archivos JSON (`data/en.json`, `data/es.json`, `data/cover-letter.json`).
- Compatible con cualquier servidor web (Nginx, Apache, Caddy, GitHub Pages, etc.).

## Despliegue / Servir Localmente

Simplemente sirva el directorio raíz del proyecto con cualquier servidor de archivos estáticos:

```bash
# Ejemplo con Nginx o Apache: apuntar la raíz al directorio del proyecto

# O probar localmente con Python:
python3 -m http.server 8080
```