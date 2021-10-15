import TableString from "./TableString";
import React, { useContext } from "react";
import Context from '../../Context'
import AddWord from "./AddWord";




const TableBody = () => {

    const value = useContext(Context);

    return (
        < tbody >
            <AddWord></AddWord>
            {
                value.words.map((word) =>
                    <TableString
                        id={word.id}
                        english={word.english}
                        transcription={word.transcription}
                        russian={word.russian}
                        tags={word.tags} />)
            }
        </tbody >
    )
}


export default TableBody;
