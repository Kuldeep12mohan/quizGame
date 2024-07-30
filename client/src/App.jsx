import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Landing from "./components/Landing";
import Questions from "./components/Questions";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/questions" element={<Questions/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
