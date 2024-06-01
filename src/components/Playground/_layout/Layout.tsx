import { Outlet } from "react-router-dom"
import { Sidebar } from "../_components/Sidebar"

export const Layout = () => {
    return (
        <section className="flex gap-8">
            <Sidebar/>
            <Outlet/>
        </section>
    )
}