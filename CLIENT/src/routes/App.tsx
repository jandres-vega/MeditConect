import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Home from '../pages/Home'
import FormDoctor from '../pages/FormDoctor'
import FormPatient from '../pages/FormPatient'
import FormAppoiment from '../pages/FormAppoiment'
import ListDoctors from "../pages/ListDoctors.tsx";
import ListUsers from "../pages/ListUsers.tsx";

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
                    <Route path="/list-users" element={<ListUsers/>}/>
                    <Route path="/list-doctors" element={<ListDoctors/>}/>
                    <Route path="/*" element={<h1>Not Found</h1>}/>
                </Routes>
            </BrowserRouter>
        </>
  )
}

export default App
