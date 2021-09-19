
import Card from '../Card/Card';
import Button from '../Card/Button';
import styles from './CardShell.module.css'
import React from 'react';


const CardShell = ({ showNext, showPrevious, number, data, dataLenght }) => {
    return (
        <React.Fragment>
            <div className={styles.block}>
                <button className={styles.button} onClick={showPrevious}>Back</button>
                <Card
                    styles={styles.element}
                    english={data[number].english}
                    transcription={data[number].transcription}>
                    <Button russian={data[number].russian} />
                </Card>
                <button className={styles.button} onClick={showNext}>Forward</button>
            </div>
            <div className={styles.count}>{number} / {dataLenght}</div>
        </React.Fragment>
    )
}

export default CardShell;