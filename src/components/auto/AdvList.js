import React from "react";
import Adv from "./Adv";

import axios from "axios";

class AdvList extends React.Component {

    advClicked = (id) => {
        this.props.advClicked(id);
    }

    constructor(props) {
        super(props);
        this.state = {
            Elements: []
        };
    }

    getCars() {
        axios.get("https://www.folduxrp.nl/mosleys/staff/public/api/cars", {}).then(res => {
        const data = res.data
        const autos = data.map(u =>
            <Adv id={u.id}
                key={u.id}
                merk={u.merk}
                type={u.type}
                prijs={u.prijs}
                bouwjaar={u.bouwjaar}
                categorie={u.categorie}
                transmissie={u.transmissie}
                brandstof={u.brandstof}
                kmstand={u.kmstand}
                foto={u.foto}
                cardClicked={this.cardClicked}
            />
        )

        this.setState({
            autos
        })
        })
        .catch((error) => {
        console.log(error)
        })
    }

    componentDidMount() {
        this.getCars();
    }

    render() {
        return (
        <section className="items">
            {this.state.autos}
        </section>
        );
    }
}

export default AdvList;
