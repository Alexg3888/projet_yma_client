import React, {useEffect, useState} from "react";
import {postValidationPanier} from "../../services/ApiService";
import Error from "../Error";

function ValidationPanier() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // TODO YC : Prevoir le cas ou le panier est vide
        postValidationPanier()
            .then(async (result) => {
                if (result.data['reponse'] == 'Commande enregistree') {
                    setIsLoaded(true)
                }
            })
            .catch((error) => setError(error))
            }, [])

    return (
        <>
            {
                (error) ?
                    (
                        <>
                            <div>Une erreur est survenue</div>
                            <Error error={error}/>
                        </>
                    )
                    : (<> {!isLoaded && (
                        <div class="d-flex justify-content-center pt-5">
                            <div className="spinner-grow text-warning" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        )}
                        {isLoaded && (
                        <div>
                            <div className="jumbotron-validation jumbotron-fluid">
                                <div className="container">
                                    <h1 className="display-4">Votre panier a bien été validé</h1>
                                    <p className="lead">le règlement se fera par cb ou espéce, nous n'acceptons plus les chèques</p>
                                </div>
                            </div>
                        </div>)}
                    </>
                )
            }
        </>
    )
}

export default ValidationPanier;