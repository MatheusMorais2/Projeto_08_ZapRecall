export default function FaceUp({ question, index, deckLen}) {
    return (
        <FaceUp className='card'>
            <span className='counter'>{index + 1}/{deckLen}</span>
            <span className='question'>{question}</span>
            {/* <ion-icon onClick={nextCard} name="arrow-undo"></ion-icon> */}
            <ion-icon onClick={turnCard} name="arrow-undo"></ion-icon>
        </FaceUp>
    )
}