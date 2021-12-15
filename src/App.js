import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"

function App() {
  document.body.style = 'background: white';

    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/aboutme" element={<AboutMe />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}


export default App;
