import Card from '../Card/Card';
import Button from '../Card/Button';
import styles from './Main.module.css'

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


function Main(props) {

    return (
        <div className={styles.main}>
            {/*  {props.children}*/}
            {
                words.map((word) => <Card english={word.english} transcription={word.transcription}><Button russian={word.russian} /></Card>)
            }

        </div >
    )
}

export default Main;