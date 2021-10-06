import Card from '../Card/Card';
import Button from '../Card/Button';
import styles from './Main.module.css'
import React from "react";


/* function Main(props) {
    return (

        <div className={styles.main}>
        
            {
                props.words.map((word) => <Card
                    english={word.english}
                    transcription={word.transcription}>
                    <Button russian={word.russian} />
                </Card>)
            }
       
        </div >
    )
}*/

class Main extends React.Component {


    render() {
        const { words } = this.state
        return (
            <div className={styles.main}>
                {/*   <ThemeContext.Consumer>
                    {
                        words.map((word) =>
                            <Card
                                english={word.english}
                                transcription={word.transcription}>
                                <Button russian={word.russian} />
                            </Card>)
                    }
                </ThemeContext.Consumer>*/}
            </div >
        )
    }
}

export default Main;