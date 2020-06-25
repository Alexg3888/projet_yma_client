import React from "react";
import {useForm} from "react-hook-form";
import {API_INSCRIPTION} from "../../constants";
import Axios from "axios";

function InscriptionFormulaire() {
    const {handleSubmit, register, errors} = useForm();
    const onSubmit = values => {
        console.log(values);
        return Axios.post(API_INSCRIPTION, values)
            .then(result => {
                if (result.data['reponse'] == 'utilisateur enregistre'){
                    alert('utilisateur enregistre')
                }

            })

            //TODO YC : Gérer correctement l'erreur d'appel a l'API
            .catch(async (e) => {
                alert('erreur API BackEnd')
            })
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    defaultValue="test@test.com"
                    name="email"
                    ref={register({
                        required: "Champs obligatoire",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Email invalide"
                        }
                    })}/>
                <small className="form-text text-muted text-warning">{errors.email && errors.email.message}</small>
            </div>

            <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input
                    type="password"
                    className="form-control"
                    defaultValue="password123"
                    name="password"
                    ref={register({
                        required: "Champs obligatoire",
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                            message: "Mot de passe invalide"
                        }
                    })}/>
                <small className="form-text text-muted">8 caractères minimum dont un chiffre et une lettre</small>
                <small className="form-text text-muted text-warning">{errors.password && errors.password.message}</small>
            </div>

            <div className="form-group">
                <label htmlFor="prenom">Prénom</label>
                <input
                    className="form-control"
                    name="prenom"
                    defaultValue="test"
                    ref={register({
                        required: "Champs obligatoire",
                        pattern: {
                            value: /^[a-z ,.'-]+$/i,
                            message: "Prenom invalide"
                        }
                    })}/>
                <small className="form-text text-muted text-warning">{errors.prenom && errors.prenom.message}</small>
            </div>

            <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input
                    className="form-control"
                    name="nom"
                    defaultValue="test"
                    ref={register({
                        required: "Champs obligatoire",
                        pattern: {
                            value: /^[a-z ,.'-]+$/i,
                            message: "Nom invalide"
                        }
                    })}/>
                <small className="form-text text-muted text-warning">{errors.nom && errors.nom.message}</small>
            </div>

            <div className="form-group">
                <label htmlFor="num">Numéro</label>
                <input
                    className="form-control"
                    name="num"
                    defaultValue="18"
                    ref={register({
                        required: "Champs obligatoire",
                        pattern: {
                            value: /^[1-9]\d{0,3}(?:[a-zA-Z]{1,2}\d{0,3})?$/i,
                            message: "Numéro invalide"
                        }
                    })}/>
                <small className="form-text text-muted text-warning">{errors.num && errors.num.message}</small>
            </div>

            <div className="form-group">
                <label htmlFor="rue">Rue</label>
                <input
                    className="form-control"
                    name="rue"
                    defaultValue="test rue"
                    ref={register({
                        required: "Champs obligatoire",
                        pattern: {
                            value: /[A-Za-z0-9'\.\-\s\,]/i,
                            message: "Rue invalide"
                        }
                    })}/>
                <small className="form-text text-muted text-warning">{errors.rue && errors.rue.message}</small>
            </div>

            <div className="form-group">
                <label htmlFor="cp">Code postal</label>
                <input
                    className="form-control"
                    name="cp"
                    defaultValue="78001"
                    ref={register({
                        required: "Champs obligatoire",
                        pattern: {
                            value: /^(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$/i,
                            message: "Code Postal invalide"
                        }
                    })}/>
                <small className="form-text text-muted text-warning">{errors.cp && errors.cp.message}</small>
            </div>

            <div className="form-group">
                <label htmlFor="ville">Ville</label>
                <input
                    className="form-control"
                    name="ville"
                    defaultValue="test ville"
                    ref={register({
                        required: "Champs obligatoire",
                        pattern: {
                            value: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/i,
                            message: "Ville invalide"
                        }
                    })}/>
                <small className="form-text text-muted text-warning">{errors.ville && errors.ville.message}</small>
            </div>

            <div className="form-group">
                <label htmlFor="telephone">Numéro de téléphone</label>
                <input
                    className="form-control"
                    name="telephone"
                    defaultValue="0102030405"
                    ref={register({
                        required: "Champs obligatoire",
                        pattern: {
                            value: /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/i,
                            message: "Telephone invalide"
                        }
                    })}/>
                <small className="form-text text-muted text-warning">{errors.telephone && errors.telephone.message}</small>
            </div>

            <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
    )

}

export default InscriptionFormulaire