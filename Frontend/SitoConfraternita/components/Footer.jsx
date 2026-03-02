import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <div className='width-screen bg-secondary py-5'>
        <div className='container'>
            <div className='d-flex flex-row justify-content-center'>
                <div className='col-6 fw-bold text-white flex-col'>
                    <h3>Confraternita</h3>
                    <h3>Testo</h3>
                    <img src="./Logo.png" alt="" style={{width: "100px"}}/>
                </div>
                <div className='col-5 fw-bold text-white mt-1'>
                    <p>Orari d'apertura</p>
                    <p>Orario da</p>
                    <p>Orario fino</p>
                    <a href='' className='text-white text-decoration-none'>Biglietteria <br /><br /> numero</a>
                </div>
                <div className='col-3 fw-bold text-white'>
                    <p>Inserire via</p>
                    <p>Inserire Luogo</p>
                    <p>Uffici</p>
                    <p>Inserire numero</p>
                    <p>Inserire email</p>
                    <div className='d-flex gap-3'>
                        <a href="#" className="text-white fs-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>

                        <a href="#" className="text-white fs-4">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a href="#" className="text-white fs-4">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer