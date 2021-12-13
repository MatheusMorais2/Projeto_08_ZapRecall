import ContainerButtons from "../containerButtons";
import './style.css';



export default function FaceDown({question, questionNumber, deckLen, answer, nextCard, showButtons, buttonHandler, color}) {
    return (
      <div className="card" id='face-down' style={{color}}>
            <header>
                <span className="question-down">
                    {question}
                </span>
                <span data-identifier="counter" className='counter'>
                    {questionNumber+1}/{deckLen}
                </span>
            </header>
            <div className="answer-down">
                {answer}
            </div>
            <ContainerButtons nextCard={nextCard} showButtons={showButtons} buttonHandler={buttonHandler}/>
        </div>
    )
} 