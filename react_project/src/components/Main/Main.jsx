import Card from '../Card/Card';
import Button from '../Card/Button';
import styles from './Main.module.css'
import React, { useContext } from "react";
import Context from './../../Context'


function Main(props) {

    const value = useContext(Context);
    console.log(value)

    return (

        <div className={styles.main}>

            {
                value.words.map((word) => <Card
                    english={word.english}
                    transcription={word.transcription}>
                    <Button russian={word.russian} />
                </Card>)
            }

        </div >
    )
}

export default Main;