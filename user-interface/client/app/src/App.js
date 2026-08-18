// App's entry point
import Website from './components/website.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <Routes>
       
        <Route path="/" element={<Website />} />
    </Routes>
</Router>
  );
}

export default App;