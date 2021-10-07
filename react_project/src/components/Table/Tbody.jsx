import TableString from "./TableString";
import React from "react";
import ThemeContext from './../../App'


/*function Tbody(props) {
    const { words } = this.state
    return (
        <ThemeContext.Consumer>
            {value =>
                <tbody>
                    {
                        words.map((word) =>
                            <TableString id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />)
                    }
                </tbody>}
        </ThemeContext.Consumer>
    );
}*/

class Tbody extends React.Component {

    render() {

        return (
            <ThemeContext.Consumer>
                {({ value }) => <tbody> {
                    words.map((word) =>
                        <TableString
                            id={word.id}
                            english={word.english}
                            transcription={word.transcription}
                            russian={word.russian}
                            tags={word.tags} />)}
                </tbody>}

            </ThemeContext.Consumer>
        )
    }
}
export default Tbody;
