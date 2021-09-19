import { propTypes } from 'react-bootstrap/esm/Image';
import Card from '../Card/Card';
import Button from '../Card/Button';
import styles from './CardShell.module.css'
import React from 'react';


const words = [
    { "id": "1", "english": "butterfly", "transcription": "[ ˈbʌtəflaɪ ]", "russian": "бабочка", "tags": "животные", "tags_json": "[\"животные\"]" },
    { "id": "2", "english": "hedgehog", "transcription": "[ ˈhedʒhɒɡ ]", "russian": "ёж", "tags": "животные", "tags_json": "[\"животные\"]" },
    { "id": "3", "english": "library", "transcription": "[ ˈlaɪbrəri ]", "russian": "библиотека", "tags": "город", "tags_json": "[\"город\"]" },
    { "id": "4", "english": "lost property office", "transcription": "[ lɒst ˈprɒpəti ˈɒfɪs ]", "russian": "бюро находок", "tags": "город", "tags_json": "[\"город\"]" },
    { "id": "5", "english": "gallery", "transcription": "[ ˈɡæləri ]", "russian": "галерея", "tags": "город, путешествия", "tags_json": "[\"город\", \"путешествия\"]" },
    { "id": "6", "english": "traffic", "transcription": "[ ˈtræfɪk ]", "russian": "движение", "tags": "город", "tags_json": "[\"город\"]" },
    { "id": "7", "english": "cinema", "transcription": "[ ˈsɪnəmə ]", "russian": "кино", "tags": "город", "tags_json": "[\"город\"]" },
    { "id": "8", "english": "accompany", "transcription": "[ tuː əˈkʌmpəni ]", "russian": "аккомпанировать", "tags": "музыка", "tags_json": "[\"музыка\"]" },
    { "id": "9", "english": "bagpipe", "transcription": "[ ˈbægpaɪp ]", "russian": "волынка", "tags": "музыка", "tags_json": "[\"музыка\"]" },
    { "id": "10", "english": "balalaika", "transcription": "[ ˌbæləˈlaɪkə ]", "russian": "балалайка", "tags": "музыка, культура", "tags_json": "[\"музыка\", \"культура\"]" },
    { "id": "11", "english": "bassoon", "transcription": "[ bə'suːn ]", "russian": "фагот", "tags": "музыка", "tags_json": "[\"музыка\"]" },
    { "id": "12", "english": "book", "transcription": "[ bʊk ]", "russian": "книга", "tags": "культура", "tags_json": "[]" },
    { "id": "13", "english": "street", "transcription": "[ striːt ]", "russian": "улица", "tags": "город", "tags_json": "[]" }
]

const CardShell = ({ number, wordsLenght, showNext, showPrevious, data }) => {
    return (
        <React.Fragment>
            <div className={styles.block}>
                <button className={styles.button} onClick={showPrevious}>Back</button>
                <Card styles={styles.element} english={data[number].english} transcription={data[number].transcription}><Button russian={data[number].russian} /></Card>
                <button className={styles.button} onClick={showNext}>Forward</button>
            </div>
            <div className={styles.count}>{number} / {wordsLenght}</div>
        </React.Fragment>
    )
}

export default CardShell;