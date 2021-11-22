import TableString from "./TableString";
import { observer, inject } from 'mobx-react';
import { useEffect } from "react";

function Tbody({ words }) {
    return (
        <tbody>
            {
                words.map((word) =>
                    <TableString id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />)
            }
        </tbody>
    );
}

export default inject(({ WordsStore }) => {
    const { words, isLoaded, fetchWords } = WordsStore;
    useEffect(() => {
        if (!isLoaded) {
            fetchWords()
        }
    })
    return { words };
})(observer(Tbody));
