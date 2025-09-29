// Ejercicio 3: Galería de Imágenes con API Externa
// Instrucciones: Completa las funciones marcadas con TODO

// ============================================================================
// CONFIGURACIÓN Y CONSTANTES
// ============================================================================

const API_CONFIG = {
    UNSPLASH_ACCESS_KEY: 'MKDXEuPPos_rNrPAI809oSU_mZ9-0O8GsSXkzWsz-Qk',
    PIXABAY_API_KEY: '52513422-7d809d572841ff0f64de47e55',
    
    // URLs base de las APIs
    UNSPLASH_BASE_URL: 'https://api.unsplash.com',
    PIXABAY_BASE_URL: 'https://pixabay.com/api',
    
    // Configuración por defecto
    IMAGES_PER_PAGE: 12,
    DEFAULT_SEARCH: 'landscape'
};

// ============================================================================
// VARIABLES GLOBALES
// ============================================================================

let currentSearch = API_CONFIG.DEFAULT_SEARCH;
let currentPage = 1;
let currentView = 'grid';
let totalImages = 0;
let isLoading = false;
let loadedImages = [];
let favorites = JSON.parse(localStorage.getItem('favoriteImages')) || [];

// Elementos del DOM
const elements = {
    searchForm: document.getElementById('search-form'),
    searchInput: document.getElementById('search-input'),
    categorySelect: document.getElementById('category-select'),
    orientationSelect: document.getElementById('orientation-select'),
    gallery: document.getElementById('gallery'),
    loading: document.getElementById('loading'),
    errorContainer: document.getElementById('error-container'),
    errorText: document.getElementById('error-text'),
    resultsCount: document.getElementById('results-count'),
    viewBtns: document.querySelectorAll('.view-btn'),
    pagination: document.getElementById('pagination'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    pageNumbers: document.getElementById('page-numbers'),
    loadMoreBtn: document.getElementById('load-more-btn'),
    modal: document.getElementById('image-modal'),
    modalImage: document.getElementById('modal-image'),
    modalTitle: document.getElementById('modal-title'),
    modalDescription: document.getElementById('modal-description'),
    downloadLink: document.getElementById('download-link')
};

// ============================================================================
// FUNCIONES PRINCIPALES (PARA COMPLETAR POR EL ESTUDIANTE)
// ============================================================================

/**
 * TAREA 1: Obtener imágenes de la API
 * 
 * Esta función debe:
 * 1. Construir la URL de la API con los parámetros necesarios
 * 2. Hacer una petición fetch a la API
 * 3. Manejar errores de red y de API
 * 4. Devolver los datos formateados
 * 
 * @param {string} query - Término de búsqueda
 * @param {number} page - Número de página
 * @param {string} category - Categoría opcional
 * @param {string} orientation - Orientación opcional
 * @returns {Promise<Object>} Objeto con imágenes y metadatos
 */
async function fetchImages(query = currentSearch, page = 1, category = '', orientation = '') {
    // TODO: Implementar esta función
    
    try {
        // Pistas para implementar:
        
        // 1. Para Unsplash API:
        // const url = `${API_CONFIG.UNSPLASH_BASE_URL}/search/photos?query=${query}&page=${page}&per_page=${API_CONFIG.IMAGES_PER_PAGE}`;
        // const headers = { 'Authorization': `Client-ID ${API_CONFIG.UNSPLASH_ACCESS_KEY}` };
        
        // 2. Para Pixabay API:
        // const url = `${API_CONFIG.PIXABAY_BASE_URL}/?key=${API_CONFIG.PIXABAY_API_KEY}&q=${query}&page=${page}&per_page=${API_CONFIG.IMAGES_PER_PAGE}&image_type=photo&safesearch=true`;
        
        // 3. Hacer la petición:
        // const response = await fetch(url, { headers });
        // if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        // const data = await response.json();
        
        // 4. Formatear los datos según la API usada:
        // Para Unsplash: { images: data.results, total: data.total }
        // Para Pixabay: { images: data.hits, total: data.totalHits }
        
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}

/**
 * TAREA 2: Renderizar las imágenes en la galería
 * 
 * Esta función debe:
 * 1. Limpiar la galería si es una nueva búsqueda
 * 2. Crear elementos HTML para cada imagen
 * 3. Agregar event listeners para interacciones
 * 4. Manejar lazy loading si está habilitado
 * 
 * @param {Array} images - Array de objetos de imagen
 * @param {boolean} append - Si true, agregar a las existentes; si false, reemplazar
 */
function renderImages(images, append = false) {
    // TODO: Implementar esta función
    
    // Pistas para implementar:
    
    // 1. Si no es append, limpiar la galería:
    // if (!append) elements.gallery.innerHTML = '';
    
    // 2. Para cada imagen, crear un elemento:
    // const imageCard = document.createElement('div');
    // imageCard.className = 'image-card';
    // imageCard.innerHTML = `
    //     <img src="${image.urls?.small || image.webformatURL}" 
    //          alt="${image.alt_description || image.tags}" 
    //          loading="lazy">
    //     <div class="image-overlay">
    //         <div class="image-info">
    //             <h3 class="image-title">${image.alt_description || 'Sin título'}</h3>
    //             <p class="image-author">Por: ${image.user?.name || 'Usuario'}</p>
    //         </div>
    //     </div>
    // `;
    
    // 3. Agregar event listener para abrir el modal:
    // imageCard.addEventListener('click', () => openModal(image));
    
    // 4. Agregar a la galería:
    // elements.gallery.appendChild(imageCard);
}

/**
 * TAREA 3: Realizar búsqueda de imágenes
 * 
 * Esta función debe:
 * 1. Obtener los valores del formulario
 * 2. Validar la entrada
 * 3. Actualizar el estado global
 * 4. Llamar a fetchImages
 * 5. Renderizar los resultados
 * 6. Actualizar la interfaz
 */
async function searchImages() {
    // TODO: Implementar esta función
    
    // Pistas para implementar:
    
    // 1. Obtener valores del formulario:
    // const query = elements.searchInput.value.trim() || API_CONFIG.DEFAULT_SEARCH;
    // const category = elements.categorySelect.value;
    // const orientation = elements.orientationSelect.value;
    
    // 2. Validar y actualizar estado:
    // currentSearch = query;
    // currentPage = 1;
    
    // 3. Mostrar loading:
    // showLoading();
    
    // 4. Hacer la búsqueda:
    // try {
    //     const data = await fetchImages(query, currentPage, category, orientation);
    //     // Procesar resultados...
    // } catch (error) {
    //     showError(error.message);
    // }
}

/**
 * TAREA 4: Cambiar de página
 * 
 * Esta función debe:
 * 1. Validar el número de página
 * 2. Actualizar el estado
 * 3. Obtener nuevas imágenes
 * 4. Actualizar la vista
 * 
 * @param {number} page - Número de página a mostrar
 */
async function changePage(page) {
    // TODO: Implementar esta función
    
    // Pistas:
    // 1. Validar la página
    // 2. Actualizar currentPage
    // 3. Llamar a fetchImages con la nueva página
    // 4. Renderizar las nuevas imágenes
    // 5. Actualizar la paginación
}

/**
 * TAREA 5: Abrir modal con imagen ampliada
 * 
 * Esta función debe:
 * 1. Extraer información de la imagen
 * 2. Actualizar elementos del modal
 * 3. Mostrar el modal
 * 4. Configurar enlaces de descarga
 * 
 * @param {Object} imageData - Datos de la imagen
 */
function openModal(imageData) {
    // TODO: Implementar esta función
    
    // Pistas:
    // 1. Obtener URL de alta resolución:
    // const highResUrl = imageData.urls?.regular || imageData.webformatURL;
    
    // 2. Actualizar elementos del modal:
    // elements.modalImage.src = highResUrl;
    // elements.modalTitle.textContent = imageData.alt_description || 'Sin título';
    
    // 3. Mostrar el modal:
    // elements.modal.classList.add('active');
    // document.body.style.overflow = 'hidden';
}

// ============================================================================
// FUNCIONES DE INTERFAZ (YA IMPLEMENTADAS - ESTUDIAR COMO REFERENCIA)
// ============================================================================

/**
 * Mostrar estado de carga
 */
function showLoading() {
    isLoading = true;
    elements.loading.style.display = 'flex';
    elements.errorContainer.classList.add('hidden');
    elements.gallery.style.opacity = '0.5';
}

/**
 * Ocultar estado de carga
 */
function hideLoading() {
    isLoading = false;
    elements.loading.style.display = 'none';
    elements.gallery.style.opacity = '1';
}

/**
 * Mostrar mensaje de error
 */
function showError(message) {
    hideLoading();
    elements.errorContainer.classList.remove('hidden');
    elements.errorText.textContent = message;
}

/**
 * Ocultar mensaje de error
 */
function hideError() {
    elements.errorContainer.classList.add('hidden');
}

/**
 * Actualizar información de resultados
 */
function updateResultsInfo(total, current) {
    const showing = Math.min(current * API_CONFIG.IMAGES_PER_PAGE, total);
    elements.resultsCount.textContent = `${showing} de ${total} imágenes`;
}

/**
 * Cambiar vista de la galería
 */
function changeView(viewType) {
    currentView = viewType;
    
    // Actualizar botones
    elements.viewBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.view === viewType) {
            btn.classList.add('active');
        }
    });
    
    // Actualizar clase de la galería
    elements.gallery.className = `gallery ${viewType}-view`;
    
    // Guardar preferencia
    localStorage.setItem('preferredView', viewType);
}

/**
 * Actualizar paginación
 */
function updatePagination() {
    const totalPages = Math.ceil(totalImages / API_CONFIG.IMAGES_PER_PAGE);
    
    // Actualizar botones prev/next
    elements.prevBtn.disabled = currentPage === 1;
    elements.nextBtn.disabled = currentPage === totalPages;
    
    // Generar números de página
    elements.pageNumbers.innerHTML = '';
    
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-number ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.onclick = () => changePage(i);
        elements.pageNumbers.appendChild(pageBtn);
    }
    
    // Mostrar/ocultar paginación
    elements.pagination.style.display = totalPages > 1 ? 'flex' : 'none';
}

/**
 * Cerrar modal
 */
function closeModal() {
    elements.modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/**
 * Alternar favorito
 */
function toggleFavorite() {
    // Implementación básica - los estudiantes pueden expandir
    console.log('Toggle favorite functionality');
}

/**
 * Compartir imagen
 */
function shareImage() {
    if (navigator.share) {
        navigator.share({
            title: elements.modalTitle.textContent,
            url: elements.modalImage.src
        });
    } else {
        // Fallback - copiar URL al portapapeles
        navigator.clipboard.writeText(elements.modalImage.src);
        alert('URL copiada al portapapeles');
    }
}

/**
 * Reintentar carga tras error
 */
function retryLoad() {
    hideError();
    searchImages();
}

/**
 * Alternar panel de instrucciones
 */
function toggleInstructions() {
    const content = document.getElementById('instructions-content');
    content.classList.toggle('hidden');
}

// ============================================================================
// EVENT LISTENERS (YA IMPLEMENTADOS)
// ============================================================================

// Búsqueda
elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchImages();
});

// Cambio de vista
elements.viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        changeView(btn.dataset.view);
    });
});

// Paginación
elements.prevBtn.addEventListener('click', () => {
    if (currentPage > 1) changePage(currentPage - 1);
});

elements.nextBtn.addEventListener('click', () => {
    changePage(currentPage + 1);
});

// Cerrar modal
elements.modal.addEventListener('click', (e) => {
    if (e.target === elements.modal) {
        closeModal();
    }
});

// Atajos de teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        elements.searchInput.focus();
    }
});

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Restaurar vista preferida
    const savedView = localStorage.getItem('preferredView') || 'grid';
    changeView(savedView);
    
    // Cargar imágenes iniciales
    searchImages();
    
    // Enfocar campo de búsqueda
    elements.searchInput.focus();
});