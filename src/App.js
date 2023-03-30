// import 'style.css'
// Ui component
// themes add

import { BrowserRouter } from "react-router-dom";
import TDM from "./Pages/TDM";

export const App = () => {

    // You can add a common context here.. example user profile.. which 
    // return <User.profile><TDM/><User.profile></>;
    return (
    
    <BrowserRouter>
    <TDM/>
    </BrowserRouter>
    );
    // if signed in go to TDM
    // if not signed in go to another page -- ex - home page
    // route functinoality here ..react-router-dom .. react-router
  };