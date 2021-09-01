import { useState } from "react";
import styles from './Button.module.css'

function Button(props) {
  const [pressed, setPressed] = useState(false);

  const handChange = () => {
    setPressed(!pressed);
  }

  return (
    <div>
      {
        pressed
          ? <div className={styles.element}>{props.russian}</div>
          : (<button className={styles.button} onClick={handChange}>Посмотреть перевод</button>)
      }

    </div>
  )
}

export default Button;