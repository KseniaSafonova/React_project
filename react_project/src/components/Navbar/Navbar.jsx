
import styles from './Navbar.module.css'

function Navbar(props) {
    return (
        <div className={styles.navbar}>
            <button className={styles.button}>О проекте</button>
            <button className={styles.button}>Список слов</button>
            <button className={styles.button}>Контакты</button>
            <button className={styles.button}>???</button>
        </div >
    )
}

export default Navbar;