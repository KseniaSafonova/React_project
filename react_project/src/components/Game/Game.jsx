import { useState } from "react";
import styles from '../Main/Main.module.css';
import { words } from "../../App";
import CardShell from "./CardShell";



function Game({ data }) {
    const [position, setPosition] = useState(0);

    const showPrevious = () => {
        if (position > 0) {
            setPosition(position - 1);
        }
    };

    const showNext = () => {
        // + нужна проверка на position >= data.length
        setPosition(position + 1);
    };
    return (
        <div className={styles.main}>

            <CardShell ShowPrevious={showPrevious}
                ShowNext={showNext}
                number={position + 1}
                data={data}
                dataLength={data.length} />
        </div >
    )
}

export default Game;