// Crear el mapa
const map = L.map("map").setView([-34.6037, -58.3816], 12); // Coordenadas de Buenos Aires

// Cargar un mapa base (puedes cambiar la URL si usas otro servicio)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Base de datos simulada
const locales = [
  {
    id: 1,
    nombre: "Local Palermo",
    direccion: "Jerónimo Salguero 3212, Palermo",
    coordenadas: [-34.5751, -58.404],
  },
  {
    id: 2,
    nombre: "Local Recoleta",
    direccion: "Av. Santa Fe 1234, Recoleta",
    coordenadas: [-34.5883, -58.3929],
  },
  {
    id: 3,
    nombre: "Local Microcentro",
    direccion: "Florida 555, Microcentro",
    coordenadas: [-34.6037, -58.3784],
  },
];

// Agregar marcadores al mapa

// Agregar evento a cada marcador
locales.forEach((local) => {
  const marker = L.marker(local.coordenadas).addTo(map);
  marker.bindPopup(`<b>${local.nombre}</b><br><span>${local.direccion}</span>`);

  // Listen for the popup opening event
  marker.on("popupopen", (e) => {
    const popupContent = e.popup.getContent(); // Get the popup content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = popupContent; // Create a temporary div to parse content

    const nombreLocal = tempDiv.querySelector("b")?.textContent || "";
    const direLocal = tempDiv.querySelector("span")?.textContent || "";

    if (nombreLocal && direLocal) {
      document.querySelector("#infoNombre").textContent = nombreLocal;
      document.querySelector("#infoDireccion").textContent = direLocal;
    }
  });
});

// Mostrar tarjeta de información al hacer clic en un marcador
map.on("popupopen", () => {
  const infoCard = document.querySelector(".info");
  if (infoCard) {
    infoCard.classList.remove("hidden");
  }
});

// Buscar local por ID
function buscarLocalPorId(id) {
  const local = locales.find((l) => l.id === id);
  if (local) {
    map.setView(local.coordenadas, 15); // Centrar el mapa en el local
    alert(
      `Información del local:\nNombre: ${local.nombre}\nDirección: ${local.direccion}`
    );
  } else {
    alert("No se encontró el local con ID " + id);
  }
}

marcaLocales = document.querySelectorAll(".leaflet-marker-icon");

function doSomething() {
  console.log("Got a click");
}

function showDisplay() {
  let infoCard = document.querySelector(".info");
  infoCard.classList.remove("hidden");
}

marcaLocales.forEach((local) => {
  local.addEventListener("click", showDisplay);
});

// '.leaflet-popup-close-button'

// Simulación de búsqueda (prueba con ID 1, 2 o 3 en la consola)
// buscarLocalPorId(1);
