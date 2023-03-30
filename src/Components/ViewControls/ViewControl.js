import { Fragment } from "react";
import "./ViewControl.css"
export const ViewControl = (props) => {
  return (
    <Fragment>
      <div className="viewBtn">
        <button>
          {props.name}
          <div className="underline"></div>
        </button>
      </div>
    </Fragment>
  );
};
