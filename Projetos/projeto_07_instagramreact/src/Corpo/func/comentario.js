export default function Comentario(props) {
    const {cmntUser, cmntTxt} = props.data;
    console.log(cmntUser);
    return (
        <div className="comentario">
            <span>
                <strong>{cmntUser}</strong> {cmntTxt}
            </span>
            <ion-icon name="heart-outline"></ion-icon>
        </div>
    )
}