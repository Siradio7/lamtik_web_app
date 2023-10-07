import { Link, Outlet } from "react-router-dom"
import { Bounce, Fade } from "react-reveal"
import { FaProductHunt, FaCubes } from "react-icons/fa"
import { BsFillPeopleFill } from "react-icons/bs"
import react_svg from "../assets/react.svg"

export default function Home() {
    return <div className="min-h-screen bg-slate-900">
        <div className="w-64 min-h-screen shadow shadow-black fixed bg-slate-950 flex flex-col items-center space-y-8 py-4">
            <Bounce>
                <img src={react_svg} alt="Logo Lamtik" title="Lamtik" />
            </Bounce>

            <Fade left>
                <div className="w-full flex flex-col px-2 space-y-3">
                    <Link to={"/customers"} className="w-full h-10 flex items-center px-4 rounded-md hover:bg-slate-800 text-white transition duration-300">
                        <BsFillPeopleFill className="mx-3" /> Clients
                    </Link>
                    
                    <Link to={"/staff"} className="w-full h-10 flex items-center px-4 rounded-md hover:bg-slate-800 text-white transition duration-300">
                        <BsFillPeopleFill className="mx-3" /> Employés
                    </Link>

                    <Link to={"/products"} className="w-full h-10 flex items-center px-4 rounded-md hover:bg-slate-800 text-white transition duration-300">
                        <FaCubes className="mx-3" /> Produits 
                    </Link>

                    <Link to={"/deliveries"} className="w-full h-10 flex items-center px-4 rounded-md hover:bg-slate-800 text-white transition duration-300">
                        <FaProductHunt className="mx-3" /> Fournisseurs
                    </Link>
                    
                    <Link to={"/jobs"} className="w-full h-10 flex items-center px-4 rounded-md hover:bg-slate-800 text-white transition duration-300">
                        <FaProductHunt className="mx-3" /> Postes
                    </Link>
                </div>
            </Fade>
        </div>

        <div className="ml-64 min-h-screen">
            <Outlet />
        </div>
    </div>
}