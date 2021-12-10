export default function FaceDown() {
    return (
        <>
            <header>
                <span>
                    {question}
                </span>
                <span className='counter'>
                    {index}/{deckLen}
                </span>
            </header>
            <div>
                {answer}
            </div>
            <Feedback/>
        </>
    )
} 