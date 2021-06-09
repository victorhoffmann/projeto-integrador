const CategoriaFoto = (categoria_id) => {
    const categorias = {
        1: 'http://localhost:5000/images/headset1.jpg',
        2: 'http://localhost:5000/images/monitor1.jpg',
        3: 'http://localhost:5000/images/mousepad1.jpg',
        4: 'http://localhost:5000/images/mouse1.jpg',
        5: 'http://localhost:5000/images/teclado1.png'
    }
    return categorias[categoria_id]}

export default CategoriaFoto