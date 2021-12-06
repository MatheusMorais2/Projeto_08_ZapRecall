export default function Usuario(props) {
    const {name, displayname, img} = props.data;
    return (
        <div class="usuario">
            <img src={img} alt={name}/>
            <div className="texto">
              <strong>{name}</strong>
              {displayname}
            </div>
        </div>
    )
}