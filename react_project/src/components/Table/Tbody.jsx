import TableString from "./TableString";
import { observer, inject } from 'mobx-react';
import { useEffect } from "react";
import WordsStore from "../../store/WordsStore";

const Tbody = inject(['WordsStore'])(observer(({ WordsStore }) => {
    const { words, isLoaded, fetchWords } = WordsStore;
    useEffect(() => {
        if (!isLoaded) {
            fetchWords()
        }
    })
    console.log(WordsStore.words);
    console.log(words)
    // return { words };

    return (
        <tbody>
            {
                WordsStore.words.map((word) =>
                    <TableString id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />)
            }
        </tbody>
    );
}));


export default Tbody;