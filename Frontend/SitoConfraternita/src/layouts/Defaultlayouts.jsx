import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import 'bootstrap-icons/font/bootstrap-icons.css';

    const Defaultlayout = () => {
        return (
            <>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </>
        )
    }

export default Defaultlayout