import styles from './Table.module.css';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Context from './../../Context'

function TableString(props) {
    const { id } = props;
    const [isSelected, changeSelected] = useState(false);

    const [value, setValue] = useState({
        english: props.english,
        transcription: props.transcription,
        russian: props.russian,
        tag: props.tag
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
            setValue({ ...props })
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

    const valuee = useContext(Context);

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
                            <Button variant="success" className={styles.button} onClick={() => { changeSelected(false) }}>Save</Button>
                            <Button variant="danger" className={styles.button} onClick={handleCancel}>Cancel</Button>
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

export default TableString;