import Logo from "../logo"
import './style.css'

export default function Failure() {
    return (
        <>
            <Logo />
            <div id='failure-screen'>
                <h1>Putz.. 😥</h1>
                <h2>Você esqueceu alguns flashcards..<br />Não desanime! Na próxima você consegue!</h2>
            </div>
        </>

    )
}