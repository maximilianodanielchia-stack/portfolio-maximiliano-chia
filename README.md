# Portfolio de Maximiliano Chia

Sitio estático, responsive y gratuito. No requiere base de datos, hosting pago ni dependencias externas.

## Vista local

Desde la raíz del repositorio:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

El portfolio tiene un formato de página continua: los siete proyectos, sus imágenes, videos y presentación se muestran dentro de la misma página, sin ventanas emergentes ni enlaces externos a los casos. Viajemos con Maxi tiene la misma jerarquía visual que los demás proyectos.

## Publicarlo gratis con GitHub Pages

1. Crear una cuenta gratuita en GitHub.
2. Crear un repositorio público, por ejemplo `portfolio`.
3. Subir todo el contenido de esta carpeta a la raíz del repositorio.
4. Entrar en **Settings → Pages**.
5. En **Build and deployment**, seleccionar **Deploy from a branch**.
6. Elegir la rama `main` y la carpeta `/root`.
7. Guardar. GitHub mostrará la URL pública en unos minutos.

La dirección tendrá un formato similar a:

`https://TU-USUARIO.github.io/portfolio/`

## Actualizar contenidos

- Textos: editar `index.html`.
- Colores y diseño: editar `styles.css`.
- Proyectos, galerías y reproductores: editar los artículos de la sección `proyectos` en `index.html`.
- Tema, menú móvil y animaciones: editar `script.js`.
- Imágenes: reemplazar archivos dentro de `assets/img` manteniendo el mismo nombre.
- CV: reemplazar `assets/docs/CV-Maximiliano-Chia.pdf`.

## Videos

Los videos de Pristine Luxury Camps y Posada Puerto Bemberg están integrados en sus proyectos con reproductores de YouTube de carga diferida. La presentación de Folder IT también se muestra dentro de su sección. Estos contenidos requieren acceso a los servicios externos; el texto y las imágenes del portfolio son locales.

## Enlaces incluidos

- Email: maximilianodanielchia@gmail.com
Actualización del portfolio.
