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
            changeSelected(!isSelected),
            setValue({ ...props })
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

    const Input = () => {
        return (
            <input></input>
        )
    }

    const columns = ['english', 'transcription', 'russian', 'tags']

    return (
        <tr>


            {
                columns.map(word => {
                    return (
                        <Input onChange={handleChange} name={word} value={value[word]} />
                    )
                })

            }
            {/* {
                isSelected
                    ?
                    (<>
                        <td>
                            <input onChange={handleChange} name={'english'} value={value.english}></input>
                        </td>
                        <td>
                            <input onChange={handleChange} name={'transcription'} value={value.transcription}></input>
                        </td>
                        <td>
                            <input onChange={handleChange} name={'russian'} value={value.russian}></input>
                        </td>
                        <td>
                            <input onChange={handleChange} name={'tags'} value={value.tags}></input>
                        </td></>
                    )
                    : (<>
                        <td>{value.english}</td>
                        <td>{value.transcription}</td>
                        <td>{value.russian}</td>
                        <td>{value.tags}</td>
                    </>)
            }*/}

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