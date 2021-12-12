import Logo from '../logo';
import Card from '../card';
import React from 'react';
import './style.css';

let score = 0;

export default function Game({changePage}) {
    let deck = [{ question: 'O que é JSX ?', answer:'Uma extensão de linguagem do JavaScript'  ,score: 0},
        { question: 'O React é __', answer:'uma biblioteca JavaScript para construção de interfaces'  ,score: 0 },
        { question: 'Componentes devem iniciar com __', answer:'letra maiúscula'  ,score: 0 },
        { question: 'Podemos colocar __ dentro do JSX', answer:'expressões'  ,score: 0 },
        { question: 'O ReactDOM nos ajuda __', answer:'interagindo com a DOM para colocar componentes React na mesma'  ,score: 0 },
        { question: 'Usamos o npm para __', answer:'gerenciar os pacotes necessários e suas dependências'  ,score: 0 },
        { question: 'Usamos props para __', answer:'passar diferentes informações para componentes'  ,score: 0 },
        { question: 'Usamos estado(state) para __', answer:'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'  ,score: 0 }];

    
    const [question, setQuestion] = React.useState(0);

/*     function nextCard(e, index) {
        if (e.target.innerText === 'Zap!') score++;
        if (index < 8) {
            setQuestion(question + 1);
        } else if (score === 8){
            changePage('success');
        } else {
            changePage('failure');
        }
    } */

    function nextCard(index) {
        return function (e) {
            if (e.target.innerText === 'Zap!') score++;
            if (index < 7) {
                setQuestion(question + 1);
            } else if (score === 8) {
                changePage('success');
            } else {
                changePage('failure');
            }
        }
    }

    return (
        <>
            <Logo/>
            <div id='container-card'>
                <Card card={deck[question]} index= {question} deckLen={deck.length} nextCard={nextCard}/>
            </div> 
        </>
    )
}