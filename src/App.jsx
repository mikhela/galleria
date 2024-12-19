import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
const App = () => {
  return (
    <BrowserRouter>
     <div>
      <Navbar />
      <div className="w-full h-[90vh]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App