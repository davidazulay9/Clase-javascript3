# 🚀 Ejercicios de JavaScript Avanzado - Nivel 3.1

Una colección completa de 5 ejercicios progresivos diseñados para estudiantes de JavaScript nivel avanzado. Cada ejercicio incrementa en complejidad e introduce nuevos conceptos y tecnologías web modernas.

## 📋 Índice de Contenidos

- [Ejercicio 1: Calculadora Interactiva](#ejercicio-1-calculadora-interactiva)
- [Ejercicio 2: Lista de Tareas](#ejercicio-2-lista-de-tareas)
- [Ejercicio 3: Galería de Imágenes](#ejercicio-3-galería-de-imágenes)
- [Ejercicio 4: Sistema de Gestión](#ejercicio-4-sistema-de-gestión)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Requisitos Técnicos](#requisitos-técnicos)
- [Guía para Profesores](#guía-para-profesores)
- [Objetivos Pedagógicos](#objetivos-pedagógicos)

---

## 🧮 Ejercicio 1: Calculadora Interactiva

### 📁 Directorio: `ejercicio1-calculadora/`

**Nivel:** Básico-Intermedio  
**Tiempo estimado:** 2-3 horas  
**Conceptos clave:** Manipulación del DOM, Eventos, Validaciones

### 🎯 Objetivos

- Dominar la manipulación básica del DOM
- Implementar validación de entrada de usuario
- Manejar eventos de teclado y mouse
- Crear interfaces responsivas

### 🛠️ Funciones a Implementar

```javascript
function appendToResult(value)     // Agregar números y operadores
function calculateResult()        // Evaluar expresiones matemáticas
function clearResult()           // Limpiar display
function deleteLast()            // Borrar último carácter
```

### 💡 Características

- ✅ Interfaz visual moderna con CSS Grid
- ✅ Soporte para teclado
- ✅ Validación de expresiones
- ✅ Animaciones suaves
- ✅ Diseño responsivo

### 🏃‍♂️ Cómo Empezar

1. Abre `ejercicio1-calculadora/index.html`
2. Completa las funciones en `script.js`
3. Prueba todas las operaciones básicas
4. Implementa validaciones adicionales

---

## 📝 Ejercicio 2: Lista de Tareas

### 📁 Directorio: `ejercicio2-todo-list/`

**Nivel:** Intermedio  
**Tiempo estimado:** 4-5 horas  
**Conceptos clave:** LocalStorage, Clases ES6, Filtrado, Persistencia

### 🎯 Objetivos

- Implementar persistencia de datos con LocalStorage
- Manejar estados complejos de aplicación
- Crear sistemas de filtrado y búsqueda
- Trabajar con fechas y estadísticas

### 🛠️ Funciones a Implementar

```javascript
function addTodo()               // Crear nueva tarea
function deleteTodo(id)          // Eliminar tarea
function toggleTodo(id)          // Alternar estado
function editTodo(id)            // Editar tarea
function filterTodos(filter)     // Filtrar por estado
function saveTodos()             // Guardar en localStorage
function loadTodos()             // Cargar desde localStorage
```

### 💡 Características

- ✅ Persistencia completa de datos
- ✅ Sistema de prioridades
- ✅ Filtros avanzados
- ✅ Estadísticas en tiempo real
- ✅ Interfaz moderna con animaciones
- ✅ Modo oscuro/claro

### 🏃‍♂️ Cómo Empezar

1. Abre `ejercicio2-todo-list/index.html`
2. Estudia la clase `Todo` proporcionada
3. Implementa las funciones de CRUD
4. Agrega el sistema de almacenamiento

---

## 🖼️ Ejercicio 3: Galería de Imágenes

### 📁 Directorio: `ejercicio3-galeria/`

**Nivel:** Intermedio-Avanzado  
**Tiempo estimado:** 6-8 horas  
**Conceptos clave:** APIs REST, Async/Await, Promises, Paginación

### 🎯 Objetivos

- Consumir APIs REST externas
- Manejar promesas y programación asíncrona
- Implementar paginación y lazy loading
- Crear interfaces de usuario complejas

### 🛠️ Funciones a Implementar

```javascript
async function fetchImages(query, page)    // Consumir API externa
function renderImages(images, append)      // Renderizar galería
async function searchImages()              // Búsqueda de imágenes
async function changePage(page)            // Navegación
function openModal(imageData)              // Modal de imagen
```

### 💡 APIs Recomendadas

- **Unsplash API:** https://api.unsplash.com/
- **Pixabay API:** https://pixabay.com/api/
- **Pexels API:** https://www.pexels.com/api/

### 🔑 Configuración de API

```javascript
// Obtén tu API key gratuita y configúrala:
const API_CONFIG = {
  UNSPLASH_ACCESS_KEY: "TU_ACCESS_KEY_AQUI",
  // o
  PIXABAY_API_KEY: "TU_API_KEY_AQUI",
};
```

### 💡 Características

- ✅ Múltiples vistas (grid, list, masonry)
- ✅ Búsqueda y filtros avanzados
- ✅ Modal de imagen ampliada
- ✅ Paginación completa
- ✅ Manejo de errores
- ✅ Loading states

### 🏃‍♂️ Cómo Empezar

1. Regístrate en Unsplash o Pixabay para obtener API key
2. Configura tu API key en `script.js`
3. Implementa las funciones de fetch
4. Prueba con diferentes búsquedas

---

## 👨‍🎓 Ejercicio 4: Sistema de Gestión de Estudiantes

### 📁 Directorio: `ejercicio4-estudiantes/`

**Nivel:** Avanzado  
**Tiempo estimado:** 8-10 horas  
**Conceptos clave:** POO, Herencia, Polimorfismo, Patrones de Diseño

### 🎯 Objetivos

- Implementar programación orientada a objetos
- Usar herencia y polimorfismo
- Aplicar patrones de diseño (Singleton)
- Crear dashboards con gráficos

### 🛠️ Clases a Implementar

```javascript
class Person {                    // Clase base
    constructor(name, email, age, phone)
    get/set email()              // Con validación
    static isValidEmail()        // Método estático
    toString()                   // Representación string
}

class Student extends Person {   // Herencia
    enrollInCourse(courseId)     // Inscribir en curso
    calculateGPA()               // Calcular promedio
    getAcademicStatus()          // Estado académico
}

class Course {                   // Gestión de cursos
    enrollStudent(studentId)     // Inscribir estudiante
    getAvailableSpots()          // Disponibilidad
}

class SchoolManager {            // Patrón Singleton
    static getInstance()         // Instancia única
    addStudent(data)             // CRUD estudiantes
    getStatistics()              // Estadísticas
}
```

### 💡 Características

- ✅ Dashboard con gráficos (Chart.js)
- ✅ Sistema completo CRUD
- ✅ Validaciones robustas
- ✅ Filtros y búsquedas
- ✅ Estadísticas en tiempo real
- ✅ Interfaz administrativa completa

### 🏃‍♂️ Cómo Empezar

1. Estudia los conceptos de POO en JavaScript
2. Implementa la clase `Person` como base
3. Extiende con `Student` y `Course`
4. Crea el gestor principal `SchoolManager`

---

## 📁 Estructura del Proyecto

```
Clase javascript3/
├── 📄 README.md                    # Este archivo
├── 📁 ejercicio1-calculadora/
│   ├── 📄 index.html
│   ├── 📄 style.css
│   └── 📄 script.js
├── 📁 ejercicio2-todo-list/
│   ├── 📄 index.html
│   ├── 📄 style.css
│   └── 📄 script.js
├── 📁 ejercicio3-galeria/
│   ├── 📄 index.html
│   ├── 📄 style.css
│   └── 📄 script.js
├── 📁 ejercicio4-estudiantes/
│   ├── 📄 index.html
│   ├── 📄 style.css
│   └── 📄 script.js
```

---

## ⚙️ Requisitos Técnicos

### Navegadores Compatibles

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Tecnologías Utilizadas

- **HTML5:** Semántica moderna, accesibilidad
- **CSS3:** Grid, Flexbox, animaciones, variables
- **JavaScript ES6+:** Classes, async/await, modules
- **APIs:** REST, LocalStorage, Canvas
- **Libraries:** Chart.js (solo Ejercicio 4)

### Herramientas Recomendadas

- **Editor:** VS Code con extensiones JS
- **Servidor Local:** Live Server, Python -m http.server
- **Debugging:** Chrome DevTools
- **Validación:** ESLint, Prettier

---

## 👨‍🏫 Guía para Profesores

### Secuencia Recomendada

1. **Semana 1-2:** Ejercicio 1 (Fundamentos DOM)
2. **Semana 3-4:** Ejercicio 2 (Estado y Persistencia)
3. **Semana 5-6:** Ejercicio 3 (APIs y Async)
4. **Semana 7-8:** Ejercicio 4 (POO Avanzado)
5. **Semana 9-10:** Ejercicio 5 (Proyecto Final)

### Metodología de Evaluación

#### Criterios de Evaluación (100 puntos)

- **Funcionalidad:** 40 puntos

  - Todas las funciones implementadas correctamente
  - Manejo adecuado de errores
  - Validaciones apropiadas

- **Código:** 30 puntos

  - Buenas prácticas de JavaScript
  - Código limpio y comentado
  - Uso apropiado de ES6+

- **Interfaz:** 20 puntos

  - Diseño responsivo
  - UX intuitiva
  - Animaciones suaves

- **Creatividad:** 10 puntos
  - Características adicionales
  - Mejoras en diseño
  - Optimizaciones de rendimiento

### Rúbrica por Ejercicio

| Ejercicio | Excelente (90-100)                     | Bueno (80-89)                      | Regular (70-79)               | Necesita Mejora (<70)      |
| --------- | -------------------------------------- | ---------------------------------- | ----------------------------- | -------------------------- |
| **1**     | Calculadora completa con validaciones  | Funciones básicas funcionando      | Algunas funciones con errores | Funcionalidad muy limitada |
| **2**     | CRUD completo + localStorage           | CRUD básico funcionando            | Algunas operaciones fallan    | Funcionalidad muy básica   |
| **3**     | API integrada + todas las vistas       | API funcionando con búsqueda       | API básica sin filtros        | No integra API             |
| **4**     | POO completo + dashboard               | Clases implementadas correctamente | POO básico funcionando        | Conceptos POO incorrectos  |
| **5**     | Juego completo + características extra | Juego funcionando completamente    | Lógica básica funcionando     | Juego no funcional         |

---

## 🎯 Objetivos Pedagógicos

### Competencias Técnicas

#### Nivel Básico (Ejercicio 1)

- ✅ Manipulación del DOM con JavaScript
- ✅ Manejo de eventos de usuario
- ✅ Validación de entrada
- ✅ Debugging básico

#### Nivel Intermedio (Ejercicios 2-3)

- ✅ Gestión de estado de aplicación
- ✅ Persistencia con localStorage
- ✅ Consumo de APIs REST
- ✅ Programación asíncrona (Promises/Async-Await)
- ✅ Manejo de errores

#### Nivel Avanzado (Ejercicios 4-5)

- ✅ Programación orientada a objetos
- ✅ Herencia y polimorfismo
- ✅ Patrones de diseño
- ✅ Algoritmos complejos
- ✅ Optimización de rendimiento

### Competencias Transversales

- **Resolución de Problemas:** Análisis y descomposición de problemas complejos
- **Pensamiento Lógico:** Estructuración de algoritmos y flujos de datos
- **Creatividad:** Implementación de características adicionales
- **Colaboración:** Uso de comentarios y documentación
- **Investigación:** Consulta de documentación y recursos externos

---

## 🔧 Configuración y Uso

### Configuración Inicial

```bash
# Clonar o descargar el proyecto
cd "Clase javascript3"

# Servir archivos estáticamente (opcional)
python -m http.server 8000
# o usar Live Server de VS Code
```

### Para Estudiantes

1. **Lee las instrucciones** completas de cada ejercicio
2. **Examina el código proporcionado** antes de empezar
3. **Implementa una función a la vez** y pruébala
4. **Usa console.log** para debugging
5. **Consulta la documentación** cuando tengas dudas

### Para Profesores

1. **Revisa cada ejercicio** antes de asignarlo
2. **Prepara sesiones de debugging** grupales
3. **Fomenta la experimentación** con características adicionales
4. **Organiza code reviews** entre estudiantes

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Fetch API](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
- [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

### APIs Recomendadas

- [Unsplash API](https://unsplash.com/developers) - Imágenes gratuitas
- [Pixabay API](https://pixabay.com/api/docs/) - Imágenes y videos
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - API de prueba

### Herramientas de Desarrollo

- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
- [VS Code](https://code.visualstudio.com/) + [JavaScript Extensions](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
- [ESLint](https://eslint.org/) - Linting de código
- [Prettier](https://prettier.io/) - Formateo de código

---

## 🤝 Contribuciones y Soporte

### Para Profesores

- Siéntete libre de modificar y adaptar los ejercicios según tus necesidades
- Los ejercicios están diseñados para ser modulares e independientes
- Puedes agregar nuevas características o modificar los requisitos

### Mejoras Sugeridas

- **Ejercicio 1:** Agregar más operaciones matemáticas (trigonométricas, logaritmos)
- **Ejercicio 2:** Implementar sincronización con servidor
- **Ejercicio 3:** Agregar modo de vista en mosaico dinámico
- **Ejercicio 4:** Integrar con base de datos real
- **Ejercicio 5:** Agregar modo multijugador

### Soporte

- Revisa los comentarios en el código para obtener pistas adicionales
- Cada función tiene ejemplos comentados al final de los archivos
- Los archivos CSS incluyen utilidades y clases auxiliares

---

## 📄 Licencia

Este proyecto está diseñado para uso educativo. Los profesores y estudiantes pueden usar, modificar y distribuir este material libremente para fines académicos.

---

**¡Feliz codificación! 🚀**

_Desarrollado con ❤️ para estudiantes de JavaScript avanzado_
