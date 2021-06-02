import React from 'react'
import './style.css'
import headset1 from '../../assets/headset1.jpg'

const Aside = () => {
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
                            <h5>Razer Kraken Ultimate</h5>
                            <a href="./produto"><button className='btn btn-success'>Comprar</button></a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={headset1}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Hyper X</h5>
                            <a href="./produto"><button className='btn btn-success'>Comprar</button></a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src={headset1}
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Hypex X 2</h5>
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