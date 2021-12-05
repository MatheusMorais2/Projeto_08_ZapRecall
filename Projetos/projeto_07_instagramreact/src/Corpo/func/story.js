export default function Story(props) {
    const {src, text} = props.banana;
    return (
        <div className="story">
          <div className="imagem">
            <img src={src} alt={text}/>
          </div>
          <div className="usuario">
            {text}
          </div>
        </div>
    )
}