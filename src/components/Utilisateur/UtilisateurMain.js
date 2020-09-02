import React from "react";
import UtilisateurDonnees from "./UtilisateurDonnees";
import {supprimerPanier} from "../../services/PanierService";
import {Link} from "react-router-dom";

function UtilisateurMain(props) {

    return (
        <>
            {/* <!-- Carousel  --> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/HomePage/slidepagemoncompte.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            {/* <!-- Fin carousel --> */}

            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <UtilisateurDonnees/>
                    </div>
                    <div className="col mt-1">
                        <img src="/HomePage/moncomptephoto.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <div className="row" id="bouton-historique">
                    {/*****Bouton historique des commandes*/}
                    <button type="button" className="btn btn-warning mt-5" >
                        <Link className='nav-link text-dark' to="/historique">Historique des commandes</Link>
                    </button>

                    {/*****FIN Bouton historique des commandes*/}
                </div>
            </div>

        </>
    )

}

export default UtilisateurMain;