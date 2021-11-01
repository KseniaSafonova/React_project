import Card from '../Card/Card';
import Button from '../Card/Button';
//import { words } from '../../App';
import styles from './Main.module.css'
import { observer, inject } from 'mobx-react'




const Main = inject(['WordsStore'])(observer(({ WordsStore }) => {
    return (
        <div className={styles.main}>
            {
                WordsStore.words.map((word) => <Card
                    english={word.english}
                    transcription={word.transcription}>
                    <Button russian={word.russian} />
                </Card>)
            }

        </div >
    )
}))

export default Main;