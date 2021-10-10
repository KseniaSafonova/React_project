import TableString from "./TableString";
import React, { useContext } from "react";
import Context from './../../Context'


const Tbody = () => {

    //const value = useContext(Context);
    //console.log(value)

    return (
        <Context.Consumer>
            {value =>
                < tbody >
                    {
                        words.map((word) =>
                            <TableString
                                id={word.id}
                                english={word.english}
                                transcription={word.transcription}
                                russian={word.russian}
                                tags={word.tags} />)
                    }
                </tbody >
            }
        </Context.Consumer>


    )
}


export default Tbody;
