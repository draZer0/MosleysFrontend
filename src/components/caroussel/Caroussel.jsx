import React from "react";
import Slider from "react-slick";
import './Caroussel.scss';

import dewbauchee from '../../assets/img/dewbauchee.png';
import grotti from '../../assets/img/grotti.png';
import pegassi from '../../assets/img/pegassi.png';
import pfister from '../../assets/img/pfister.png';
import truffade from '../../assets/img/truffade.png';
import vapid from '../../assets/img/vapid.png';

class Caroussel extends React.Component {

    render() {

        const settings = {
            arrows: false,
            dots: false,
            infinite: true,
            slidesToShow: 5,
            autoplay: true,
            speed: 8000,
            autoplaySpeed: 0,
            pauseOnHover: false,
            touchMove: false,
            focusOnSelect: false,
            wipe: false,
            cssEase: "linear"
        };
        
        return (
            <section className="caroussel">
                <Slider {...settings}>
                    <div>
                        <img src={dewbauchee} alt="Logo van dewbauchee"/>
                    </div>
                    <div>
                        <img src={grotti} alt="Logo van grotti"/>
                    </div>
                    <div>
                        <img src={pegassi} alt="Logo van pegassi"/>
                    </div>
                    <div>
                        <img src={pfister} alt="Logo van pfister"/>
                    </div>
                    <div>
                        <img src={truffade} alt="Logo van truffade"/>
                    </div>
                    <div>
                        <img src={vapid} alt="Logo van vapid"/>
                    </div>
                </Slider>
            </section>
        );
    }
}

export default Caroussel;