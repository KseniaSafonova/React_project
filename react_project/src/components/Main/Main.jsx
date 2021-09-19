import Card from '../Card/Card';
import Button from '../Card/Button';
import { words } from '../../App';
import styles from './Main.module.css'





function Main(props) {
    return (
        <div className={styles.main}>
            {
                words.map((word) => <Card
                    english={word.english}
                    transcription={word.transcription}>
                    <Button russian={word.russian} />
                </Card>)
            }

        </div >
    )
}

export default Main;