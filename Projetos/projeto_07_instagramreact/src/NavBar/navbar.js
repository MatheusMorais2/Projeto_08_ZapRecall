import Icones from './func/icones.js';
import IconesMobile from './func/icones-mobile.js';
import Logo from './func/logo.js';
import LogoMobile from './func/logo-mobile.js';
import InstagramMobile from './func/instagram-mobile.js';
import Pesquisa from './func/pesquisa.js';

export default function NavBar() {
    return (
        <div className='navbar'>
            <div className="container">
                <Logo/>
                <LogoMobile/>
                <InstagramMobile/>
                <Pesquisa/>
                <Icones/>
                <IconesMobile/>   
            </div>
        </div>
        
    )
}
