import { useState } from "react";
import { Button } from 'react-bootstrap';
import styles from './Table.module.css';

const AddWord = (props) => {

    const [value, setValue] = useState({
        english: '',
        transcription: '',
        russian: '',
        tag: ''
    })

    const changeValue = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }


    const handleSave = () => {
        fetch('/api/words/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                english: value.english,
                transcription: value.transcription,
                russian: value.russian,
                tag: value.tag
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Oops! Something went wrong!');
                }
            })
    }

    return (
        <tr>
            <td>
                <input name={'english'} onChange={changeValue} value={value.english}></input>
            </td>
            <td>
                <input name={'transcription'} onChange={changeValue} value={value.transcription}></input>
            </td>
            <td>
                <input name={'russian'} onChange={changeValue} value={value.russian}></input>
            </td>
            <td>
                <input name={'tag'} onChange={changeValue} value={value.tag}></input>
            </td>
            <td>
                <Button variant="success" className={styles.button} onClick={handleSave}>Save</Button> </td >
        </tr >
    )
}


export default AddWord;