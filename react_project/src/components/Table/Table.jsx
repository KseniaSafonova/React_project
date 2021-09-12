
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Thead from './Thead';
import { useState } from 'react';


const words = [
    { "id": "4", "english": "butterfly", "transcription": "[ ˈbʌtəflaɪ ]", "russian": "бабочка", "tags": "животные", "tags_json": "[\"животные\"]" },
    { "id": "5", "english": "hedgehog", "transcription": "[ ˈhedʒhɒɡ ]", "russian": "ёж", "tags": "животные", "tags_json": "[\"животные\"]" },
    { "id": "6", "english": "library", "transcription": "[ ˈlaɪbrəri ]", "russian": "библиотека", "tags": "город", "tags_json": "[\"город\"]" },
    { "id": "7", "english": "lost property office", "transcription": "[ lɒst ˈprɒpəti ˈɒfɪs ]", "russian": "бюро находок", "tags": "город", "tags_json": "[\"город\"]" },
    { "id": "8", "english": "gallery", "transcription": "[ ˈɡæləri ]", "russian": "галерея", "tags": "город, путешествия", "tags_json": "[\"город\", \"путешествия\"]" },
    { "id": "9", "english": "traffic", "transcription": "[ ˈtræfɪk ]", "russian": "движение", "tags": "город", "tags_json": "[\"город\"]" },
    { "id": "10", "english": "cinema", "transcription": "[ ˈsɪnəmə ]", "russian": "кино", "tags": "город", "tags_json": "[\"город\"]" },
    { "id": "11", "english": "accompany", "transcription": "[ tuː əˈkʌmpəni ]", "russian": "аккомпанировать", "tags": "музыка", "tags_json": "[\"музыка\"]" },
    { "id": "12", "english": "bagpipe", "transcription": "[ ˈbægpaɪp ]", "russian": "волынка", "tags": "музыка", "tags_json": "[\"музыка\"]" },
    { "id": "13", "english": "balalaika", "transcription": "[ ˌbæləˈlaɪkə ]", "russian": "балалайка", "tags": "музыка, культура", "tags_json": "[\"музыка\", \"культура\"]" },
    { "id": "14", "english": "bassoon", "transcription": "[ bə'suːn ]", "russian": "фагот", "tags": "музыка", "tags_json": "[\"музыка\"]" },
    { "id": "15", "english": "book", "transcription": "[ bʊk ]", "russian": "книга", "tags": "культура", "tags_json": "[]" },
    { "id": "16", "english": "street", "transcription": "[ striːt ]", "russian": "улица", "tags": "город", "tags_json": "[]" }
]




function Table(word) {
    return (
        <div className="App">
            <Table striped bordered hover>
                <Thead />

                <tbody>
                    {
                        words.map((word) =>
                            <TableString id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />)
                    }

                </tbody>
            </Table>
        </div >
    );
}


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



export default Table;
