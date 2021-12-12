import logo from '../assets/Vector.png';
import playbtn from '../assets/playbutton.png';
import './style.css';

export default function LandingPage ({changePage}) {
    return (
        <div id='container-lp'>
            <span id='logo-lp'>
                <img src={logo} alt='ZapRecall logo' />
                <p>ZapRecall</p>
            </span>
            <button id='start-lp' onClick={() => changePage('game')}>
                <span>Praticar React </span>
                <span>
                    <img src={playbtn} alt='Play' />
                    <img src={playbtn} alt='Play' />
                </span>
            </button>
        </div>
    )
}