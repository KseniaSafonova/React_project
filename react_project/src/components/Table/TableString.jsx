import styles from './Table.module.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function TableString(word) {
    const [isSelected, changeSelected] = useState(false);

    const [valueEng, changeValueEng] = useState(word.english);
    const [valueTr, changeValueTr] = useState(word.transcription);
    const [valueRus, changeValueRus] = useState(word.russian);
    const [valueTag, changeValueTag] = useState(word.tags);

    /*const [value, changeValue] = useState({
        english: word.english,
        transcription: word.transcription,
        russian: word.russian,
        tag: word.tag
    });*/

    const handleCancel = (word) => {
        return (
            changeSelected(!isSelected)
        )
    }


    return (
        <tr>
            <td>{word.id}</td>
            <td>{
                isSelected
                    ? <input onChange={(val) => changeValueEng(val.target.value)} value={valueEng}></input>
                    : <td>{valueEng}</td>
            }
            </td>
            <td>{
                isSelected
                    ? <input onChange={(val) => changeValueTr(val.target.value)} value={valueTr}></input>
                    : <td>{valueTr}</td>
            }</td>
            <td>{
                isSelected
                    ? <input onChange={(val) => changeValueRus(val.target.value)} value={valueRus}></input>
                    : <td>{valueRus}</td>
            }</td>
            <td>{
                isSelected
                    ? <input onChange={(val) => changeValueTag(val.target.value)} value={valueTag}></input>
                    : <td>{valueTag}</td>
            }</td>
            <td>
                {
                    isSelected
                        ? <p>
                            <Button variant="success" className={styles.button} onClick={() => { changeSelected(false) }}> Save</Button>
                            <Button variant="danger" className={styles.button} onClick={handleCancel}>Cancel</Button>
                        </p>
                        : <Button variant="warning" className={styles.button} onClick={() => { changeSelected(true) }}>Edit</Button>
                }

            </td >
        </tr >
    )
}



export default TableString;