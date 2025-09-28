// Ejercicio 2: Lista de Tareas con LocalStorage
// Instrucciones: Completa las funciones marcadas con TODO

// ============================================================================
// VARIABLES GLOBALES Y CONFIGURACIÓN
// ============================================================================

let todos = [];
let currentFilter = 'todas';
let todoIdCounter = 1;

// Elementos del DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const prioritySelect = document.getElementById('priority-select');
const todoItems = document.getElementById('todo-items');
const emptyState = document.getElementById('empty-state');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clear-completed');
const clearAllBtn = document.getElementById('clear-all');

// Contadores
const totalCount = document.getElementById('total-count');
const pendingCount = document.getElementById('pending-count');
const completedCount = document.getElementById('completed-count');

// ============================================================================
// CLASE TODO (para estructura de datos)
// ============================================================================

class Todo {
    constructor(text, priority = 'media') {
        this.id = todoIdCounter++;
        this.text = text;
        this.completed = false;
        this.priority = priority;
        this.createdAt = new Date();
        this.completedAt = null;
    }
    
    toggle() {
        this.completed = !this.completed;
        this.completedAt = this.completed ? new Date() : null;
    }
    
    edit(newText) {
        this.text = newText;
    }
    
    setPriority(newPriority) {
        this.priority = newPriority;
    }
}

// ============================================================================
// FUNCIONES PRINCIPALES (PARA COMPLETAR POR EL ESTUDIANTE)
// ============================================================================

/**
 * TAREA 1: Agregar una nueva tarea
 * 
 * Esta función debe:
 * 1. Obtener el texto del input y la prioridad seleccionada
 * 2. Validar que el texto no esté vacío
 * 3. Crear un nuevo objeto Todo
 * 4. Agregarlo al array de todos
 * 5. Limpiar el formulario
 * 6. Guardar en localStorage
 * 7. Actualizar la vista
 */
function addTodo() {
    // TODO: Implementar esta función
    // Pistas:
    // - Usa todoInput.value.trim() para obtener el texto
    // - Usa prioritySelect.value para obtener la prioridad
    // - Crea un nuevo Todo con: new Todo(text, priority)
    // - Agrega al array: todos.push(newTodo)
    // - Llama a saveTodos(), updateDisplay(), updateStats()
    
}

/**
 * TAREA 2: Eliminar una tarea
 * 
 * Esta función debe:
 * 1. Encontrar la tarea por ID
 * 2. Eliminarla del array todos
 * 3. Actualizar localStorage
 * 4. Actualizar la vista
 * 
 * @param {number} id - ID de la tarea a eliminar
 */
function deleteTodo(id) {
    // TODO: Implementar esta función
    // Pistas:
    // - Usa todos.findIndex() para encontrar el índice
    // - Usa todos.splice() para eliminar
    // - Llama a saveTodos(), updateDisplay(), updateStats()
    
}

/**
 * TAREA 3: Alternar el estado completado de una tarea
 * 
 * Esta función debe:
 * 1. Encontrar la tarea por ID
 * 2. Alternar su estado completado
 * 3. Actualizar localStorage
 * 4. Actualizar la vista
 * 
 * @param {number} id - ID de la tarea a alternar
 */
function toggleTodo(id) {
    // TODO: Implementar esta función
    // Pistas:
    // - Usa todos.find() para encontrar la tarea
    // - Llama al método toggle() de la tarea
    // - Llama a saveTodos(), updateDisplay(), updateStats()
    
}

/**
 * TAREA 4: Editar el texto de una tarea
 * 
 * Esta función debe:
 * 1. Mostrar un prompt para editar el texto
 * 2. Validar la entrada
 * 3. Actualizar la tarea
 * 4. Guardar y actualizar la vista
 * 
 * @param {number} id - ID de la tarea a editar
 */
function editTodo(id) {
    // TODO: Implementar esta función
    // Pistas:
    // - Usa todos.find() para encontrar la tarea
    // - Usa prompt() para obtener el nuevo texto
    // - Valida que no esté vacío
    // - Llama al método edit() de la tarea
    // - Llama a saveTodos(), updateDisplay()
    
}

/**
 * TAREA 5: Filtrar las tareas según el filtro actual
 * 
 * Esta función debe:
 * 1. Filtrar el array todos según el tipo de filtro
 * 2. Devolver el array filtrado
 * 
 * @param {string} filter - Tipo de filtro ('todas', 'pendientes', 'completadas', 'alta')
 * @returns {Array} Array de tareas filtradas
 */
function filterTodos(filter) {
    // TODO: Implementar esta función
    // Pistas:
    // - Usa switch o if-else para los diferentes filtros
    // - Para 'pendientes': !todo.completed
    // - Para 'completadas': todo.completed
    // - Para 'alta': todo.priority === 'alta'
    // - Para 'todas': devuelve todos sin filtrar
    
}

// ============================================================================
// FUNCIONES DE ALMACENAMIENTO (PARA COMPLETAR POR EL ESTUDIANTE)
// ============================================================================

/**
 * TAREA 6: Guardar tareas en localStorage
 * 
 * Esta función debe:
 * 1. Convertir el array todos a JSON
 * 2. Guardarlo en localStorage con la clave 'todos'
 * 3. También guardar el contador de IDs
 */
function saveTodos() {
    // TODO: Implementar esta función
    // Pistas:
    // - Usa JSON.stringify() para convertir a string
    // - Usa localStorage.setItem('todos', todosString)
    // - También guarda: localStorage.setItem('todoIdCounter', todoIdCounter)
    
}

/**
 * TAREA 7: Cargar tareas desde localStorage
 * 
 * Esta función debe:
 * 1. Obtener los datos de localStorage
 * 2. Parsear el JSON
 * 3. Recrear los objetos Todo
 * 4. Restaurar el contador de IDs
 */
function loadTodos() {
    // TODO: Implementar esta función
    // Pistas:
    // - Usa localStorage.getItem('todos')
    // - Verifica que no sea null
    // - Usa JSON.parse() para convertir de string
    // - Recrea cada Todo: todos = data.map(item => Object.assign(new Todo(), item))
    // - Restaura el contador: todoIdCounter = parseInt(localStorage.getItem('todoIdCounter')) || 1
    
}

// ============================================================================
// FUNCIONES DE INTERFAZ (YA IMPLEMENTADAS - ESTUDIAR COMO REFERENCIA)
// ============================================================================

/**
 * Actualizar las estadísticas mostradas en el header
 */
function updateStats() {
    const total = todos.length;
    const pending = todos.filter(todo => !todo.completed).length;
    const completed = todos.filter(todo => todo.completed).length;
    
    totalCount.textContent = total;
    pendingCount.textContent = pending;
    completedCount.textContent = completed;
}

/**
 * Renderizar una tarea individual en el DOM
 */
function renderTodo(todo) {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    li.dataset.id = todo.id;
    
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };
    
    li.innerHTML = `
        <div class="todo-checkbox ${todo.completed ? 'checked' : ''}" onclick="toggleTodo(${todo.id})">
            ${todo.completed ? '<i class="fas fa-check"></i>' : ''}
        </div>
        <div class="todo-content">
            <div class="todo-text">${todo.text}</div>
            <div class="todo-meta">
                <span class="priority ${todo.priority}">
                    <i class="fas fa-flag"></i> ${todo.priority}
                </span>
                <span class="date">
                    <i class="fas fa-calendar"></i> ${formatDate(todo.createdAt)}
                </span>
                ${todo.completed ? `
                    <span class="completed-date">
                        <i class="fas fa-check-circle"></i> ${formatDate(todo.completedAt)}
                    </span>
                ` : ''}
            </div>
        </div>
        <div class="todo-actions">
            <button class="todo-btn edit" onclick="editTodo(${todo.id})">
                <i class="fas fa-edit"></i> Editar
            </button>
            <button class="todo-btn delete" onclick="deleteTodo(${todo.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    
    return li;
}

/**
 * Actualizar la visualización de todas las tareas
 */
function updateDisplay() {
    const filteredTodos = filterTodos(currentFilter);
    todoItems.innerHTML = '';
    
    if (filteredTodos.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        filteredTodos.forEach(todo => {
            todoItems.appendChild(renderTodo(todo));
        });
    }
}

/**
 * Establecer el filtro activo
 */
function setActiveFilter(filter) {
    currentFilter = filter;
    
    // Actualizar botones de filtro
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });
    
    updateDisplay();
}

/**
 * Limpiar todas las tareas completadas
 */
function clearCompleted() {
    if (confirm('¿Estás seguro de que quieres eliminar todas las tareas completadas?')) {
        todos = todos.filter(todo => !todo.completed);
        saveTodos();
        updateDisplay();
        updateStats();
    }
}

/**
 * Limpiar todas las tareas
 */
function clearAll() {
    if (confirm('¿Estás seguro de que quieres eliminar TODAS las tareas? Esta acción no se puede deshacer.')) {
        todos = [];
        saveTodos();
        updateDisplay();
        updateStats();
    }
}

// ============================================================================
// EVENT LISTENERS (YA IMPLEMENTADOS)
// ============================================================================

// Envío del formulario
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo();
});

// Filtros
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setActiveFilter(btn.dataset.filter);
    });
});

// Botones de acción
clearCompletedBtn.addEventListener('click', clearCompleted);
clearAllBtn.addEventListener('click', clearAll);

// Atajos de teclado
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter para agregar tarea rápidamente
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        todoInput.focus();
    }
    
    // Escape para limpiar el input
    if (e.key === 'Escape' && document.activeElement === todoInput) {
        todoInput.value = '';
        todoInput.blur();
    }
});

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

// Cargar datos al iniciar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
    updateDisplay();
    updateStats();
    todoInput.focus();
});