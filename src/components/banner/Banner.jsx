import React from "react";
import './Banner.scss';

import axios from "axios";

class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Elements: []
        };
    }

    getCarCount() {
        axios.get("https://www.folduxrp.nl/mosleys/staff/public/api/cars", {}).then(res => {
        const data = res.data.length
        console.log(data);
        this.setState({
            data
        })

        })
        .catch((error) => {
        console.log(error)
        })
    }

    componentDidMount() {
        this.getCarCount();
    }

    render() {
        return(
            <section>
                <section className="banner"></section> 

                <section className="voorraad">
                    <section className="container voorraad__container">
                        <section className="voorraad__text">
                            <p><span>{this.state.data}</span> voertuigen op voorraad</p>
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