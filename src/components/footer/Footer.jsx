import React from "react";
import './Footer.scss';

class Footer extends React.Component {

    render() {

        return(
            <footer>
                <section className="container">
                    <p>Copyright &copy; 2020 <a href="https://www.folduxrp.nl/">FolduxRP</a></p>
                    <p>Website ontwikkeling door drazero</p>
                </section>
            </footer>
        );
    }
}

export default Footer;
