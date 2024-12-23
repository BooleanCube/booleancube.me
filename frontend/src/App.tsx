import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/ui/Header"
import Home from "@/pages/Home"

function App() {
  return (
    <>
      <Header />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/blogs" element={<Home />} />
            <Route path="/resources" element={<Home />} />
            <Route path="/archive" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App;