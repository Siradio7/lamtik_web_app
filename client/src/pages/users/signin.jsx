import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { useSigninMutation } from "../../api/auth"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from "react"
import { Bounce } from "react-reveal"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import MyLinkRouter from "../../components/link"
import "./signin.css"

const schema = yup.object().shape({
    email: yup.string().email().required('Email obligatoire'),
    password: yup.string().min(3, 'Il faut au moins 4 caracteres').required()
})

export default function Signin() {
    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const navigate = useNavigate()
    const [login, { data, isLoading, isSuccess, isError }] = useSigninMutation()

    useEffect(() => {
        if (isSuccess) {
            localStorage.setItem('user', JSON.stringify(data))
            toast.success(`Bienvenue ${data.user.first_name + ' ' + data.user.last_name}`, {
                theme: "dark",
                position: "bottom-right"
            })

            setTimeout(() => {
                reset()
                navigate('/')
            }, 2000)
        }
    }, [data, isSuccess, navigate, reset])

    useEffect(() => {
        if (isError) {
            toast.error("Erreur les identifiants sont incorrects", {
                theme: "dark",
                position: "bottom-right"
            })
        }
    })

    const onSubmit = (data) => {
        login(data)
    }

    return <div className="flex items-center space-x-4 justify-center min-h-screen bg">
        <ToastContainer
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
        />

        <Bounce>
            <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col p-6 space-y-4 bg-slate-600 w-1/3 rounded-md h-2/3">
                <h2 className="text-center text-xl font-semibold mb-6">Sign In</h2>
                <input {...register("email")} type="email" placeholder="Email" name="email" className="h-10 rounded-md bg-slate-700 px-2 mb-2" />
                <input {...register("password")} type="password" placeholder="Password" name="password" className="h-10 rounded-md bg-slate-700 px-2 mb-6" />

                <div className="flex items-center justify-between pt-4">
                    <button type="submit" className="h-10 flex items-center px-4 rounded-md outline outline-1 outline-slate-800 hover:bg-slate-900 bg-slate-800 text-white transition duration-700">{isLoading ? 'Loading...' : 'Submit'}</button>
                    <MyLinkRouter to={"/signup"} name={"Sign Up"} />
                </div>
            </form>
        </Bounce>
    </div>
}
