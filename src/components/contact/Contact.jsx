import React from "react";
import contact from '../../assets/img/contact.jpg';
import jack from '../../assets/img/jack.png';
import './Contact.scss';

class Contact extends React.Component {

    render() {
        return(
            <section className="contact" id="contact">

                <section className="container contact__container">

                    <figure>
                        <img src={contact} alt="Afbeelding van Mosley's garage van buitenaf"/>
                    </figure>

                    <article className="data">
                        <h1>Mosley's</h1>
                        <ul>
                            <li>Davis Avenue 1</li>
                            <li>1905 BV, Los Santos</li>
                        </ul>
                        <ul>
                            <li>T: 06 12345678</li>
                            <li>E: sales@mosleys.nl</li>
                        </ul>
                        <div className="data__verkoper">
                            <figure>
                                <img src={jack} alt="Foto van verkoper Jack Driessen"/>
                            </figure>
                            <section>
                                <h2>Jack Driessen</h2>
                                <p>Eigenaar en verkoper</p>
                            </section>
                        </div>
                    </article>
                </section>

            </section>
        );
    }
}

export default Contact;