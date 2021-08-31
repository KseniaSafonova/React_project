
import styles from './Footer.module.css'

function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.element}>LOGO</div>
            <div className={styles.element}>Соцсети</div>
            <div className={styles.element}>Контакты:</div>
        </div >
    )
}

export default Footer;