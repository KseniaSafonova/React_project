import styles from './Table.module.css';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';

function TableString({ words }) {
    const { id } = words.id;
    const [isSelected, changeSelected] = useState(false);

    const [value, setValue] = useState({
        english: words.english,
        transcription: words.transcription,
        russian: words.russian,
        tag: words.tag
    });

    const [error, setError] = useState({
        english: false,
        transcription: false,
        russian: false,
        tag: false
    });



    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
        setError({ ...error, [e.target.name]: !e.target.value.trim() })
    }


    const handleCancel = () => {
        return (
            changeSelected(!isSelected),
            setValue({ ...words })
        )
    }

    const handleDelete = (id) => {

        fetch(`/api/words/${id}/delete`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Oops! Something went wrong!');
                }
            })
    }



    const Input = ({ onChange, name, value }) => {

        return (
            <input value={value} name={name} onChange={onChange}></input>
        )
    }

    const columns = ['english', 'transcription', 'russian', 'tags']

    return (
        < tr >
            {

                isSelected
                    ? (
                        <>
                            {
                                columns.map(word => {
                                    return (
                                        <>
                                            <td> <Input onChange={handleChange} name={word} value={value[word]} className={error.value ? styles.inputError : ''} /></td>
                                        </>
                                    )
                                })

                            }
                            <td>
                                <Button variant="success" className={styles.button} onClick={() => { changeSelected(false) }}>Save</Button>
                                <Button variant="danger" className={styles.button} onClick={handleCancel}>Cancel</Button></td>
                        </>
                    ) : (
                        <>
                            <td>{value.english}</td>
                            <td>{value.transcription}</td>
                            <td>{value.russian}</td>
                            <td>{value.tags}</td>
                            <td><Button variant="warning" className={styles.button} onClick={() => { changeSelected(true) }}>Edit</Button>
                                <Button variant="danger" className={styles.button} onClick={() => handleDelete(id)}>Delete</Button></td>
                        </>)
            }
        </tr >
    )
}


export default inject(({ WordsStore }) => {
    const { words, isLoaded, fetchWords } = WordsStore;
    useEffect(() => {
        if (!isLoaded) {
            fetchWords()
        }
    })
    return { words };
})(observer(TableString));