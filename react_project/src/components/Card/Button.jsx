import { useState } from "react";
import styles from './Button.module.css'


function Button(props) {
  const [pressed, setPressed] = useState(false);
  const checkTranslation = () => {
    setPressed(true)
    props.numberChange && props.numberChange();
  }

  return (
    <div>
      {
        pressed
          ? <div tabIndex={0} className={styles.element} onClick={() => { setPressed(false) }} >{props.russian}</div>
          : <button className={styles.button} onClick={checkTranslation}>Показать перевод</button>
      }
    </div>
  )
}

export default Button;