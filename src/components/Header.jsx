import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../images/english-learning-logo-simplified.svg';

//*Router Dom'da yönlendirme yapabilmek adına link elementine ihtiyacımız olduğu için bunu import ettik. Örneğin bir nav menü yapmak ister ve bu menüde yer alan sekmelere geçmek istersek menüdeki istediğim seçenekleri link komponenti ile sarmalar ve bu linklerle vereceğimiz "to" ifadesiyle gidilecek sekmeye yönelik yolu Routes içindeki Route ile yakalarız. Router Dom'daki temel mantık aslında bu. Routelar oluşsun pathler verilsin;linklerle istenen yerlerde kullanım sağlanarak "to" sayesinde pathlere ve oradanda istenen komponente erişim sağlansın...

function Header() {
    const location = useLocation();  //*Bunu kullanarak, navbarda tıklanan alanı kontrol ederek ona göre navbar içinde bulunan elemanlara class yapıları tanımladık
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='header'>
            <div style={{ color: "white", width: "65px", marginLeft: "25px", marginRight: "55px" }}>
                <img src={logo} alt="" />
            </div>
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" className={location.pathname === '/' ? 'active-link links' : 'links'}>Ana Sayfa</Link>
                <Link to="/word" className={location.pathname === '/word' ? 'active-link links' : 'links'}>Sözcükler</Link>
                <Link to="/conjunctions" className={location.pathname === '/conjunctions' ? 'active-link links' : 'links'}>Bağlaçlar</Link>
                <Link to="/idioms" className={location.pathname === '/idioms' ? 'active-link links' : 'links'}>Deyimler</Link>
                <Link to="/phrasalverbs" className={location.pathname === '/phrasalverbs' ? 'active-link links' : 'links'}>Deyimleşmiş Fiiller</Link>
                <Link to="/stories" className={location.pathname === '/stories' ? 'active-link links' : 'links'}>Hikayeler</Link>
                <Link to="/speaking" className={location.pathname === '/speaking' ? 'active-link links' : 'links'}>Konuşma</Link>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active-link links' : 'links'}>İletişim</Link>
                <Link to="/about" className={location.pathname === '/about' ? 'active-link links' : 'links'}>Hakkımızda</Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default Header;