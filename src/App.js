import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"
import ContactMe from "./pages/ContactMe"

function App() {
  document.body.style = 'background: white';

    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/aboutme" element={<AboutMe />}/>
            <Route exact path="/contactme" element={<ContactMe />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}


export default App;
