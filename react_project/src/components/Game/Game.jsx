import { useState } from "react";
import styles from '../Main/Main.module.css';
import CardShell from "./CardShell";


function Game({ data, numberChange }) {
    const [position, setPosition] = useState(0);



    const showPrevious = () => {
        if (position > 0) {
            setPosition(position - 1);
        }
    };

    const showNext = () => {
        if (position > data.lenght) {
            setPosition(position == 0);
        }
        else {
            setPosition(position + 1);
        }
    };

    return (
        <div className={styles.main}>
            <CardShell
                showPrevious={showPrevious}
                showNext={showNext}
                number={position + 1}
                data={data}
                dataLength={data.length}
                numberChange={numberChange} />
        </div >
    )
}

export default Game;