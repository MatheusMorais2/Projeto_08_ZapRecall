import Usuario from "./func/usuario";
import Sugestoes from "./func/sugestoes";
import Links from './func/links.js';
import Copyright from "./func/copyright";

export default function Sidebar() {
    return(
        <div className='sidebar'>
            <Usuario/>
            <Sugestoes/>
            <Links/>
            <Copyright/>    
        </div> 
    )
}