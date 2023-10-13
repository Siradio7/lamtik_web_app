/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function MyLinkRouter({ name, to }) {
    return <Link to={to} className="
                        flex
                        items-center
                        justify-center
                        relative
                        text-white
                        px-4
                        h-10
                        outline
                        outline-1
                        rounded-md overflow-hidden
                        outline-slate-800
                        before:w-36
                        before:h-10
                        before:rounded-tl-3xl
                        before:rounded-tr-3xl
                        before:absolute
                        before:top-10
                        before:left-0
                        before:-z-10
                        before:duration-500
                        before:bg-slate-900
                        before:transition-all
                        hover:before:rounded-md
                        hover:before:top-0">
            {name}
        </Link>
}