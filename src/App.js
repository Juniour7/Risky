import { Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./components/Pages/Homepage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
  )
};

export default App;
