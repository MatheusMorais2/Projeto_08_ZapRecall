import ReactDOM from 'react-dom';
import FundoMobile from './FundoMobile/fundo-mobile';
import Corpo from '/home/matheus/Projetos/projeto_07_instagramreact/src/Corpo/corpo.js';
import Navbar from './NavBar/navbar';

function App() {
    return (
        <div>
            <Navbar/>
            <Corpo/>
            <FundoMobile/>
        </div>
    )
   
}

ReactDOM.render(<App/>, document.querySelector(".root"));