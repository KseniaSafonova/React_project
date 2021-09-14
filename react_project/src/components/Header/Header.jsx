import styles from './Header.module.css'
import image from './logo.svg'

function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.leftBlock}>
                {props.children}
                {/*   <img src={image} className={styles.logoSvg} />*/}
                <div className={styles.quote}>"With languages, you are at home anywhere"</div>
            </div>
            <div className={styles.rightBlock}>
                <div className={styles.element}>Поиск</div>
            </div>
        </div>
    )
}

export default Header;