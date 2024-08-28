import "./App.css";
// hooks, routers, reducers:
import { Route, Routes } from "react-router-dom";
import getParamsEnv from "./functions/getParamsEnv.js";
import { Landing, Login, Home, Tickets } from "./views/index.js";

function App() {
  const { ROOT, LOGIN, HOME, TICKETS } = getParamsEnv();

  return (
    <div>
      <Routes>
        <Route path={ROOT} element={<Landing />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={HOME} element={<Home />} />
        <Route path={TICKETS} element={<Tickets />} />
      </Routes>
    </div>
  );
}

export default App;
