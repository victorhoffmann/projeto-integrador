import './style.css'

const MenuAdm = () => {
    return (
        <div className="menuAdm">
            <h3>Periféricos.Net</h3>
            <ul className='listMenuAdm'>
                <a href="/painel-adm"><li>Inicio</li></a>
                <a href='/painel-adm/produtos'><li>Produtos</li></a>
                <a href='/painel-adm/usuarios'><li>Usuarios</li></a>
            </ul>
        </div>
    )
}

export default MenuAdm