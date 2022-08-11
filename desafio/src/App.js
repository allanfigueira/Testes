
import React from "react";


//------- Import-componentes---------------------///
import Header from "./componentes/Header";
import Main from'./componentes/Main'

//-----------css--------------------------
import './css/main.scss'

//-----------------------------------------------------

const App = () => {




 return(
    <div className="App">
        <Header />
        <Main/>       
    </div>
 );


}
export default App;