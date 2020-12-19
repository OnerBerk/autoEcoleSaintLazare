
import Layout from "../components/Layout"
import styles from "./pages.module.scss"    

const About = () =>(
    <Layout title="A propos">
        <div className={styles.about}>
            <h2> Horaires </h2>
            <p>
                <h3> Code et Bureau </h3>
                <a> Lundi - Vendredi: 10h - 19h</a><br/>
                <a> Samedi 10h - 14h</a><br/>
                <h3> Conduite </h3>
                <a> Lundi - Samedi: 9h - 20h </a><br/>
                <a></a><br/>
            </p>
        </div>
            <img
            className={styles.image}
            src="/static/saintlazare_resultat.webp" />
    </Layout>
)
    export default About