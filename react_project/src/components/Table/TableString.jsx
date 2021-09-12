import styles from './../../App.module.css';
import { useState } from 'react';

function TableString(word) {
    const [isSelected, changeSelected] = useState(false);

    const [valueEng, changeValueEng] = useState(word.english);
    const [valueTr, changeValueTr] = useState(word.transcription);
    const [valueRus, changeValueRus] = useState(word.russian);
    const [valueTag, changeValueTag] = useState(word.tags);

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
                        ? <p><button className={styles.saveButton} onClick={() => { changeSelected(false) }}>Save</button>     <button className={styles.cancelButton} onClick={handleCancel}>Cancel</button></p>
                        : <button className={styles.editButton} onClick={() => { changeSelected(true) }}>Edit</button>
                }

            </td >
        </tr >
    )
}



export default TableString;