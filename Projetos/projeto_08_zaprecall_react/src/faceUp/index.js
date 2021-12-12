export default function FaceUp({ question, index, deckLen, turnCard}) {
    
    return (
        <div className='card'>
            <span className='counter'>{index + 1}/{deckLen}</span>
            <span className='question'>{question}</span>
            <ion-icon onClick={turnCard} name="arrow-undo"></ion-icon>
        </div>
    )
}