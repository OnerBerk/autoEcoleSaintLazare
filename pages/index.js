import Layout from "../components/Layout"
import Link from "next/link"
import {faHandPointRight, faHandPointLeft, faCar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./pages.module.scss"
import React from "react";

const Index = () =>(
    <Layout title="Auto Ecole Saint Lazare ">
        <img
            className={styles.carImage}
            src="../static/aston-re.webp"
            alt="voiture qui roule "/>
            <div className={styles.textAccueil}>
                <h1> Envie d'évasion ?</h1>
                <p>
                Que ce soit votre première fois au volant
                ou que vous ayez besoin d’une remise à niveau avant votre examen,
                nous donnons des cours de code, et de conduite à Avignon
                qui vous rendront plus sûr et plus confiant.
                </p>
            </div>
        <div className={styles.liens}>
        <Link href="/forfait"><a>
            <FontAwesomeIcon  icon={faHandPointRight} />
              ... Nos Forfaits ...
            <FontAwesomeIcon  icon={faHandPointLeft} />
        </a></Link>
        </div>
        <div >
            <footer className={styles.footer}>
                &copy; Auto école Saint-Lazare X OnAir  {new Date().getFullYear()}<br/>
            </footer>
        </div>
    </Layout>
)

export default Index