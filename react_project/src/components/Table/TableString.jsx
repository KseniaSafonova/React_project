import styles from './Table.module.css';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import Context from './../../Context'

function TableString(props) {
    const { id } = props;
    const [isSelected, changeSelected] = useState(false);

    //const id = id;

    /* const [valueEng, changeValueEng] = useState(props.english);
     const [valueTr, changeValueTr] = useState(props.transcription);
     const [valueRus, changeValueRus] = useState(props.russian);
     const [valueTag, changeValueTag] = useState(props.tags);*/



    const [value, setValue] = useState({
        english: props.english,
        transcription: props.transcription,
        russian: props.russian,
        tag: props.tag
    });

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }


    const handleCancel = () => {
        return (
            changeSelected(!isSelected)
        )
    }

    const handleDelete = (id, props) => {

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
        //.then((response) => { props.loadWords() });
    }

    const valuee = useContext(Context);

    return (
        <tr>
            <td>{
                isSelected
                    ? <input onChange={handleChange} name={'english'} value={value.english}></input>
                    : <td>{value.english}</td>
            }
            </td>
            <td>{
                isSelected
                    ? <input onChange={handleChange} name={'transcription'} value={value.transcription}></input>
                    : <td>{value.transcription}</td>
            }</td>
            <td>{
                isSelected
                    ? <input onChange={handleChange} name={'russian'} value={value.russian}></input>
                    : <td>{value.russian}</td>
            }</td>
            <td>{
                isSelected
                    ? <input onChange={handleChange} name={'tag'} value={value.tag}></input>
                    : <td>{value.tag}</td>
            }</td>
            <td>
                {
                    isSelected
                        ? <p>
                            <Button variant="success" className={styles.button} onClick={() => { changeSelected(false) }}>Save</Button>
                            <Button variant="danger" className={styles.button} onClick={handleCancel}>Cancel</Button>
                        </p>
                        : <p>
                            <Button variant="warning" className={styles.button} onClick={() => { changeSelected(true) }}>Edit</Button>
                            <Button variant="danger" className={styles.button} onClick={() => handleDelete(id)}>Delete</Button>
                        </p>
                }

            </td >
        </tr >
    )
}



export default TableString;