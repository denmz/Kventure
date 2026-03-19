// ============================================================
//  KVENTURE — SISTEMA DE LOGIN
//  Archivo: js/login.js
//
//  ¿Cómo funciona?
//  ─ Los usuarios registrados se guardan en localStorage
//    como un array de objetos { nombre, email, password }.
//  ─ La sesión activa se guarda en sessionStorage:
//    solo dura mientras el navegador está abierto.
//  ─ NOTA: esto es para fines educativos / demo.
//    En un sitio real NUNCA se guarda la contraseña
//    en texto plano; se usaría un backend con hash.
//
//  DEPENDENCIA: este archivo se carga en Login.html y
//  opcionalmente en cualquier página que necesite saber
//  si hay sesión activa.
// ============================================================

// Claves de almacenamiento
const USUARIOS_KEY = "kventure_usuarios";
const SESION_KEY   = "kventure_sesion";

// ── Base de usuarios en localStorage ────────────────────────
// Cargo la lista o creo un usuario de prueba la primera vez
let usuarios = JSON.parse(localStorage.getItem(USUARIOS_KEY));

if (!usuarios) {
  // Usuario demo ya registrado para que se pueda probar
  usuarios = [
    {
      nombre:   "Fan K-pop",
      email:    "fan@kventure.com",
      password: "kpop2025"       // demo, no usar contraseñas reales así
    }
  ];
  localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
}

// ============================================================
//  getSesionActiva()
//  Retorna el objeto del usuario logueado o null si no hay.
// ============================================================
function getSesionActiva() {
  return JSON.parse(sessionStorage.getItem(SESION_KEY));
}

// ============================================================
//  iniciarSesion(email, password)
//  Busca el usuario, valida la contraseña y guarda la sesión.
//  Retorna { ok: true } o { ok: false, error: "mensaje" }
// ============================================================
function iniciarSesion(email, password) {
  const usuario = usuarios.find(
    u => u.email.toLowerCase() === email.toLowerCase()
  );

  if (!usuario) {
    return { ok: false, error: "No existe una cuenta con ese correo." };
  }

  if (usuario.password !== password) {
    return { ok: false, error: "Contraseña incorrecta. Inténtalo de nuevo." };
  }

  // Guardo la sesión sin la contraseña (por seguridad mínima)
  const sesion = { nombre: usuario.nombre, email: usuario.email };
  sessionStorage.setItem(SESION_KEY, JSON.stringify(sesion));

  return { ok: true, usuario: sesion };
}

// ============================================================
//  registrarUsuario(nombre, email, password)
//  Crea una nueva cuenta si el email no está en uso.
//  Retorna { ok: true } o { ok: false, error: "mensaje" }
// ============================================================
function registrarUsuario(nombre, email, password) {
  const existe = usuarios.find(
    u => u.email.toLowerCase() === email.toLowerCase()
  );

  if (existe) {
    return { ok: false, error: "Ese correo ya tiene una cuenta registrada." };
  }

  if (password.length < 6) {
    return { ok: false, error: "La contraseña debe tener al menos 6 caracteres." };
  }

  usuarios.push({ nombre, email, password });
  localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));

  return { ok: true };
}

// ============================================================
//  cerrarSesion()
//  Elimina la sesión activa y redirige al Login.
// ============================================================
function cerrarSesion() {
  sessionStorage.removeItem(SESION_KEY);
  window.location.href = "Login.html";
}

// ============================================================
//  mostrarMensaje(texto, tipo)
//  Muestra el mensaje de error o éxito en el formulario.
//  tipo = "error" | "exito"
// ============================================================
function mostrarMensaje(texto, tipo) {
  const el = document.getElementById("mensaje");
  if (!el) return;
  el.textContent = texto;
  el.className   = tipo;          // activa los estilos del CSS
  el.style.display = "block";
}

// ============================================================
//  Lógica del formulario de Login
//  Se ejecuta cuando el DOM está listo.
// ============================================================
document.addEventListener("DOMContentLoaded", () => {

  // Si ya hay sesión activa → redirijo al menú principal
  if (getSesionActiva()) {
    window.location.href = "MenuPrincipal.html";
    return;
  }

  const form   = document.getElementById("formulario-login");
  const btnLogin = document.getElementById("btn-login");

  if (!form) return; // no estamos en la página de login

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // evita que la página recargue (comportamiento por defecto del form)

    const email    = document.getElementById("correo").value.trim();
    const password = document.getElementById("contrasena").value;
    const recordar = document.getElementById("recordar")?.checked;

    // Validación básica antes de intentar login
    if (!email || !password) {
      mostrarMensaje("Por favor completa todos los campos.", "error");
      return;
    }

    // Deshabilito el botón para evitar doble clic
    btnLogin.disabled   = true;
    btnLogin.textContent = "Verificando...";

    // Simulo un pequeño delay (como si consultara un servidor)
    await new Promise(r => setTimeout(r, 800));

    const resultado = iniciarSesion(email, password);

    if (resultado.ok) {
      // Si marcó "Recuérdame", guardo el email en localStorage
      if (recordar) {
        localStorage.setItem("kventure_email_guardado", email);
      }

      mostrarMensaje(`¡Bienvenido de vuelta, ${resultado.usuario.nombre}! ✦`, "exito");

      // Redirigir después de 1.5 segundos para que el usuario lea el mensaje
      setTimeout(() => {
        window.location.href = "MenuPrincipal.html";
      }, 1500);

    } else {
      mostrarMensaje(resultado.error, "error");
      btnLogin.disabled   = false;
      btnLogin.textContent = "Iniciar sesión ✦";
    }
  });

  // Si el usuario había marcado "Recuérdame" antes → relleno el campo
  const emailGuardado = localStorage.getItem("kventure_email_guardado");
  if (emailGuardado) {
    const inputCorreo = document.getElementById("correo");
    if (inputCorreo) {
      inputCorreo.value = emailGuardado;
      const checkRecordar = document.getElementById("recordar");
      if (checkRecordar) checkRecordar.checked = true;
    }
  }
});
