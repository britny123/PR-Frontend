import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/startPage/Start'
import About from './components/aboutUsPage/About';
import InformationUser1 from './components/informationUserPage/InformationUser1';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/about" element={<About />} />
          <Route path="/information-user1" element={<InformationUser1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
