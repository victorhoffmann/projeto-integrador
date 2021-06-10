import React, { useState } from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import './style.css'
import RenderFotos from '../../components/Categoria_ID/RenderFotos'

const Carousel = ({ produtos }) => {
    const dados = produtos
    const [currImg, setCurrImg] = useState(0)

    return (
        <>
            <div className="carousel_mao">
                <div className="carousel_mao-Inner"
                style={{ backgroundImage: `url(${dados[0] === undefined ? 'http://localhost:5000/images/loading.jpg' : RenderFotos(dados[currImg].categoria_id)})` }}
                >
                    <div className="left"
                    onClick={() => { 
                        currImg > 0 && setCurrImg(currImg - 1)
                    }}>
                        <ArrowBackIosIcon />
                    </div>
                    <div className="center">
                        <h1>{dados[0] === undefined ? 'Teste' : `${dados[currImg].nome}`}</h1>
                        <a className='linkCarousel' href={dados[0] === undefined ? './produto/' : `./produto/${dados[currImg].id}`}><button className='btn btn-success'>Comprar</button></a>
                    </div>
                    <div className="right"
                    onClick={() => { 
                        currImg < dados.length - 1 && setCurrImg(currImg + 1)
                    }}>
                        <ArrowForwardIosIcon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel