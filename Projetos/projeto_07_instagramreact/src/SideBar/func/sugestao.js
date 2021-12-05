export default function Sugestao(props) {
    const {user, img, razao} = props.data;
    return (
        <div className='sugestao'>
            <div class="usuario">
                <img src={img} alt={user}/>
                <div class="texto">
                    <div class="nome">{user}</div>
                    <div class="razao">{razao}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
            
        </div>
    )
}