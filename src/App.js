import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
//import AppFooter from './components/layout/AppFooter';
import AppHeader from './components/layout/AppHeader';
// import ListEntrant from './components/pages/ListEntrant';
import AddSpecialty from './components/pages/AddSpecialty';
import AddEntrantForm from './components/pages/AddEntrantForm';
import ListSpecialty from './components/pages/ListSpecialty';
import Home from './components/pages/Home';
// import DataTable from './components/pages/DataTable';
import Spec1 from './components/pages/specialty1/Spec1';
//import { Fragment } from 'react'
// import axios, {AxiosResponse} from 'axios'

function App() {
    //   useEffect(() => {
    //     axios.get('https://localhost:7283/api/Account').then((response: AxiosResponse<any>)=>{
    //         console.log(response.data)
    //     })
    //     // resetContext()
    // }, [])
    return (
        <BrowserRouter>
            <AppHeader />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/list_entrant" element={<Spec1 />} />
                <Route path="/add_entrant" element={<AddEntrantForm />} />
                <Route path="/add_specialty" element={<AddSpecialty />} />
                <Route path="/list_specialty" element={<ListSpecialty />} />
            </Routes>
            {/* <AppFooter /> */}
        </BrowserRouter>
    );
}

export default App;
