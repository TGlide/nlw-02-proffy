import React from "react";
import "./styles.scss";

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHYYrATkTuOQg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=k9Vp16bXAGj0R5tM1nOslZItg8HSbj00xJqr5CmyAxM"
          alt="Thomas G. lopes"
        />
        <div>
          <strong>Thomas G. Lopes</strong>
          <span>Programação Web</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologis de programação do mundo web.
        <br />
        <br />
        Apaixonado por explodir RAM abrindo 50 abas de chrome e VS Code, e de
        criar designs desnecessariamente complicados no figma.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img
            src={require("../../assets/images/icons/whatsapp.svg")}
            alt="Whatsapp"
          />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
