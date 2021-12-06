import userData from "/home/matheus/Projetos/projeto_07_instagramreact/src/userData.js";
import Comentario from './comentario';
import ReactDOM from 'react-dom';

export default function Comentar(props) {
 
    function pegarInput(event) {
        const icon = event.target;
        const comentBox = icon.parentElement.parentElement
        const cmntTxt = icon.previousElementSibling.value;
        const cmntUser = userData().name;
        const props = {cmntUser, cmntTxt};
    
        ReactDOM.render(<Comentario data={props}/>, comentBox.firstChild)
    }
    
    return (
        <div className='comentario'>
            <input type="text" placeholder="Adicionar um comentario"/>
            <ion-icon onClick={(elemento) => pegarInput(elemento)} name="paper-plane-outline"></ion-icon>
        </div>
    )
}