import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import { useSignupMutation } from "../../api/auth"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import { Bounce } from "react-reveal"
import "react-toastify/dist/ReactToastify.css"

const schema = yup.object().shape({
    email: yup.string().email().required('Email obligatoire'),
    password: yup.string().min(3, 'Il faut au moins 4 caracteres').required()
})

export default function Signup() {
    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const navigate = useNavigate()
    const [signup, { data, isLoading, isSuccess, isError }] = useSignupMutation()

    useEffect(() => {
        if (isSuccess) {
            toast.success(`Inscription effectuée avec succès`, {
                theme: "dark",
                position: "bottom-right"
            })

            setTimeout(() => {
                reset()
                navigate('/signin')
            }, 2000)
        }
    }, [data, isSuccess, navigate, reset])

    useEffect(() => {
        if (isError) {
            toast.error("Une erreur est survenue veuillez réessayer", {
                theme: "dark",
                position: "bottom-right"
            })
        }
    })

    const onSubmit = (data) => {
        signup(data)
    }

    return <div className="flex items-center justify-center min-h-screen">
        <ToastContainer
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
        />

        <Bounce>
            <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col p-6 space-y-4 bg-slate-600 w-1/3 rounded-md h-3/4">
                <h2 className="text-center text-xl font-semibold mb-6">Sign Up</h2>
                <input {...register("first_name")} type="text" placeholder="First name" name="first_name" className="h-10 rounded-md bg-slate-700 px-2 mb-2" />
                <input {...register("last_name")} type="text" placeholder="Last name" name="last_name" className="h-10 rounded-md bg-slate-700 px-2 mb-2" />
                <input {...register("email")} type="email" placeholder="Email" name="email" className="h-10 rounded-md bg-slate-700 px-2 mb-2" />
                <input {...register("password")} type="password" placeholder="Password" name="password" className="h-10 rounded-md bg-slate-700 px-2 mb-6" />

                <div className="flex items-center justify-between pt-4">
                    <button type="submit" className="h-10 flex items-center px-4 rounded-md outline outline-1 outline-slate-800 hover:bg-slate-900 bg-slate-800 text-white transition duration-700">{isLoading ? 'Loading...' : 'Sign Up'}</button>
                    <Link to={"/signin"} className="h-10 flex items-center px-4 rounded-md outline outline-1 outline-slate-800 hover:bg-slate-800 text-white transition duration-700">Sign in</Link>
                </div>
            </form>
        </Bounce>
    </div>
}