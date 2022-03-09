import React from "react"
import Picture from "./images/leo_licona.jpeg"
import "./styles.css"

export default function Head() {
    return(
        <div className="head">
            <img className="head--img" src={Picture} alt="foto de perfil"/>
            <h1>Leo Licona</h1>
            <h2>Frontend Developer</h2>
            <p>leolicona.dev@gmail.com</p>
        </div>
    )
} 