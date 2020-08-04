import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

type PageHeaderProps = {
  title: string;
  children?: ReactNode;
};

export default function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <div className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img
            src={require("../../assets/images/icons/back.svg")}
            alt="Voltar"
          />
        </Link>
        <img src={require("../../assets/images/logo.svg")} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>

        {children}
      </div>
    </div>
  );
}
