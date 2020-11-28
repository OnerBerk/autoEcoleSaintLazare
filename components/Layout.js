import Link from "next/link"
import styles from './Layout.module.scss'
import Head from 'next/head'
import Router from 'next/router'
import nprogress from 'nprogress'
import Hamburger from "./hamburger"
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TextLogo  from "./animatedLogo/TextLogo"


//bar de chargement
Router.onRouteChangeStart = url =>{
    console.log(url)
    nprogress.start()
}
Router.onRouteChangeComplete = () => nprogress.done()
Router.onRouteChangeError = () => nprogress.done()


const Layout=({children, title })=>(
    <div className={styles.rootLayout}>
        <Head>
            <title> Auto-Ecole Saint Lazare </title>
        </Head>
            <TextLogo/>
            <FontAwesomeIcon className={styles.car} icon={faCar} />
        <header> 
            <Link href="/"><a> Acceuil </a></Link>
            <Link href="/about"><a> A propos </a></Link>
            <Link href="/contact"><a> Contact </a></Link> 
        </header>
            <Hamburger/>
            <h1> {title} </h1>
            {children}
        <footer> 
            &copy; Auto école Saint-Lazare  {new Date().getFullYear()}<br/>
        </footer>
    </div>
)


export default Layout