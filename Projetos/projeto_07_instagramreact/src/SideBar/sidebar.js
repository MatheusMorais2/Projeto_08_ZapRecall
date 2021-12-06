import Usuario from "./func/usuario";
import Sugestoes from "./func/sugestoes";
import Links from './func/links.js';
import Copyright from "./func/copyright";
import userData from "../userData";

export default function Sidebar() {
    
    return(
        <div className='sidebar'>
            <Usuario data={userData()}/>
            <Sugestoes/>
            <Links/>
            <Copyright/>    
        </div> 
    )
}