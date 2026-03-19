// ============================================================
//  KVENTURE — PÁGINAS DE GRUPO
//  Archivo: js/grupo.js
//
//  Este archivo maneja la lógica de todas las páginas de
//  grupos (BTS.html, TWICE.html, NCT.html, etc.).
//
//  ¿Qué hace?
//  1. Lee el id del grupo desde el atributo data-grupo del body
//  2. Conecta las imágenes de la DB a las cards del HTML
//  3. Agrega funcionalidad a los botones de categoría (filtros)
//  4. Conecta el botón "+" de cada card al carrito
//
//  CÓMO USAR EN UN HTML DE GRUPO:
//  Agrega data-grupo="bts" al <body>:
//  <body data-grupo="bts">
//
//  Agrega data-id en cada botón "+":
//  <button class="add-btn" data-id="bts-al-01">+</button>
//
//  DEPENDENCIAS: database.js, carrito.js (cargar antes)
// ============================================================

// ============================================================
//  conectarImagenes(grupoId)
//  Recorre todos los productos del grupo y asigna la imagen
//  correcta de la DB a cada .prod-img que tenga data-id.
//
//  Para que funcione, cada .prod-img necesita data-id:
//  <div class="prod-img" data-id="bts-al-01"> ... </div>
// ============================================================
function conectarImagenes(grupoId) {
  const productos = KventureDB.getProductosPorGrupo(grupoId);

  productos.forEach(prod => {
    // Busco el contenedor de imagen con el id del producto
    const imgContainer = document.querySelector(
      `.prod-img[data-id="${prod.id}"]`
    );
    if (!imgContainer) return;

    // Creo la imagen si no existe ya
    if (!imgContainer.querySelector("img")) {
      const img = document.createElement("img");
      img.src   = prod.imagen;
      img.alt   = prod.nombre;
      img.style.cssText = `
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        transition: transform 0.4s ease;
      `;

      // Si la imagen no carga → muestro el emoji de fallback
      img.onerror = () => {
        img.remove();
        // El emoji ya está en el HTML como contenido del div
      };

      // Efecto zoom al hacer hover en la card
      const card = imgContainer.closest(".producto-card");
      if (card) {
        card.addEventListener("mouseenter", () => {
          img.style.transform = "scale(1.08)";
        });
        card.addEventListener("mouseleave", () => {
          img.style.transform = "scale(1)";
        });
      }

      imgContainer.prepend(img); // pongo la imagen antes del badge
    }
  });
}

// ============================================================
//  inicializarFiltros(grupoId)
//  Conecta los botones de categoría para mostrar/ocultar
//  secciones de productos.
//
//  Los botones de categoría deben tener data-cat:
//  <button class="cat-btn active" data-cat="todos">Todos</button>
//  <button class="cat-btn" data-cat="album">Álbumes</button>
//
//  Las secciones deben tener data-seccion:
//  <section class="seccion" data-seccion="album"> ... </section>
// ============================================================
function inicializarFiltros(grupoId) {
  const botones  = document.querySelectorAll(".cat-btn[data-cat]");
  const secciones = document.querySelectorAll(".seccion[data-seccion]");

  if (botones.length === 0) return; // no hay filtros en esta página

  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      const categoriaSeleccionada = btn.dataset.cat;

      // Marco el botón activo
      botones.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Muestro/oculto secciones según la categoría
      secciones.forEach(sec => {
        if (
          categoriaSeleccionada === "todos" ||
          sec.dataset.seccion === categoriaSeleccionada
        ) {
          sec.style.display = "block";
        } else {
          sec.style.display = "none";
        }
      });
    });
  });
}

// ============================================================
//  actualizarHeaderCarrito()
//  Inyecta el botón del carrito en el header si no existe.
//  Así no tengo que agregarlo manualmente en cada HTML.
// ============================================================
function actualizarHeaderCarrito() {
  // Evito duplicar el botón si ya está en el HTML
  if (document.querySelector(".carrito-btn")) return;

  const header = document.querySelector("header");
  if (!header) return;

  const btn = document.createElement("a");
  btn.href      = "carrito.html";
  btn.className = "carrito-btn";
  btn.innerHTML = `
    🛒
    <span class="carrito-contador" style="display:none;">0</span>
  `;

  // Estilos del botón del carrito
  Object.assign(btn.style, {
    position:    "relative",
    display:     "flex",
    alignItems:  "center",
    fontSize:    "1.4rem",
    textDecoration: "none",
    cursor:      "pointer",
    marginLeft:  "1rem"
  });

  // Estilos del contador (badge rojo)
  const style = document.createElement("style");
  style.textContent = `
    .carrito-btn { position: relative; }
    .carrito-contador {
      position: absolute;
      top: -8px; right: -10px;
      background: #E8628A;
      color: white;
      border-radius: 50%;
      width: 20px; height: 20px;
      font-size: 0.7rem;
      font-weight: 700;
      align-items: center;
      justify-content: center;
      font-family: 'DM Sans', sans-serif;
    }
  `;
  document.head.appendChild(style);

  header.appendChild(btn);
}

// ============================================================
//  Inicialización automática
//  Leo el id del grupo desde data-grupo en el <body>
//  y ejecuto todas las funciones necesarias.
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const grupoId = document.body.dataset.grupo;

  // Solo ejecuto si estamos en una página de grupo
  if (grupoId) {
    conectarImagenes(grupoId);
    inicializarFiltros(grupoId);
  }

  actualizarHeaderCarrito();
  actualizarContador(); // de carrito.js
});
