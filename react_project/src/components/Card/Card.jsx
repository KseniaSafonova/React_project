
import styles from './Card.module.css'

function Card(props) {
    return (
        <div className={styles.element}>
            <div>{props.english}</div>
            <div>{props.transcription}</div>
            {props.children}
        </div >
    )
}

export default Card;