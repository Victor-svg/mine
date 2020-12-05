import React, { useEffect } from 'react';
import Img from './cartesec.JPG';
import Aos from "aos";
import "aos/dist/aos.css";

const Cards = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return (
        <section id="accueil">
            <div data-aos ="fade-up" className="Accueil">
                <h1></h1>
                <div className="cartes">
                    <div data-aos ="fade-right" className="grande">
                        <h1> Titre Grande Section </h1>
                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    </div>
                    <div className="petite">
                        <h1> Titre de la Petite </h1>
                        <p>
                        <img src={Img} alt="mon image" />
                        <button className="butHome">Voir</button>
                        </p>

                    </div>
                    
                </div>
            </div>
        </section>
    );

};

export default Cards;