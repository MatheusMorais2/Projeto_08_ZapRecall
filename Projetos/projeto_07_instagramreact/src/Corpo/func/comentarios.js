import Comentario from './comentario.js';
import Comentar from './Comentar.js';

export default function Comentarios(props) {
    const coments = props.data;
    console.log(coments);
    return (<div>
            <span></span>
            {coments.map(elemento => <Comentario data={elemento}/>)}
            <Comentar data={props}/>
        </div>
    )
}