import "./sass/App.scss";
import Page1 from "./react-components/Page1";
import Page2 from "./react-components/Page2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Fixed import statement

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2/" element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
