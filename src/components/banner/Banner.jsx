import React from "react";
import './Banner.scss';

class Banner extends React.Component {

    render() {
        return(
            <section>
                <section className="banner"></section> 

                <section className="voorraad">
                    <section className="container voorraad__container">
                        <section className="voorraad__text">
                            <p><span>10</span> voertuigen op voorraad</p>
                        </section>
                        <section className="voorraad__contact">
                            <a href="#contact">Contact</a>
                        </section>
                    </section>
                </section>
            </section>
        );
    }
}

export default Banner;