import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './landingPage';
import Game from './game';
import Success from './success';
import Failure from './failure';
import './reset.css';
import './style.css';

function App() {
    const [page, setPage] = React.useState('landing')
    
    function changePage(changeTo) {
        setPage(changeTo);
    }


    
    if (page === 'landing') {
       return <LandingPage changePage={changePage} />
    } else if (page === 'game') {
        return <Game changePage={changePage}/>
    } else if (page === 'success') {
        return <Success changePage={changePage}/>
    } else if (page === 'failure') {
        return <Failure changePage={changePage}/>
    }
}

ReactDOM.render(<App />, document.querySelector(".root"));