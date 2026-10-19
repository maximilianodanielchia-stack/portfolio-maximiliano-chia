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

Los videos de Pristine Luxury Camps y Posada Puerto Bemberg usan portadas locales y crean el reproductor de YouTube únicamente al tocar «play». La presentación de Folder IT también se carga dentro de su sección al seleccionarla. Recorrer el portfolio no inicia solicitudes a YouTube ni a Google Slides. La reproducción requiere JavaScript y acceso a esos servicios; el texto y las imágenes del portfolio son locales.

El diseño usa fuentes del sistema, acentos de color por proyecto y detalles gráficos hechos con CSS. Las imágenes del portfolio conservan sus proporciones y se cargan a medida que se recorre la página. Las animaciones son breves y respetan la preferencia de movimiento reducido del navegador.

## Enlaces incluidos

- Email: maximilianodanielchia@gmail.com
Actualización del portfolio.
