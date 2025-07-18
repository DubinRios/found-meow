# 🐱 AdoptaGatos - Plataforma de Adopción Felina

Una aplicación web interactiva que permite **explorar, buscar y guardar en favoritos** gatos disponibles para adopción. Integra datos de [The Cat API](https://thecatapi.com/) con funcionalidades modernas como modo claro/oscuro y almacenamiento local de favoritos.

---

## ✨ Características principales

- 🎨 **Modo claro/oscuro** con toggle interactivo
- 🖼️ **Slider** de gatos aleatorios con datos de The Cat API
- ❤️ Sistema de **favoritos** persistente con localStorage
- 🔍 Búsqueda y filtrado de gatos por características
- ⚡ Desarrollada con **React** + **Vite**
- 🧪 Suite de tests con **Vitest**
- 🚦 Enrutamiento con **React Router**

---

## ⚙️ Tecnologías utilizadas

![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white)
![The Cat API](https://img.shields.io/badge/The_Cat_API-FF6B6B?style=flat-square)

---

## 🗂️ Estructura del proyecto

```
adopta-gatos/
├── public/ # Assets públicos
├── src/
│ ├── assets/ # Imágenes, íconos
│ ├── components/ # Componentes reutilizables
│ ├── context/ # Contextos de React (theme, favoritos)
│ ├── hooks/ # Custom hooks
│ ├── layouts/ # Layouts principales
│ ├── pages/ # Vistas/páginas
│ ├── routes/ # Configuración de rutas
│ ├── services/ # Llamadas a APIs (The Cat API)
│ ├── App.css # Estilos globales
│ ├── App.jsx # Componente raíz
│ └── main.jsx # Punto de entrada
├── tests/ # Pruebas unitarias
├── .eslintrc.js # Configuración ESLint
├── vite.config.js # Configuración Vite
├── package.json # Dependencias y scripts
└── README.md # Documentación
```

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar repositorio

```bash
git clone https://github.com/tuusuario/adopta-gatos
cd adopta-gatos
```

### 2. Instalar dependencias

```
npm install
```

### 3. Iniciar servidor de desarrollo

```
npm run dev
```

### 4. Ejecutar tests

```
npm run test
```

### 5. Construir para producción

```
npm run build
```

## 📌 Funcionalidades clave

| Módulo                 | Descripción                                       |
| ---------------------- | ------------------------------------------------- |
| `Slider.jsx`           | Componente principal que muestra gatos aleatorios |
| `ThemeToggle.jsx`      | Botón para cambiar entre modo claro/oscuro        |
| `FavoritesContext.jsx` | Gestión global del estado de favoritos            |
| `CatCard.jsx`          | Tarjeta individual de gato con botón de favorito  |
| `apiService.js`        | Conexión con The Cat API para obtener datos       |
| `localStorageUtils.js` | Utilidades para manejar favoritos en localStorage |

---

## 🧪 Estado del proyecto

✅ Slider de gatos funcional  
✅ Sistema de favoritos persistente  
✅ Modo claro/oscuro  
✅ Integración con The Cat API  
✅ Suite básica de tests  
🚧 Página detalle de gato (en desarrollo)  
🚧 Formulario de adopción (en desarrollo)

---

## 👩‍💻 Equipo de Desarrollo

- [**Dubin** - _@DubinRios_](https://github.com/DubinRios)
- [**Jesús** - _@jemb4_](https://github.com/jemb4)
- [**Miguel** - _@migueroder_](https://github.com/migueroder)
- [**Paula** - _@Kenhya12_](https://github.com/Kenhya12)
- [**Yelyzaveta** - _@yelykrass_](https://github.com/yelykrass)

---

> **Nota:** Esta aplicación es un proyecto educativo creado para practicar React, consumo de APIs y gestión de estado. Todos los datos de gatos son proporcionados por [The Cat API](https://thecatapi.com/).
