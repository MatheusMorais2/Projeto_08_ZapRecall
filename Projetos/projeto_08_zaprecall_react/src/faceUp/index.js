export default function FaceUp({ question, questionNumber, deckLen, turnCard, color}) {
    
    return (
        <div className='card' style={{color}}>
            <span data-identifier="counter" className='counter'>{questionNumber + 1}/{deckLen}</span>
            <span className='question'>{question}</span>
            <ion-icon onClick={turnCard} name="arrow-undo"></ion-icon>
        </div>
    )
}