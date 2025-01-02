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
locales.forEach((local) => {
  const marker = L.marker(local.coordenadas).addTo(map);
  marker.bindPopup(`<b>${local.nombre}</b><br>${local.direccion}`);
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

// Simulación de búsqueda (prueba con ID 1, 2 o 3 en la consola)
// buscarLocalPorId(1);
