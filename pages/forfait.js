
import React, {useEffect, useState} from "react"
import Layout from "../components/Layout"
import Card from "../components/card/card"
import ForContent from "../components/forContent/forContent"

import styles from "./pages.module.scss"

const Forfait = (props) => {
    const [visible, setVisible] = useState(false)
    return (
        <Layout title="Nos Forfaits">
            <div className={styles.containerCard}>
                <Card
                    title="Forfait intensif "
                    content="Cours de Code"
                    content1="20h de conduite"
                    backgroundImage="../static/car2.png"
                    /*onClick={()=>{
                        setVisible(!visible)
                        console.log(visible)
                    }}*/
                />
                <Card title="berk"/>
                <Card title="le"/>
                <Card title="meilleur"/>

                <div className={styles.content}>
                    <ForContent content="lorem ipsumum jjsjnjs"/>
                </div>
            </div>
        </Layout>
    )}
export default Forfait