let imagenesData = []; // Guardamos los datos para el buscador

export default async function mostrarHome() {
    const app = document.getElementById("app");
    app.innerHTML = '<h2>Pokémon</h2><div id="lista" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: space-between; padding: 10px;"></div>'; // Limpiar contenido anterior
    imagenesData = [];  // Reiniciar lista

    for (let i = 0; i < 21; i++) {
        const id = Math.floor(Math.random() * 1000); // ID aleatorio
        const nombre = `Imagen ${id}`;
        const url = `https://picsum.photos/id/${id}/300/200`;

        // Guardar info para buscador
        imagenesData.push({ id, nombre, url });
    }

    renderizarImagenes(imagenesData);
}

function renderizarImagenes(lista) {
    const app = document.getElementById("app");
    app.innerHTML = '';

    lista.forEach((imgData) => {
        const contenedor = document.createElement('div');
        contenedor.className = 'imagen-card';

        const img = document.createElement('img');
        img.src = imgData.url;
        img.alt = imgData.nombre;

        const nombre = document.createElement('p');
        nombre.textContent = imgData.nombre;

        contenedor.appendChild(img);
        contenedor.appendChild(nombre);
        app.appendChild(contenedor);
    });
}

function filtrarImagenes() {
    const texto = document.getElementById("buscador").value.toLowerCase();
    const filtradas = imagenesData.filter(img => img.nombre.toLowerCase().includes(texto));
    renderizarImagenes(filtradas);
}