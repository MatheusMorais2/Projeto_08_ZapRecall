import logo from '../assets/Vector.png';
import './style.css';

export default function Logo() {
    return (
        <header className='logo'>
            <img src={logo} alt='ZapRecall Logo' />
            <span>ZapRecall</span>
        </header>
    )
}