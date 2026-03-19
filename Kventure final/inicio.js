const SESION_KEY = "kventure_sesion";
const USUARIOS_KEY = "kventure_usuarios";

function getSesion() {
  return JSON.parse(sessionStorage.getItem(SESION_KEY));
}

function cargarPerfil() {
  const sesion = getSesion();
  if (!sesion) {
    window.location.href = "Login.html";
    return;
  }
  const inicial = sesion.nombre.charAt(0).toUpperCase();
  document.getElementById("avatarLetra").textContent = inicial;
  document.getElementById("avatarNombre").textContent = sesion.nombre;
  document.getElementById("perfilLetra").textContent = inicial;
  document.getElementById("perfilNombre").textContent = sesion.nombre;
  document.getElementById("perfilCorreo").textContent = sesion.email;
  document.getElementById("iNombre").textContent = sesion.nombre;
  document.getElementById("iCorreo").textContent = sesion.email;
  document.getElementById("iDesde").textContent = new Date().toLocaleDateString("es-CR", { year:"numeric", month:"long" });
  document.getElementById("iAcceso").textContent = new Date().toLocaleDateString("es-CR", { weekday:"long", day:"numeric", month:"long" });
  const usuarios = JSON.parse(localStorage.getItem(USUARIOS_KEY)) || [];
  const u = usuarios.find(x => x.email === sesion.email);
  if (u) {
    document.getElementById("eNombre").value = u.nombre.split(" ")[0] || "";
    document.getElementById("eApellido").value = u.nombre.split(" ")[1] || "";
    document.getElementById("eCorreo").value = u.email;
    document.getElementById("eTel").value = u.telefono || "";
  }
}

function mostrar(id, btn) {
  document.querySelectorAll(".seccion").forEach(s => s.classList.remove("activa"));
  document.querySelectorAll(".menu-item").forEach(b => b.classList.remove("activo"));
  document.getElementById("sec-" + id).classList.add("activa");
  btn.classList.add("activo");
}

function guardarDatos() {
  const sesion = getSesion();
  if (!sesion) return;
  const usuarios = JSON.parse(localStorage.getItem(USUARIOS_KEY)) || [];
  const idx = usuarios.findIndex(u => u.email === sesion.email);
  if (idx >= 0) {
    const nombre = document.getElementById("eNombre").value + " " + document.getElementById("eApellido").value;
    const tel = document.getElementById("eTel").value;
    usuarios[idx].nombre = nombre.trim();
    usuarios[idx].telefono = tel;
    localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
    sesion.nombre = usuarios[idx].nombre;
    sessionStorage.setItem(SESION_KEY, JSON.stringify(sesion));
    cargarPerfil();
  }
  const ok = document.getElementById("okDatos");
  ok.classList.add("visible");
  setTimeout(() => ok.classList.remove("visible"), 2500);
}

function cambiarPass() {
  const sesion = getSesion();
  if (!sesion) return;
  const actual = document.getElementById("pActual").value;
  const nueva = document.getElementById("pNueva").value;
  const confirm = document.getElementById("pConfirm").value;
  const usuarios = JSON.parse(localStorage.getItem(USUARIOS_KEY)) || [];
  const idx = usuarios.findIndex(u => u.email === sesion.email);
  if (idx < 0) return;
  if (usuarios[idx].password !== actual) { alert("La contraseña actual es incorrecta."); return; }
  if (nueva.length < 6) { alert("La nueva contraseña debe tener al menos 6 caracteres."); return; }
  if (nueva !== confirm) { alert("Las contraseñas nuevas no coinciden."); return; }
  usuarios[idx].password = nueva;
  localStorage.setItem(USUARIOS_KEY, JSON.stringify(usuarios));
  document.getElementById("pActual").value = "";
  document.getElementById("pNueva").value = "";
  document.getElementById("pConfirm").value = "";
  const ok = document.getElementById("okPass");
  ok.classList.add("visible");
  setTimeout(() => ok.classList.remove("visible"), 2500);
}

function cerrarSesion() {
  sessionStorage.removeItem(SESION_KEY);
  window.location.href = "Login.html";
}

function abrirModal() {
  document.getElementById("modalFondo").classList.add("abierto");
}

function cerrarModal() {
  document.getElementById("modalFondo").classList.remove("abierto");
}

function cerrarModalFuera(e) {
  if (e.target.id === "modalFondo") cerrarModal();
}

function eliminarCuenta() {
  const sesion = getSesion();
  if (!sesion) return;
  const usuarios = JSON.parse(localStorage.getItem(USUARIOS_KEY)) || [];
  const nuevos = usuarios.filter(u => u.email !== sesion.email);
  localStorage.setItem(USUARIOS_KEY, JSON.stringify(nuevos));
  sessionStorage.removeItem(SESION_KEY);
  window.location.href = "Login.html";
}

document.addEventListener("DOMContentLoaded", cargarPerfil);
