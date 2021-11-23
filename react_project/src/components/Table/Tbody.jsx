import TableString from "./TableString";
import { observer, inject } from 'mobx-react';
import { useEffect } from "react";
import WordsStore from "../../store/WordsStore";

export default function Tbody = inject(['WordsStore'])(observer(({ WordsStore }) => {
    const { words, isLoaded, fetchWords } = WordsStore;
    useEffect(() => {
        if (!isLoaded) {
            fetchWords()
        }
    })
    // return { words };
    const listWords = WordsStore.words;

    return (
        <tbody>
            {
                listWords.map((word) =>
                    <TableString id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />)
            }
        </tbody>
    );
}));

