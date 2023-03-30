import { Fragment } from "react";
import { ViewControl } from "./ViewControl";
import "./ViewControl.css"

export const ViewControlHeader = () => {
    return(
        <Fragment>
            {/* ADD CSS */}
            <div className="viewControllerFlex"> 
                <ViewControl name={"Bulk Upload"} />
                <ViewControl name={"Employee Details"} />
            </div>
        </Fragment>
    );
};