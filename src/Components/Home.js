import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (
        <>
            <div className='parent-container'>
                <div className='d-flex parts'>
                    <div className='part1 d-flex flex-column justify-content-center align-items-center'>
                        <h3 data-aos='slide-right'>MERN Stack Dveloper</h3>
                        <div className='h-50'>
                            <lottie-player src="https://lottie.host/a19dac2f-dbc2-4acc-91fb-f5fa5b9cc75d/LBXFR9AigC.json" background="##ffffff" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
                        </div>
                    </div>
                    <div className='part2 d-flex flex-column justify-content-center align-items-center'>
                        <div className='h-50'>
                        <lottie-player src="https://lottie.host/761f5326-eb08-4294-86ed-ce505aca34a1/OwD2zys4rn.json" background="##FFFFFF" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
                        </div>
                        <h3 data-aos='slide-left'>Graphic Designer</h3>
                    </div>
                </div>
                <div className="separator-text">
                    <span>LANDING PAGE</span>
                </div>
            </div>
        </>
    )
}

export default Home;
