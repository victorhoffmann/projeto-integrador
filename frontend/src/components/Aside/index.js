import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import RenderFotos from '../Categoria_ID/RenderFotos'

const Aside = () => {

    const [Aside1, setAside1] = useState('')
    const [Aside2, setAside2] = useState('')
    const [Aside3, setAside3] = useState('')

    useEffect(() => {
        const getDataProdutos = async () => {
            try {
                const response = await axios.get('/produtos/random/');
                setAside1(response.data.produtos[0])
                setAside2(response.data.produtos[1])
                setAside3(response.data.produtos[2])   
                console.log(Aside1)      
                console.log(Aside2)
                console.log(Aside3)       
            } catch (error) {
                console.log(error);
            }
        };
        getDataProdutos();
    }, []);

    return (
        <aside>
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src={'http://localhost:5000/images/headset1.jpg'}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>teste</h5>
                            <a href="./produto"><button className='btn btn-success'>Comprar</button></a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={'http://localhost:5000/images/headset1.jpg'}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>teste</h5>
                            <a href="./produto"><button className='btn btn-success'>Comprar</button></a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={'http://localhost:5000/images/headset1.jpg'}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>teste</h5>
                            <a href="./produto"><button className='btn btn-success'>Comprar</button></a>
                        </div>
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleCaptions"
                    role="button"
                    data-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </aside>
    )
}

export default Aside