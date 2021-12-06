import Comentarios from "./comentarios";

export default function Post(props) {
    const {user, userIcon, content, likesIcon, likesUser, likesNumber, coments} = props.data
    return(
        <div className="post">
              <div className="topo">
                <div className="usuario">
                  <img src={userIcon} alt={user}/>
                  {user}
                </div>
                <div className="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div className="conteudo">
                <img src={content}  alt={content}/>
              </div>

              <div className="fundo">
                <div className="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div className="curtidas">
                  <img src={likesIcon} alt={likesUser} />
                  <div className="texto">
                    Curtido por <strong>{likesUser}</strong> e <strong>outras {likesNumber} pessoas</strong>
                  </div>
                </div>

                <Comentarios data={coments}/>
              </div>
        </div>
    )
}