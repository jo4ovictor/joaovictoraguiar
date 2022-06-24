import { useState } from "react";
import Button from "./Button";
import "./Perfil.css";

function Perfil({nome, foto, idade}){
    const [numeroVizu, setNumeroVizu] = useState(0);


    function aumentarVizu(){
        setNumeroVizu (numeroVizu+1)
    }
    
    return(
        <div className="card">
            <p className="date"> <h1>Start</h1> </p>
            <p className="noticia"><h1>Free</h1></p>
            <p> 1 User</p>
            <p> 1 Project</p>
            <Button />
        </div>
    );

}
export default Perfil;