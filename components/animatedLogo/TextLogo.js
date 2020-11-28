import styles from './textLogo.module.scss'
import dynamic from 'next/dynamic';

const Typewriter = dynamic(
    () => import('typewriter-effect'),
    {ssr: false}
)

const TextLogo =()=> {
    return (
        <h2 className={styles.typewriter}>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString("Auto Ecole Saint-Lazare"  )   
                    .pauseFor(2500)
                    .deleteAll()
                    typewriter.typeString('Auto Ecole Saint-Lazare')
                    .start();
                }}
            /> 
        </h2>
)}

export default TextLogo