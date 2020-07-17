import React from "react";
import logo from '../../assets/img/logo.png';
import './Header.scss';

class Header extends React.Component {

    render() {

        return(
            <header className="header" id="home">

                <section className="container header__container">
                    <figure className="header__figure">
                        <a href="#home">
                            <img src={logo} alt="Logo van Mosley's car dealer"/>
                        </a>
                    </figure>

                    <nav className="header__links">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#aanbod">Aanbod</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </section>

            </header>
        );
    }
}

export default Header;
