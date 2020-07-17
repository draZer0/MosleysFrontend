import React from "react";
import logo from '../../assets/img/logo.png';
import './Header.scss';

class Header extends React.Component {

    render() {

        return(
            <header className="header">

                <section className="container">
                    <figure className="header__figure">
                        <a href="#">
                            <img src={logo} alt="Logo van Mosley's car dealer"/>
                        </a>
                    </figure>

                    <section className="header__links">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#aanbod">Aanbod</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </section>
                </section>

            </header>
        );
    }
}

export default Header;
