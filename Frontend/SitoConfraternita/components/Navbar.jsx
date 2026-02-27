import React from "react";


const Navbar = () => {
  return (
    <>
        <nav
            className="navbar navbar-expand-lg fixed-top border border-2 border-black bg-light"
            style={{
                minHeight: "100px",
                color: "#f5f0e6",
            }}
        >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div>
            <a className="navbar-brand" href="#">
                <img src="./public/img/Logo.png" alt="" style={{
                    height: "200px"
                }} />
            </a>
        </div>

        <div>
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

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

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
    </nav>
    <div style={{paddingBottom: "220px"}}></div>
    </>
  );
}

export default Navbar;