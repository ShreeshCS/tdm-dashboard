import Header from "../Components/Header/Header";
import { ViewControlHeader } from "../Components/ViewControls/ViewControlHeader";
import { Fragment } from "react";
import Grid from "../Components/Grid/Grid";

const TDM = () => {
    return(

        <Fragment>
            <Header />
            {/* <ViewControlHeader /> */}
            <Grid />
        </Fragment>
    );
};


export default TDM;