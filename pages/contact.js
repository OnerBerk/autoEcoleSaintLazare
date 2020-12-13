import Layout from "../components/Layout"
import MapDisplayer from "../components/Map/mapDisplayer"
import styles from './pages.module.scss'

const Contact =()=>(
  
  <Layout title="Nous contacter">
      <div className={styles.contactContainer}>
          <p>
            <a> Auto école Saint Lazare</a>
            <a>4 Place Saint-Lazare,</a>
            <a> 84000 Avignon</a>
          </p>
          <p> <a>Vous pouvez nous contacter par mail</a> </p>
          <a href="mailto:mahir@gmail.com" > <span className={styles.mail}>ICI</span> </a>

          <p>
            <a> Ou par Telephone : 09.82.39.54.63 </a>
          </p>
        
      </div>
      <MapDisplayer />
    </Layout>
)

export default Contact