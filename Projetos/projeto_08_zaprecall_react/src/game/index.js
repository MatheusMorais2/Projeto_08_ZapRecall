import Logo from '../logo';
import Card from '../card';
import React from 'react';

import './style.css';

let score = 0;

export default function Game({changePage}) {
    let deck = [{ question: 'O que é JSX ?', answer:'Uma extensão de linguagem do JavaScript' },
        { question: 'O React é __', answer:'uma biblioteca JavaScript para construção de interfaces'  },
        { question: 'Componentes devem iniciar com __', answer:'letra maiúscula'  },
        { question: 'Podemos colocar __ dentro do JSX', answer:'expressões'  },
        { question: 'O ReactDOM nos ajuda __', answer:'interagindo com a DOM para colocar componentes React na mesma'  },
        { question: 'Usamos o npm para __', answer:'gerenciar os pacotes necessários e suas dependências'  },
        { question: 'Usamos props para __', answer:'passar diferentes informações para componentes'  },
        { question: 'Usamos estado(state) para __', answer:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }];

    const [question, setQuestion] = React.useState(0);
    const [face, setFace] = React.useState(true);
    const [showButtons, setShowButtons] = React.useState(false);
    const [color, setColor] = React.useState('#000');

    function nextCard(e) {
        if (e.target.innerText === 'Zap!') score++;
        if (question < deck.length -1) {
            turnCard();
            givenAnswer();
            setQuestion(question + 1);
        } else if (score === deck.length) {
            changePage('success');
        } else {
            changePage('failure');
        }
    }

    function changeColor(innerText) {
        if (innerText === 'Aprendi agora') {
            setColor('5px solid #000000');
        } else if (innerText === 'Não lembrei') {
            setColor('5px solid #F64848');
        } else if (innerText === 'Lembrei com esforço') {
            setColor('5px solid #62DB38');
        } else if (innerText === 'Zap!') {
            setColor('5px solid #FFEF61');
        }
    }

    function turnCard() {
        setFace(!face);
    }

    function givenAnswer() {
        setShowButtons(!showButtons);
    }

    function buttonHandler(e) {
        changeColor(e.target.innerText);
        givenAnswer();
    }
    
    return (
        <>
            <Logo/>
            <div id='container-card'>
                    <Card data-identifier="flashcard"
                        card={deck[question]}
                        questionNumber={question}
                        deckLen={deck.length}
                        nextCard={nextCard}
                        face={face}
                        turnCard={turnCard}
                        givenAnswer={givenAnswer}
                        showButtons={showButtons}
                        buttonHandler={buttonHandler}
                        color={color}
                    />
            </div> 
        </>
    )
}