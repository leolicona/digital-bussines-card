import React from "react"
import Head from "./Head/Head"
import Contact from "./Contact/Contact"
import Perfil from "./Perfil/Perfil"
import SocialMedia from "./SocialMedia/SocialMedia"
//import "./global-styles/global.css"

export default function App() {
    return(
        <main>
            <Head/>
            <Contact/>
            <Perfil/>
            <SocialMedia/>
        </main>
    )
}