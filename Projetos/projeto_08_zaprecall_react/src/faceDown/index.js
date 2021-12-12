import Feedback from "../feedback";
import './style.css';

export default function FaceDown({question, index, deckLen, answer, nextCard}) {
    return (
      <div className="card" id='face-down'>
            <header>
                <span className="question-down">
                    {question}
                </span>
                <span className='counter'>
                    {index+1}/{deckLen}
                </span>
            </header>
            <div className="answer-down">
                {answer}
            </div>
            <Feedback nextCard={nextCard(index)}/>
        </div>
    )
} 