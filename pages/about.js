
import Layout from "../components/Layout"
import styles from "./pages.module.scss"    

const About = () =>(
    <Layout title="A propos">
            <img
            className={styles.image}
            src="/static/saintlazare_resultat.webp" />
    </Layout>
)
    export default About