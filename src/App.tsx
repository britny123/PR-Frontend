import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/startPage/Start'
import About from './components/aboutUsPage/About';
import InformationUser1 from './components/informationUserPage/InformationUser1';
import MedicineForm from './components/medicineFormPage/MedicineForm';
import Accessibility from './components/accesibilityPage/Accessibility';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/about" element={<About />} />
          <Route path="/information-user1" element={<InformationUser1 />} />
          <Route path="/medicine-form" element={<MedicineForm />} />
          <Route path="/accessibility" element={<Accessibility />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
