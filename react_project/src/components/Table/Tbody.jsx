import TableString from "./TableString";


function Tbody(props) {
    return (
        <tbody>
            {
                props.words.map((word) =>
                    <TableString id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />)
            }
        </tbody>
    );
}

export default Tbody;
