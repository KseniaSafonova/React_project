import styles from './Navbar.module.css'

function Navbar(props) {
    return (
        <div className={styles.navbar}>
            {props.children}
        </div >
    )
}

export default Navbar;