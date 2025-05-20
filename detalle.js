document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    document.getElementById('producto-detalle').innerText = 'Producto no encontrado';
    return;
  }

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const producto = await response.json();

    document.getElementById('producto-detalle').innerHTML = `
      <img src="${producto.image}" alt="${producto.title}" width="200">
      <h2>${producto.title}</h2>
      <p><strong>Precio:</strong> $${producto.price}</p>
      <p><strong>Descripción:</strong> ${producto.description}</p>
      <p><strong>Categoría:</strong> ${producto.category}</p>
    `;
  } catch (error) {
    document.getElementById('producto-detalle').innerText = 'Error al cargar el producto';
    console.error(error);
  }
});
