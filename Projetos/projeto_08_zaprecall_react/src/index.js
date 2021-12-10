import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './landingPage';
import Game from './game';
import './reset.css';
import './style.css';

function App() {
    const [start, setStart] = React.useState(false)
    
    function startZap() {
        setStart(true);
    }

    return (
        <>
            {!start ? <LandingPage start={startZap} /> : <Game/>}
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));