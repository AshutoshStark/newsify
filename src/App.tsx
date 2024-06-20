import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reading from "./pages/Reading";
import ReadingMedia from "./pages/ReadingMedia";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/readingArea/:page/:cat/:con" element={<Reading/>} />
        <Route path="/readingMedia/:page/:src" element={<ReadingMedia/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
