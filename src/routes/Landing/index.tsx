import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

export default function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={require("../../assets/images/logo.svg")} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={require("../../assets/images/landing.svg")}
          alt="Plataforma de estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img
              src={require("../../assets/images/icons/study.svg")}
              alt="Estudar"
            />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img
              src={require("../../assets/images/icons/give-classes.svg")}
              alt="Estudar"
            />
            Dar aulas
          </Link>
        </div>

        <div className="total-connections">
          Total de 200 conexões já realizadas{" "}
          <img
            src={require("../../assets/images/icons/purple-heart.svg")}
            alt="Coração roxo"
          />
        </div>
      </div>
    </div>
  );
}
