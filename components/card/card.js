import React, {useState} from "react";
import styles from "./card.module.scss"


const Card = (props) => {
    return (
        <div
            className={styles.card}
            style={{
                backgroundImage: `url(${props.backgroundImage})`,
                backgroundPosition: 'bottom',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>{props.content1}</p>
        </div>

    )
}
export default Card