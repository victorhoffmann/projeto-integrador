import ShelfHeadsets from '../../components/CardHeadsets'
import ShelfMonitores from '../../components/CardMonitores'
import ShelfTeclados from '../../components/CardTeclados'
import ShelfMouses from '../../components/CardMouses'
import ShelfMousePads from '../../components/CardMousePads'
import './style.css'

const Main = () => {
    return (
        <main className='mainHome'>
            <div id='produtosLinks'>
                <a href="#headsets">Headsets</a>
                <a href="#monitores">Monitores</a>
                <a href="#teclados">Teclados</a>
                <a href="#mouses">Mouses</a>
                <a href="#mousepads">MousePads</a>
            </div>
            <h2 className='titlePage'>Headsets</h2>
            <div id='headsets' className='cardsHome'>
                <ShelfHeadsets />
            </div>
            <h2 className='titlePage'>Monitores</h2>
            <div id='monitores' className='cardsHome'>
                <ShelfMonitores />
            </div>
            <h2 className='titlePage'>Teclados</h2>
            <div id='teclados' className='cardsHome'>
                <ShelfTeclados />
            </div>
            <h2 className='titlePage'>Mouses</h2>
            <div id='mouses' className='cardsHome'>
                <ShelfMouses />
            </div>
            <h2 className='titlePage'>MousePads</h2>
            <div id='mousepads' className='cardsHome'>
                <ShelfMousePads />
            </div>
        </main>
    )
}

export default Main