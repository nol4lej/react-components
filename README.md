# Plantilla de componentes React con TypeScript, Vite, y TailwindCSS

Esta es una plantilla con componentes para proyectos de React con TypeScript, utilizando Vite como herramienta de compilación. La plantilla incluye configuraciones para utilizar alias de Vite en las rutas, y tiene instalado TailwindCSS con Autoprefixer y PostCSS.

## Dependencias Utilizadas

- **React**: Librería para construir interfaces de usuario.
- **TypeScript**: Un superset de JavaScript que añade tipado estático.
- **Vite**: Una herramienta de desarrollo rápida y ligera.
- **TailwindCSS**: Un framework de CSS utilitario para diseño rápido.
- **Autoprefixer**: Un plugin de PostCSS para añadir prefijos CSS automáticamente.
- **PostCSS**: Una herramienta para transformar CSS con JavaScript.
- **@types/node**: Proporciona definiciones de tipos para Node.js, permitiendo que TypeScript entienda las APIs y módulos de Node.js. Estas definiciones incluyen tipos para funciones y objetos como process, Buffer, fs (sistema de archivos), y más. En este caso para utilizar `path` y `__dirname`.

## Requisitos

Antes de comenzar, asegúrate de tener instalado Node.js y npm en tu sistema.

## Instalación

1. **Clona el repositorio:**
  ```sh
   git clone https://github.com/nol4lej/react-components.git
  ```

2. **Navega al directorio del proyecto:**
  ```sh
  cd tu-repositorio
  ```

3. **Instala las dependencias:**
  ```sh
  npm install
  ```

4. **Usar en desarrollo:**
  ```sh
  npm run dev
  ```

## Alias de Vite

La plantilla incluye la configuración de alias de Vite para simplificar las rutas en las importaciones. Los alias están definidos en los archivos `vite.config.ts` y `tsconfig.app.json`. Para utilizar correctamente las variables `path` y` __dirname`, se instaló la dependencia @types/node.

## TailwindCSS

TailwindCSS está configurado junto con Autoprefixer y PostCSS. Puedes encontrar la configuración en los archivos `tailwind.config.js` y `postcss.config.js`.

## Componentes

La plantilla incluye algunos componentes de ejemplo que utilizan las tecnologías y librerías mencionadas. Puedes encontrar estos componentes en el directorio `src/components`.
