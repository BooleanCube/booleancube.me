import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import PageLoader from "./components/PageLoader"
import StairEffect from "./components/StairEffect"
import Header from "./components/ui/Header"
import Home from "@/pages/home/Page"
import Projects from "@/pages/projects/Page"
import Blogs from "@/pages/blogs/Page"
import Resources from "@/pages/resources/Page"

function App() {
  return (
    <>
      <Router>
        <Header />
        <StairEffect />
        <PageLoader>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </PageLoader>
      </Router>
    </>
  )
}

export default App;