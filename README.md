# MELI-CLON

Este proyecto es un ejercicio de front-end desarrollado colaborativamente con el fin de mejorar las habilidades de los participantes, principalmente en React, como parte de la acelaración adelantada en [Alkemy](https://www.alkemy.org/) durante un periodo de 7 semanas.

La aplicación es un clon de la web de [Mercado Libre](https://www.mercadolibre.com.co/), para lo que cual se ha utilizado la [API](https://developers.mercadolibre.com.ar/) provista por la empresa.

Las principales funciones de aplicación son:

- Registro y autenticación de usuarios.
- Busqueda de artículos.
- Vista con los resultados de la búsqueda.
- Detalle del artículo.
- Agregar artículos al carrito.
- Realizar checkout.

---

## Cómo ejecutar la aplicación

Si quieres ejecutar esta aplicación localmente puedes clonar el repo y seguir los comandos a continuación:

```
npm i
npm run
```

Adicionalmente deberás configurar un proyecto de firebase para autenticación y guardar las variables de entorno en un archivo .env en la raíz del proyecto.

## Estructura de archivos

El código está organizado de la siguiente manera:

- assets: Imágenes, logos y fuentes.
- components: Componentes genéricos globales.
- layouts: Componentes base para las vistas.
- services: Peticiones externas a la aplicación.
- stores: Archivos para el manejo de estados globales.
- views: Componentes principales para las vistas.

```
src/
┣ assets/
┃ ┣ fonts/
┃ ┗ images/
┣ components/
┃ ┣ CartBtnMobile/
┃ ┣ CustomInput/
┃ ┣ FreeShipping/
┃ ┣ Fulfillment/
┃ ┣ MinimalFooter/
┃ ┣ MinimalHeader/
┃ ┣ PageNotFound/
┃ ┣ ProtectedRoutes/
┃ ┗ PurchaseDiscount/
┣ hooks/
┃ ┗ useWindowSize/
┣ layout/
┃ ┣ components/
┃ ┣ Footer/
┃ ┣ HamburgerMenu/
┃ ┣ Header/
┃ ┣ MainLayout/
┃ ┗ MinimalLayout/
┣ services/
┃ ┣ categories/
┃ ┣ category/
┃ ┣ details/
┃ ┣ products/
┃ ┗ firebase.ts
┣ store/
┃ ┣ cart/
┃ ┣ checkout/
┃ ┣ summary/
┃ ┣ user/
┃ ┣ hooks.ts
┃ ┗ store.ts
┣ test/
┃ ┗ setup.ts
┣ utils/
┃ ┣ helpers/
┃ ┗ sass/
┣ views/
┃ ┣ Cart/
┃ ┣ Checkout/
┃ ┣ Home/
┃ ┣ Login/
┃ ┣ ProductDetails/
┃ ┣ Register/
┃ ┗ SearchResults/
┣ App.tsx
┣ main.scss
┣ main.tsx
┣ types.d.ts
┗ vite-env.d.ts
```

## Workflow y herramientas

**[Vite](https://vitejs.dev/)**: fue la herramienta escogida para el servidor de desarrollo.

**[Formik](https://formik.org/)**: se utilizó esta librería para facilitar el manejo de los formularios.

**[Yup](https://github.com/jquense/yup)**: se utilizó esta librería para la validación de formularios.

**[Redux Toolkit](https://redux-toolkit.js.org/)**: Redux Toolkit para el manejo del state global.

**[sweetAlert2](https://sweetalert2.github.io/)**: sweetAlert se utilizó para facilitar la creación de alertas tipo pop-up durante la validación de formulario de login.

**[Sass](https://sass-lang.com/)**: Sass como preprocesador CSS.
