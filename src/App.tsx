import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './components/startPage/Start'
import About from './components/aboutUsPage/About';
import InformationUser1 from './components/informationUserPage/InformationUser1';
import MedicineForm from './components/medicineFormPage/MedicineForm';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/about" element={<About />} />
          <Route path="/information-user1" element={<InformationUser1 />} />
          <Route path="/medicine-form" element={<MedicineForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
