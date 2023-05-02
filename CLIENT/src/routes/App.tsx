import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import FormDoctor from '../pages/FormDoctor'
import FormPatient from '../pages/FormPatient'
import FormAppoiment from '../pages/FormAppoiment'

function App (): JSX.Element {
  return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/formdoctor" element={<FormDoctor/>}/>
                    <Route path="/formpatient" element={<FormPatient/>}/>
                    <Route path="/formappointment" element={<FormAppoiment/>}/>
                </Routes>
            </BrowserRouter>
        </>
  )
}

export default App
