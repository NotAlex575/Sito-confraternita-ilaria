import React from "react";


const Navbar = () => {
  return (
    <>
        <nav
            className="navbar navbar-expand-lg fixed-top border border-2 border-black bg-light width-screen"
            style={{
                minHeight: "100px",
                color: "#f5f0e6",
            }}
        >

     {/* LOGO SITO NAVBAR SINISTRA */}
      <div className="container-fluid d-flex justify-content-between align-items-center border-0">
        <div className="d-flex justify-content-start align-items-center">
            <div className="border-0">
                <a className="navbar-brand" href="#">
                    <img src="./img/Logo.png" alt="" style={{
                        height: "200px"
                    }} />
                </a>
            </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">

            {/* LINK GUIDA PER LE PAGINE */}
            <div style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)"
            }}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul
                        className="menu-header navbar-nav mb-2 mb-lg-0 font-size-header d-flex flex-nowrap"
                        style={{ whiteSpace: "nowrap" }}
                    >
                    {/*  CHI SIAMO */}
                    <li className="nav-item dropdown">
                    <a
                        className="nav-link"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Chi siamo
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                        <a className="dropdown-item" href="#">
                            Storia
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Missione
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Associati
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Governo
                        </a>
                        </li>
                    </ul>
                    </li>

                    {/* L’ARCICONFRATERNITA/MUSEO  */}

                    <li className="nav-item dropdown">
                    <a
                        className="nav-link"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        L'arciconfraternita
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                        <a className="dropdown-item" href="#">
                            Sagrestia
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Oratorio
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Sala delle assemblee
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Quadreria
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Belisario Corenzio
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            Terrasanta
                        </a>
                        </li>
                    </ul>
                    </li>

                    {/* MISSIONE */}

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Missione
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                            <a className="dropdown-item" href="#">
                                Aree d'intervento
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Altro....
                            </a>
                            </li>
                        </ul>
                    </li>

                    {/* EVENTI / NEWS */}

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Eventi / news
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                            <a className="dropdown-item" href="#">
                                Rassegna stampa
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Comunicati
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Archivio
                            </a>
                            </li>
                        </ul>
                    </li>

                    {/* PERCORSI DI DIDATTICA */}

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                        Percorsi di didattica
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                            <a className="dropdown-item" href="#">
                                Museo per tutti
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Altro....
                            </a>
                            </li>
                        </ul>
                    </li>

                    {/* VISITE GUIDATE */}

                    <li className="nav-item dropdown">
                        <a
                            className="nav-link"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Visite guidate
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                            <a className="dropdown-item" href="#">
                                Info e orari
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                Archivio
                            </a>
                            </li>
                        </ul>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        {/* MENU HAMBURGER RESPONSIVE DESTRA */}
        <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation" 
            > <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    <div style={{paddingBottom: "220px"}}></div>
    </>
  );
}

export default Navbar;