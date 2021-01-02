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
          <a href="mailto:sl.auto.ecole@gmail.com" >
             
               <img 
               className={styles.mail}
               src="/static/mail.png" />

          </a>

          <p>
            <a> Ou par Telephone : 06.58.24.34.34 </a>
          </p>
        
      </div>
      <MapDisplayer />
      <div >
          <footer className={styles.footer}>
              &copy; Auto école Saint-Lazare X OnAir  {new Date().getFullYear()}<br/>
          </footer>
      </div>
    </Layout>
)

export default Contact