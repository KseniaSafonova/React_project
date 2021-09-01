import { useState } from "react";

function Button(props) {
  const [pressed, setPressed] = useState(false);

  const handChange = () => {
    setPressed(!pressed);
  }

  return (
    <button onClick={handChange}>
      {
        pressed
          ? ("Перевод")
          : "Посмотреть перевод!"
      }
    </button>

  )
}

export default Button;