import TableString from "./TableString";
import React from "react";

class Words extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: []
        }
    }

    componentDidMount() {
        fetch('/api/words')
            .then((response) => response.json())
            .then((response) => this.setState({ words: response }))
    }

    render() {
        const { words } = this.state
        return (
            <tbody>
                {
                    words.map((word) =>
                        <TableString id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />)
                }
            </tbody>
        )
    }
}

export default Words;