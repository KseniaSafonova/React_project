import styles from './Error.module.css';
import image from './error.svg';

function Error(props) {
    return (
        <div className={styles.error}>
            <p>ERROR</p>
            <p>There is nothing here</p>
            <img src={image} className={styles.errorSvg} />
        </div >
    )
}

export default Error;