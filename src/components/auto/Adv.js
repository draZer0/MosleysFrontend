import React from "react";

class Adv extends React.Component {

    onAdvClicked = () => {
        this.props.advClicked(this.props.id);
    }

    render() {
        return (
            <article className="item">
                <figure>
                    <img src={this.props.foto} alt="Afbeelding van een voertuig"/>
                </figure>

                <article className="item__info">
                    <header className="item__header">
                        <h3>{this.props.merk} {this.props.type}</h3>
                        <h3>{this.props.prijs} </h3>
                    </header>
                    <main className="item__main">
                        <div>
                            <p>Bouwjaar:</p>
                            <p>{this.props.bouwjaar}</p>
                        </div>
                        <div>
                            <p>Categorie:</p>
                            <p>{this.props.categorie}</p>
                        </div>
                        <div>
                            <p>Transmissie:</p>
                            <p>{this.props.transmissie}</p>
                        </div>
                        <div>
                            <p>Brandstof:</p>
                            <p>{this.props.brandstof}</p>
                        </div>
                        <div>
                            <p>Kilometer stand:</p>
                            <p>{this.props.kmstand}</p>
                        </div>
                    </main>
                    <p>Neem contact op met onze verkoopadviseur bij interesse in dit voertuig.</p>
                </article>

            </article>
        

        );
    }
}

export default Adv;
