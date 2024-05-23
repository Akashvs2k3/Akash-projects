import { useContext } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createContext } from "react";
import Data from "./Components/Data";
import ViewPage from "./Components/ViewPage";
import Table1 from "./Components/Table";
import Demo from "./Components/Demo";



const newcontext=createContext()

function App() {

 const [data, setData] = useState(Data)
 console.log(data);
  return (
    
    <div>
      
    
      <newcontext.Provider value={[data,setData]}>
        <BrowserRouter>
<Routes>
  <Route path="/" element={<Demo/>} />
  <Route path="/viewpage/:user" element={<ViewPage/>}/>
</Routes>

        </BrowserRouter>
      </newcontext.Provider>


    </div>
  );
}

export default App;
export {newcontext}
