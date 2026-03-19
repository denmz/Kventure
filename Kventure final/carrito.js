// ============================================================
//  KVENTURE — CARRITO DE COMPRAS
//  Archivo: js/carrito.js
//
//  ¿Cómo funciona el carrito?
//  ─ Guardo los ítems en localStorage (el "almacenamiento"
//    del navegador). Esto hace que el carrito NO se borre
//    aunque el usuario cierre la pestaña o refresque.
//  ─ El carrito es un array de objetos. Cada objeto tiene:
//    { id, nombre, precio, imagen, cantidad }
//  ─ Cuando el usuario hace clic en "+", llamo a agregarItem().
//  ─ El contador del header se actualiza automáticamente.
//
//  DEPENDENCIA: este archivo necesita que database.js
//  esté cargado ANTES en el HTML.
// ============================================================

// ── Clave con la que guardo el carrito en localStorage ─────
const STORAGE_KEY = "kventure_carrito";

// ── El carrito: lo cargo desde localStorage o empiezo vacío ─
// JSON.parse convierte el texto guardado de vuelta a un array.
// Si no hay nada guardado (null), uso un array vacío [].
let carrito = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// ============================================================
//  guardarCarrito()
//  Serializa el array "carrito" a texto y lo guarda.
//  SIEMPRE llamo esta función después de modificar el carrito,
//  así los cambios persisten entre páginas y recargas.
// ============================================================
function guardarCarrito() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
}

// ============================================================
//  agregarItem(productoId)
//  Agrega un producto al carrito o incrementa su cantidad
//  si ya existe.
//
//  Parámetro: productoId → el campo "id" del producto en la DB
//  Ejemplo: agregarItem("bts-al-01")
// ============================================================
function agregarItem(productoId) {
  // Busco el producto en la base de datos
  const producto = KventureDB.getProducto(productoId);
  if (!producto) {
    console.warn(`Producto "${productoId}" no encontrado en la DB.`);
    return;
  }

  // Busco si ya existe en el carrito
  const existente = carrito.find(item => item.id === productoId);

  if (existente) {
    // Ya está → solo subo la cantidad
    existente.cantidad++;
  } else {
    // No está → lo agrego con cantidad 1
    carrito.push({
      id:       producto.id,
      nombre:   producto.nombre,
      precio:   producto.precio,
      imagen:   producto.imagen,
      cantidad: 1
    });
  }

  guardarCarrito();
  actualizarContador();
  mostrarNotificacion(producto.nombre);
}

// ============================================================
//  quitarItem(productoId)
//  Reduce la cantidad en 1. Si llega a 0, elimina el ítem.
// ============================================================
function quitarItem(productoId) {
  const idx = carrito.findIndex(item => item.id === productoId);
  if (idx === -1) return;

  if (carrito[idx].cantidad > 1) {
    carrito[idx].cantidad--;
  } else {
    carrito.splice(idx, 1); // elimina 1 elemento en la posición idx
  }

  guardarCarrito();
  actualizarContador();
  renderizarCarrito(); // vuelvo a dibujar la lista del carrito
}

// ============================================================
//  eliminarItem(productoId)
//  Elimina el producto del carrito sin importar la cantidad.
// ============================================================
function eliminarItem(productoId) {
  carrito = carrito.filter(item => item.id !== productoId);
  guardarCarrito();
  actualizarContador();
  renderizarCarrito();
}

// ============================================================
//  vaciarCarrito()
//  Limpia todos los ítems. Se llama después de una compra.
// ============================================================
function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  actualizarContador();
}

// ============================================================
//  getTotalItems()
//  Retorna la cantidad TOTAL de ítems (suma de cantidades).
//  Ejemplo: 2 álbumes + 3 hoodies = 5
// ============================================================
function getTotalItems() {
  return carrito.reduce((suma, item) => suma + item.cantidad, 0);
  // reduce recorre el array acumulando: empieza en 0 y suma
  // cada item.cantidad hasta terminar.
}

// ============================================================
//  getTotal()
//  Retorna el precio total del carrito como número.
//  Ejemplo: 30.00 + 65.00 = 95.00
// ============================================================
function getTotal() {
  return carrito.reduce(
    (suma, item) => suma + (item.precio * item.cantidad), 0
  );
}

// ============================================================
//  actualizarContador()
//  Busca todos los elementos con clase "carrito-contador"
//  en la página actual y actualiza su número.
//  Uso: después de agregar o quitar cualquier ítem.
// ============================================================
function actualizarContador() {
  const total = getTotalItems();
  // Actualiza todos los badges del carrito en el header
  document.querySelectorAll(".carrito-contador").forEach(el => {
    el.textContent = total;
    // Muestro el badge solo si hay algo en el carrito
    el.style.display = total > 0 ? "flex" : "none";
  });
}

// ============================================================
//  mostrarNotificacion(nombreProducto)
//  Muestra un toast en la esquina inferior derecha
//  confirmando que el producto fue agregado.
//  El toast desaparece solo después de 2.5 segundos.
// ============================================================
function mostrarNotificacion(nombreProducto) {
  // Elimino notificación anterior si aún existe
  const anterior = document.querySelector(".kv-toast");
  if (anterior) anterior.remove();

  // Creo el elemento del toast
  const toast = document.createElement("div");
  toast.className = "kv-toast";
  toast.innerHTML = `
    <span class="kv-toast-icon">🛒</span>
    <span><strong>${nombreProducto}</strong><br>agregado al carrito</span>
  `;

  // Estilos del toast (inyectados en JS para no necesitar CSS extra)
  Object.assign(toast.style, {
    position:       "fixed",
    bottom:         "1.5rem",
    right:          "1.5rem",
    background:     "rgba(26,10,46,0.95)",
    border:         "1px solid rgba(212,160,23,0.4)",
    borderRadius:   "12px",
    padding:        "1rem 1.4rem",
    color:          "#FDF8FF",
    fontFamily:     "'DM Sans', sans-serif",
    fontSize:       "0.875rem",
    display:        "flex",
    alignItems:     "center",
    gap:            "0.75rem",
    zIndex:         "9999",
    boxShadow:      "0 8px 32px rgba(0,0,0,0.4)",
    animation:      "slideInToast 0.3s ease",
    backdropFilter: "blur(12px)",
    maxWidth:       "280px"
  });

  // Agrego animación CSS si no existe ya
  if (!document.getElementById("kv-toast-style")) {
    const style = document.createElement("style");
    style.id = "kv-toast-style";
    style.textContent = `
      @keyframes slideInToast {
        from { opacity: 0; transform: translateY(20px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .kv-toast-icon { font-size: 1.3rem; }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(toast);

  // Borro el toast después de 2.5 segundos
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ============================================================
//  renderizarCarrito()
//  Dibuja los ítems dentro del panel lateral del carrito.
//  Busca el elemento con id="carrito-lista" en la página.
//  Si no existe (estamos en una página sin panel), no hace nada.
// ============================================================
function renderizarCarrito() {
  const lista   = document.getElementById("carrito-lista");
  const totalEl = document.getElementById("carrito-total");
  if (!lista) return; // no hay panel de carrito en esta página

  if (carrito.length === 0) {
    // Carrito vacío → mensaje bonito
    lista.innerHTML = `
      <div style="text-align:center; padding:3rem 1rem; color:rgba(253,248,255,0.4);">
        <div style="font-size:2.5rem; margin-bottom:1rem;">🛒</div>
        <p>Tu carrito está vacío</p>
        <p style="font-size:0.8rem; margin-top:0.5rem;">¡Agrega tus productos favoritos!</p>
      </div>
    `;
    if (totalEl) totalEl.textContent = "$0.00";
    return;
  }

  // Genero el HTML de cada ítem del carrito
  lista.innerHTML = carrito.map(item => `
    <div class="carrito-item" data-id="${item.id}">
      <img
        src="${item.imagen}"
        alt="${item.nombre}"
        onerror="this.src='imagenes/placeholder.jpg'"
        class="carrito-item-img"
      />
      <div class="carrito-item-info">
        <div class="carrito-item-nombre">${item.nombre}</div>
        <div class="carrito-item-precio">$${(item.precio * item.cantidad).toFixed(2)}</div>
      </div>
      <div class="carrito-item-controles">
        <button onclick="quitarItem('${item.id}')" class="ctrl-btn">−</button>
        <span class="ctrl-cantidad">${item.cantidad}</span>
        <button onclick="agregarItem('${item.id}')" class="ctrl-btn">+</button>
        <button onclick="eliminarItem('${item.id}')" class="ctrl-btn ctrl-delete">🗑</button>
      </div>
    </div>
  `).join("");

  // Actualizo el total
  if (totalEl) {
    totalEl.textContent = `$${getTotal().toFixed(2)}`;
  }
}

// ============================================================
//  inicializarBotonesAgregar()
//  Conecta todos los botones con clase "add-btn" que tengan
//  el atributo data-id con la función agregarItem().
//
//  USO EN HTML:
//  <button class="add-btn" data-id="bts-al-01">+</button>
//
//  Llama esta función al final del body de cada página de grupo.
// ============================================================
function inicializarBotonesAgregar() {
  document.querySelectorAll(".add-btn[data-id]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // evita que el clic se propague a la card
      agregarItem(btn.dataset.id);
    });
  });
}

// ============================================================
//  Inicialización automática cuando el DOM está listo
//  Actualizo el contador y conecto los botones + del panel
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  actualizarContador();
  inicializarBotonesAgregar();
  renderizarCarrito();
});
