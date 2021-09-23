import { useState } from "react";
import styles from './Button.module.css'


function Button(props, numberChange) {
  const [pressed, setPressed] = useState(false);
  return (
    <div>
      {
        pressed
          ? <div tabIndex={0} className={styles.element} onClick={() => { setPressed(false) }, numberChange()} >{props.russian}</div>
          : <button className={styles.button} onClick={() => { setPressed(true) }}>Показать перевод</button>
      }
    </div>
  )
}

export default Button;