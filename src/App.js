import "./styles/App.css";
import { HomeScreen } from "./pages/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutScreen } from "./pages/AboutScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
