import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Architecture from "./pages/Architecture"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/architecture" element={<Architecture />} />
      </Routes>
    </BrowserRouter>
  )
}
