import Logo from "../logo"
import './style.css'

export default function Success() {
    return (
        <>
            <Logo/>
            <div id="success-screen">
                <h1>PARABÉNS! 🥳</h1>
                <h2>Você não esqueceu de nenhum flashcard!</h2>
            </div>
        </>

    )
}