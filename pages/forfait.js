import React, { useState } from "react"
import Layout from "../components/Layout"
import Card from "../components/card/card"
import ForContent from "../components/forContent/forContent"
import ForContent1 from "../components/forContent/forContent1"
import ForContent2 from "../components/forContent/forContent2"
import ForContent3 from "../components/forContent/forContent3"

import styles from "./pages.module.scss"

const Forfait = () => {
    const [visible, setVisible] = useState(false)
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)

    const setAllFalse = () => {
        setVisible(false);
        setVisible1(false);
        setVisible2(false);
        setVisible3(false)
    }


    return (
        <Layout title="Nos Forfaits">
            <div className={styles.globalForfait}>
            <div className={styles.containerCard}>
                <Card
                    title="Forfait intensif "
                    content="850 €"
                    content1="21h"
                    backgroundImage="../static/intensif.png"
                />
                <Card
                    title="Forfait relax "
                    content="1190 €"
                    content1="31h"
                    backgroundImage="../static/car.png"
                />
                <Card
                    title="Forfait Code "
                    content="290 €"
                    content1="Cours de Code"
                    backgroundImage="../static/learn.png"
                />
                <Card
                    title=" Accompagné "
                    content="1090 €"
                    content1="21h"
                    backgroundImage="../static/accompagne.png"
                />

                <p className={styles.info} onClick={() => {
                    setAllFalse();
                    setVisible(!visible)
                }}>  <span>Details</span> </p>
                <p className={styles.info} onClick={() => {
                    setAllFalse();
                    setVisible1(!visible1)
                }}> <span>Details</span> </p>
                <p className={styles.info} onClick={() => {
                    setAllFalse();
                    setVisible2(!visible2)
                }}> <span>Details</span> </p>
                <p className={styles.info} onClick={() => {
                    setAllFalse();
                    setVisible3(!visible3)
                }}> <span>Details</span> </p>

                <div className={styles.content}>
                    {visible && <ForContent/>}
                    {visible1 && <ForContent1/>}
                    {visible2 && <ForContent2/>}
                    {visible3 && <ForContent3/>}
                </div>
            </div>

            </div>
        </Layout>
    )
}
export default Forfait