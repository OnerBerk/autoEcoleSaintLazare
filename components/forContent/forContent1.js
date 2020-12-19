import React from "react"
import styles from "./forContent.module.scss";

const ForContent1 = () => {
    return (
        <div className={styles.content1}>
            <h1> Forfait 31 h </h1>
            <div className={styles.forcont1}>
                <h2> <span>Le forfait comprend </span></h2>
                <p>
                    <a> Frais de démarches administratives</a><br/>
                    <a>Cours de code et tests illimités *</a><br/>
                    <a>30 heures de conduite *</a><br/>
                    <a>1 heures d'evaluation</a><br/>
                    <a>Kit Pédagogique</a><br/>
                    <a>Code en ligne</a><br/>
                    <a>Accompagnement à l’examen de conduite</a><br/>
                </p>
                <h2><span>Les pièces à fournir </span> </h2>
                <p>
                    <a>Photocopie recto-verso d’une pièce d’identité en cours de validité (CNI, carte de séjour, …)</a><br/>
                    <a>Photocopie d’un justificatif de domicile de moins de 3 mois</a><br/>
                    <a>4 e-photos d’identité</a><br/>
                    <a>Photocopie de la japd pour les personnes de nationalité francaise entre 18 et 25 ans</a><br/>
                    <a>Photocopie de l’ASSR 2 pour les personnes née apres le 1er janvier 1988</a><br/>
                    <a>5 enveloppes format A5 timbrées au tarif en vigueur</a><br/><br/>
                </p>
                <p> * Valable 12 mois après inscription </p>
            </div>
            <p>

            </p>
        </div>
    )
}
export default ForContent1