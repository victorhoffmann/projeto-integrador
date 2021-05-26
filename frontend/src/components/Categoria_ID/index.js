const CategoriaProduto = (categoria_id) =>{
    const categorias = {
        1: 'Headsets',
        2: 'Monitores',
        3: 'Mousepads',
        4: 'Mouse',
        5: 'Teclado'
    }

    for (var i = 0; i ++; i < categorias.length()) {
        if (categoria_id === categorias[1]) {
            return categorias[categoria_id]
        }
    }
    
}