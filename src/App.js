import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages";
import {HeaderLayots} from "./layouts/HeaderLayots/HeaderLayots";
import {NotFoundPage} from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
        <Routes>
               <Route path={"/login"} element={<LoginPage/>}>
                   <Route path={'/login'} element={<LoginPage/>}/>
               </Route>

               <Route element={<HeaderLayots/>}>
                   <Route path={"/"} element={<HeaderLayots/>}/>
               </Route>

               <Route path={'*'} element={<NotFoundPage/>}/>

        </Routes>


    </div>
  );
}

export default App;
