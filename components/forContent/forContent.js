import React from "react"
import styles from "../../pages/pages.module.scss";

const ForContent  =(props)=>{
    return(
        <div className={styles.cardContent}>
            {props.content}
        </div>
    )
}

export default ForContent