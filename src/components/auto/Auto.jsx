import React from "react";
import './Auto.scss';
import AdvList from "./AdvList";

class Auto extends React.Component {

    advClicked = (id) => {
        console.log(`Gekozen id: ${id}`);
    }

    render() {

        return(
            <section className="container" id="aanbod">
                <AdvList advClicked/>
            </section>
        );
    }
}

export default Auto;
