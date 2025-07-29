async function cargarFotos() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/photos');
    const fotos = await respuesta.json();
    
    fotos.forEach(foto => {
      console.log('ID:', foto.id);
      console.log('Título:', foto.title);
      console.log('URL:', foto.url);
    });

  } catch (error) {
    console.error('Hubo un error al cargar las fotos', error);
  }
}

cargarFotos();
