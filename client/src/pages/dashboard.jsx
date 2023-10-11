import { MdMenu, MdSearch, MdMessage, MdNotifications, MdSettings } from "react-icons/md"
import { BsFillPeopleFill } from "react-icons/bs"
import { BiSolidCategoryAlt } from "react-icons/bi"
import { FaShoppingCart, FaCubes } from "react-icons/fa"
import { Fade, Zoom } from "react-reveal"
import img_bg from "../assets/profil.jpg"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
    const [showLogoutComponent, setShowLogoutComponent] = useState(false)

    const handleClickProfile = () => {
        setShowLogoutComponent(!showLogoutComponent)
    }

    const navigate = useNavigate()

    const handleClickLogout = () => {
        toast.success(`Déconnexion reussie`, {
            theme: "dark",
            position: "bottom-right"
        })

        setTimeout(() => {
            localStorage.removeItem("user")
            navigate("/signin")
        }, 2000)
    }

    return <div>
        <ToastContainer
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
        />

        <div className="h-14 px-4 bg-slate-900 shadow shadow-black flex items-center justify-between">
            <Zoom>
                <div className="flex items-center space-x-3">
                    <MdMenu className="text-4xl text-blue-500" />
                    <h3 className="font-semi-bold text-xl text-white">Dashboard</h3>
                </div>
            </Zoom>

            <div className="flex items-center space-x-10">
                <Fade top>
                    <div className="flex items-center space-x-2">
                        <input type="search" name="" className="w-64 h-10 text-lg outline outline-1 bg-slate-900 pl-12 pr-3 py-2 rounded-md" />
                        <MdSearch className="text-4xl absolute " />
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <MdMessage className="text-2xl text-blue-700" />
                        </div>

                        <div className="flex items-center">
                            <MdNotifications className="text-2xl text-blue-700" />
                        </div>

                        <div className="flex items-center">
                            <MdSettings className="text-2xl text-blue-700" />
                        </div>
                    </div>
                </Fade>

                <Fade right>
                    <div className="flex">
                        <img src={img_bg} alt="" onClick={handleClickProfile} className="h-10 w-10 rounded-full cursor-pointer" />
                        {
                            showLogoutComponent && <Fade right> <div className="ml-4">
                                <button onClick={handleClickLogout} className="h-10 flex items-center px-4 rounded-md outline outline-1 outline-slate-800 hover:bg-slate-900 bg-slate-800 text-white transition duration-700">Logout</button>
                            </div> </Fade>
                        }
                    </div>
                </Fade>
            </div>
        </div>

        <div className="p-4 space-y-4">
            <div className="flex space-x-4">
                <Zoom>
                    <div className="w-1/4 h-20 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">
                        <FaShoppingCart className="text-5xl" />

                        <div className="flex flex-col space-y-2">
                            <span className="font-bold text-blue-700">145</span>
                            <p className="font-bold">Commandes</p>
                        </div>
                    </div>
                </Zoom>

                <Zoom>
                    <div className="w-1/4 h-20 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">
                        <BsFillPeopleFill className="text-5xl" />

                        <div className="flex flex-col space-y-2">
                            <span className="font-bold text-blue-700">867</span>
                            <p className="font-bold">Clients</p>
                        </div>
                    </div>
                </Zoom>

                <Zoom>
                    <div className="w-1/4 h-20 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">
                        <BiSolidCategoryAlt className="text-5xl" />

                        <div className="flex flex-col space-y-2">
                            <span className="font-bold text-blue-700">239</span>
                            <p className="font-bold">Categories</p>
                        </div>
                    </div>
                </Zoom>

                <Zoom>
                    <div className="w-1/4 h-20 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">
                        <FaCubes className="text-5xl" />

                        <div className="flex flex-col space-y-2">
                            <span className="font-bold text-blue-700">1234</span>
                            <p className="font-bold">Produits</p>
                        </div>
                    </div>
                </Zoom>
            </div>

            <div className="flex space-x-4">
                <div className="w-1/2 h-80 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">

                </div>

                <div className="w-1/2 h-80 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">

                </div>
            </div>

            <div className="flex space-x-4">
                <div className="w-1/2 h-32 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">

                </div>

                <div className="w-1/2 h-32 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">

                </div>
            </div>

            <div className="flex space-x-4">
                <div className="w-1/2 h-32 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">

                </div>

                <div className="w-1/2 h-32 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">

                </div>
            </div>

            <div className="flex space-x-4">
                <div className="w-1/2 h-32 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">

                </div>

                <div className="w-1/2 h-32 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">

                </div>
            </div>

            <div className="flex space-x-4">
                <div className="w-1/2 h-32 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">

                </div>

                <div className="w-1/2 h-32 px-2 space-x-3 flex items-center cursor-pointer hover:bg-slate-500 bg-slate-700 rounded-md">

                </div>
            </div>
        </div>
    </div>
}