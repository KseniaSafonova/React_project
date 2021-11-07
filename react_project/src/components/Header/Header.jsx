import styles from './Header.module.css'
import image from './logo.svg'

function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.leftBlock}>
                {props.children}
                <div className={styles.quote}>"With languages, you are at home anywhere"</div>
            </div>
            <div className={styles.rightBlock}>
            </div>
        </div>
    )
}

export default Header;