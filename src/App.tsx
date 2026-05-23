import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/startPage/Start'
import About from './components/aboutUsPage/About';
import MoreInformation from './components/informationUserPage/InformationUser1';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/about" element={<About />} />
          <Route path="/information-user1" element={<MoreInformation />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
