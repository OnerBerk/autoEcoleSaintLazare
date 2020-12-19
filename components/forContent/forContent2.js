import React from "react"
import styles from "./forContent.module.scss";

const ForContent1 = () => {
    return (
        <div className={styles.content2}>
            <h1> Forfait Code seul </h1>
            <div className={styles.forcont2}>
                <h2> <span>Le forfait comprend </span></h2>
                <p>
                    <a>Cours de code et tests illimités *</a><br/>
                    <a> Suivis des démarches ANTS</a><br/>
                    <a>Code en ligne</a><br/>
                </p>
                <h2><span>Les pièces à fournir </span> </h2>
                <p>
                    <a>Photocopie recto-verso d’une pièce d’identité en cours de validité (CNI, carte de séjour, …)</a><br/>
                    <a>Photocopie d’un justificatif de domicile de moins de 3 mois</a><br/>
                </p>
                <p> * Valable 12 mois après inscription </p>
            </div>
            <p>

            </p>
        </div>
    )
}
export default ForContent1