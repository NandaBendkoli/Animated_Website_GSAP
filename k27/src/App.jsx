import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projetcts from "./pages/Projetcts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projetcts />} />
      </Routes>
    </>
  );
};

export default App;
