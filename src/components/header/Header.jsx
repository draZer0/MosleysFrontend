import React from "react";
import logo from '../../assets/img/logo.png';
import './Header.scss';

class Header extends React.Component {

    render() {

        return(
            <header className="header">

                <figure className="header__figure">
                    <img src={logo} alt="Logo van Mosley's car dealer"/>
                </figure>

                <section className="header__links">
                    <p>Test link</p>
                </section>

            </header>
        );
    }
}

export default Header;
