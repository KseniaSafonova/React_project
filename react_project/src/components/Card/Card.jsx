
import styles from './Card.module.css'

function Card(props) {
    return (
        <div className={styles.element}>
            <div>{props.english}</div>
            <div>{props.transcription}</div>
            {/* <div>{props.russian}</div>*/}
        </div >
    )
}

export default Card;