//TODO - create and import Logo.module.css
import { Fragment } from "react";
import "./Logo_Heading.css";
import { Heading } from "./Heading";

export const Logo = () => {
  return (
    <Fragment>
      <div className="container">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte_Logo.png"
          alt="Deloitte. logo"
        ></img>
        <Heading />
      </div>
    </Fragment>
  );
};
