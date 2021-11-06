import TableString from "./TableString";
import words from "../../stores/WordsStore"


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

export default Tbody;
