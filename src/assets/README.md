<!--
¿Qué cosas se pueden agregar aquí (src/assets/)?

Recursos estáticos y multimedia que son procesados, optimizados y empaquetados por Astro/Vite:
1. Imágenes en formatos modernos (PNG, JPG, WebP, AVIF) para usarse con el componente `<Image />` o `<Picture />` de Astro:
   import miFoto from '../assets/avatar.jpg';
   <Image src={miFoto} alt="Avatar" width={200} height={200} />
2. Iconos vectoriales y logos en SVG que requieran manipulación o empaquetado directo.
3. Fuentes tipográficas locales (.woff2, .woff, .ttf) vinculadas en los estilos globales.
4. Archivos descargables locales (PDFs de presentación, guías, manuales).
5. Ilustraciones o diagramas estáticos procesados en tiempo de compilación para generar versiones responsivas.
-->

# Carpeta de Assets (`src/assets`)

Esta carpeta almacena recursos estáticos que pasan por el pipeline de optimización de imágenes de Astro y Vite.
A diferencia de la carpeta `public/` (que se sirve sin procesar), los archivos aquí:
- Se procesan con hashing de nombres para cacheo a largo plazo.
- Se comprimen y redimensionan automáticamente mediante `astro:assets`.
