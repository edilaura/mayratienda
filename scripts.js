const products = [
    // Accesorios para Teléfonos Celulares
    { id: 1, name: "Funda Protectora para iPhone", price: 10 * 3.75, image: "funda_protectora_iphone.jpg", category: "Accesorios para Teléfonos", brand: "Generic" },
    { id: 2, name: "Cargador Rápido USB-C", price: 20 * 3.75, image: "cargador_rapido_usbc.jpg", category: "Accesorios para Teléfonos", brand: "Anker" },
    { id: 3, name: "Auriculares Bluetooth Sony", price: 100 * 3.75, image: "auriculares_bluetooth_sony.jpg", category: "Accesorios para Teléfonos", brand: "Sony" },
    { id: 4, name: "Protector de Pantalla de Vidrio Templado", price: 5 * 3.75, image: "protector_pantalla_vidrio.jpg", category: "Accesorios para Teléfonos", brand: "Generic" },
    { id: 5, name: "Soporte para Teléfono de Escritorio", price: 15 * 3.75, image: "soporte_telefono.jpg", category: "Accesorios para Teléfonos", brand: "Generic" },
    { id: 6, name: "Cable de Carga Trenzado 3 en 1", price: 12 * 3.75, image: "cable_trenzado.jpg", category: "Accesorios para Teléfonos", brand: "Generic" },

    // Teléfonos Celulares
    { id: 7, name: "iPhone 14 Pro", price: 999 * 3.75, image: "iphone_14_pro.jpg", category: "Teléfonos Celulares", brand: "Apple" },
    { id: 8, name: "Samsung Galaxy S23", price: 899 * 3.75, image: "samsung_galaxy_s23.jpg", category: "Teléfonos Celulares", brand: "Samsung" },
    { id: 9, name: "Google Pixel 7", price: 699 * 3.75, image: "google_pixel_7.jpg", category: "Teléfonos Celulares", brand: "Google" },
    { id: 10, name: "OnePlus 11", price: 799 * 3.75, image: "oneplus_11.jpg", category: "Teléfonos Celulares", brand: "OnePlus" },
    { id: 11, name: "Xiaomi Redmi Note 12", price: 299 * 3.75, image: "xiaomi_redmi_note_12.jpg", category: "Teléfonos Celulares", brand: "Xiaomi" },
    { id: 12, name: "Motorola Edge 40", price: 450 * 3.75, image: "motorola_edge_40.jpg", category: "Teléfonos Celulares", brand: "Motorola" },

    // Accesorios para Computadoras
    { id: 13, name: "Teclado Mecánico RGB", price: 80 * 3.75, image: "teclado_mecanico_rgb.jpg", category: "Accesorios para Computadoras", brand: "Logitech" },
    { id: 14, name: "Mouse Inalámbrico", price: 25 * 3.75, image: "mouse_inalambrico.jpg", category: "Accesorios para Computadoras", brand: "Logitech" },
    { id: 15, name: "Webcam Full HD", price: 60 * 3.75, image: "webcam_full_hd.jpg", category: "Accesorios para Computadoras", brand: "Logitech" },
    { id: 16, name: "Hub USB-C Multipuerto", price: 40 * 3.75, image: "hub_usb_c.jpg", category: "Accesorios para Computadoras", brand: "Anker" },
    { id: 17, name: "Monitor 4K de 27 Pulgadas", price: 300 * 3.75, image: "monitor_4k.jpg", category: "Accesorios para Computadoras", brand: "Dell" },
    { id: 18, name: "Base Refrigerante para Laptop", price: 30 * 3.75, image: "base_refrigerante_laptop.jpg", category: "Accesorios para Computadoras", brand: "Generic" },

    // Computadoras
    { id: 19, name: "Laptop MacBook Air M2", price: 1200 * 3.75, image: "macbook_air_m2.jpg", category: "Computadoras", brand: "Apple" },
    { id: 20, name: "Laptop Dell XPS 13", price: 1100 * 3.75, image: "dell_xps_13.jpg", category: "Computadoras", brand: "Dell" },
    { id: 21, name: "Laptop Lenovo ThinkPad X1 Carbon", price: 1300 * 3.75, image: "lenovo_thinkpad_x1.jpg", category: "Computadoras", brand: "Lenovo" },
    { id: 22, name: "PC de Escritorio HP Envy", price: 800 * 3.75, image: "pc_hp_envy.jpg", category: "Computadoras", brand: "HP" },
    { id: 23, name: "Laptop Asus ROG Zephyrus G14", price: 1500 * 3.75, image: "asus_rog_zephyrus_g14.jpg", category: "Computadoras", brand: "Asus" },
    { id: 24, name: "Chromebook Acer Spin 311", price: 300 * 3.75, image: "chromebook_acer_spin.jpg", category: "Computadoras", brand: "Acer" },

    // Almacenamiento y Periféricos
    { id: 25, name: "SSD Externo Samsung T7", price: 100 * 3.75, image: "ssd_externo_samsung_t7.jpg", category: "Almacenamiento", brand: "Samsung" },
    { id: 26, name: "Disco Duro Externo WD My Passport", price: 80 * 3.75, image: "disco_duro_wd.jpg", category: "Almacenamiento", brand: "Western Digital" },
    { id: 27, name: "Memoria USB Sandisk 128GB", price: 25 * 3.75, image: "usb_sandisk_128gb.jpg", category: "Almacenamiento", brand: "Sandisk" },
    { id: 28, name: "Tarjeta SD Kingston 256GB", price: 50 * 3.75, image: "tarjeta_sd_kingston.jpg", category: "Almacenamiento", brand: "Kingston" },
    { id: 29, name: "Impresora Multifunción Canon", price: 200 * 3.75, image: "impresora_canon.jpg", category: "Periféricos", brand: "Canon" },
    { id: 30, name: "Scanner Epson V600", price: 250 * 3.75, image: "scanner_epson.jpg", category: "Periféricos", brand: "Epson" },

    // Otros Accesorios
    { id: 31, name: "Reloj Inteligente Xiaomi", price: 45 * 3.75, image: "reloj_inteligente_xiaomi.jpg", category: "Accesorios", brand: "Xiaomi" },
    { id: 32, name: "Batería Externa PowerBank 20000mAh", price: 50 * 3.75, image: "powerbank_20000mah.jpg", category: "Accesorios", brand: "Anker" },
    { id: 33, name: "Docking Station para Laptop", price: 150 * 3.75, image: "docking_station.jpg", category: "Accesorios", brand: "Dell" },
    { id: 34, name: "Cable HDMI de Alta Velocidad", price: 10 * 3.75, image: "cable_hdmi.jpg", category: "Accesorios", brand: "Generic" },
    { id: 35, name: "Lámpara de Escritorio LED", price: 18 * 3.75, image: "lampara_escritorio_led.jpg", category: "Accesorios", brand: "Generic" },
    { id: 36, name: "Audífonos Over-Ear JBL", price: 120 * 3.75, image: "audifonos_jbl.jpg", category: "Accesorios", brand: "JBL" }
];



// Mostrar productos organizados por categorías
function displayProductsByCategory() {
    const categories = ["Maquillaje", "Cuidado del Cabello", "Cuidado de la Piel", "Fragancias", "Accesorios"];
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista de productos antes de agregarla nuevamente

    categories.forEach(category => {
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryTitle.classList.add('category-title'); // Aplicar la clase para el estilo
        productList.appendChild(categoryTitle);

        const filteredProducts = products.filter(product => product.category === category);
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
            `;
            productList.appendChild(productElement);
        });
    });
}

// Llamar a la función para mostrar los productos al cargar la página
document.addEventListener('DOMContentLoaded', displayProductsByCategory);



// Carrito de compras (arreglo para almacenar productos seleccionados)
let cart = [];

// Mostrar los productos filtrados
function displayFilteredProducts(filteredProducts) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar productos anteriores

    if (filteredProducts.length === 0) {
        productList.innerHTML = '<p>No se encontraron productos.</p>';
    } else {
        filteredProducts.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
            `;
            productList.appendChild(productElement);
        });
    }
}

// Buscar productos
function searchProducts() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) || product.brand.toLowerCase().includes(searchTerm)
    );
    displayFilteredProducts(filteredProducts);
}

// Inicializar productos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    displayFilteredProducts(products);
});

// Función para agregar productos al carrito
function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    updateCartModal();
}

// Abrir y cerrar el modal del carrito
function openCartModal() {
    document.getElementById("cart-modal").style.display = "block";
}

function closeCartModal() {
    document.getElementById("cart-modal").style.display = "none";
}

// Abrir y cerrar el modal de pago
function openPaymentModal() {
    document.getElementById("payment-modal").style.display = "block";
}

function closePaymentModal() {
    document.getElementById("payment-modal").style.display = "none";
}

// Función para eliminar productos del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartModal();
}

// Función para actualizar el contador de productos en el carrito
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Función para actualizar el contenido del carrito en el modal
function updateCartModal() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div>
                    <p>${item.name}</p>
                    <p>Precio: $${item.price}</p>
                    <p>Cantidad: ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${item.id})" class="remove-item-btn">Eliminar</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const totalElement = document.createElement('div');
        totalElement.classList.add('cart-total');
        totalElement.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
        cartItemsContainer.appendChild(totalElement);
    }
}

// Función para abrir el modal de pago y proceder con el formulario
document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pago procesado exitosamente');
});

// Funciones para los modales de login y contacto
function openLoginModal() {
    document.getElementById('login-modal').style.display = "block";
}

function closeLoginModal() {
    document.getElementById('login-modal').style.display = "none";
}

function openContactForm() {
    document.getElementById('contact-modal').style.display = "block";
}

function closeContactForm() {
    document.getElementById('contact-modal').style.display = "none";
}
