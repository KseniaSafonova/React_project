
import styles from './Footer.module.css'
import image from './logo.svg'
import instagram from './instagram.png'
import twitter from './twitter.png'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Footer(props) {
    return (
        <div className={styles.footer}>
            <div className={styles.element}><img src={image} className={styles.logoSvg} /></div>
            <div className={styles.element}>
                <Link to='#'><img src={instagram} className={styles.png} /></Link>
                <Link to='#'><img src={twitter} className={styles.png} /></Link>
            </div>
        </div >
    )
}

export default Footer;