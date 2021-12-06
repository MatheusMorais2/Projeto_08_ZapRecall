import Sugestao from './sugestao.js';
import Titulo from './titulo.js';
export default function Sugestoes() {
    const sugestoesData = [{user: 'badvibesmemes' , img: 'assets/img/bad.vibes.memes.svg', razao: 'Segue você'},
                            {user: 'chibirdart' ,img: 'assets/img/chibirdart.svg', razao: 'Segue você'},
                            {user: 'razoesparaacreditar' ,img: 'assets/img/razoesparaacreditar.svg', razao: 'Novo no Instagram'},
                            {user: 'adorable_animals' ,img: 'assets/img/adorable_animals.svg', razao: 'Segue você'},
                            {user: 'smallcutecats' ,img: 'assets/img/smallcutecats.svg', razao: 'Segue você'}]
    return (
        <div class="sugestoes">
            <Titulo/>
            {sugestoesData.map(elem => <Sugestao data={elem}/>)}
        </div>
    )
}