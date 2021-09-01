import { useState } from "react";
import styles from './Button.module.css'

function Button(props) {
  const [pressed, setPressed] = useState(false);

  return (
    <div>
      {
        pressed
          ? <div className={styles.element} onBlur={() => { setPressed(false) }} >{props.russian}</div>
          : <button className={styles.button} onClick={() => { setPressed(true) }}>Показать перевод</button>
      }
    </div>
  )
}

export default Button;