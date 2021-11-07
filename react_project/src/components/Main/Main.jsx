import Card from '../Card/Card';
import Button from '../Card/Button';
import styles from './Main.module.css'
import { observer, inject } from 'mobx-react'

const Main = ({ words }) => {
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
};

export default inject(({ WordsStore }) => {
    const { words } = WordsStore;
    return { words };
})(observer(Main));