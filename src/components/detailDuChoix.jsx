import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
library.add(fas, far);


function AffichageDetails({choix}) {
    return(
        <section className='logement_detail'>
            <div className='logement_detailPremier'>
                <h1>
                    <p className='logement_titre'>{choix.title}</p>
                    <Link to= {`${choix.location}`} target= "_blank" className='logement_titre_lieu'>{choix.location}</Link>
                </h1>
                <nav>
                    {choix.tags.map((element, index) =>
                    <button key={index}>{element}</button>
                    )}
                </nav>
            </div>    
            <div className='logement_detailDeuxieme'>
                    <img src = {choix.host.picture} alt = "Dessin d'un chat :)"/>
            </div>
        </section>
    )
}
export default AffichageDetails;