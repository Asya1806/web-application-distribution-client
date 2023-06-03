import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
//import AppFooter from './components/layout/AppFooter';
import AppHeader from './components/layout/AppHeader';
// import ListEntrant from './components/pages/ListEntrant';
import AddSpecialty from './components/pages/specialty/AddSpecialty';
// import AddEntrantForm from './components/pages/AddEntrantForm';
// import ListSpecialty from './components/pages/ListSpecialty';
// import Home from './components/pages/Home';
import All from './components/pages/entrant/All';
import AllSpecialties from './components/pages/specialty/AllSpecialty';
// import DataTable from './components/pages/DataTable';

import AddEntrant from './components/pages/entrant/AddEntrant';
import SpecByBudget1 from './components/pages/specialty/specialtyByBudget/SpecByBudget1';
import SpecByBudget2 from './components/pages/specialty/specialtyByBudget/SpecByBudget2';
import SpecByBudget3 from './components/pages/specialty/specialtyByBudget/SpecByBudget3';
import SpecByBudget4 from './components/pages/specialty/specialtyByBudget/SpecByBudget4';
import SpecByBudget5 from './components/pages/specialty/specialtyByBudget/SpecByBudget5';
import SpecByBudget6 from './components/pages/specialty/specialtyByBudget/SpecByBudget6';
import SpecByPaid1 from './components/pages/specialty/specialtyByPaid/SpecByPaid1';
import SpecByPaid2 from './components/pages/specialty/specialtyByPaid/SpecByPaid2';
import SpecByPaid3 from './components/pages/specialty/specialtyByPaid/SpecByPaid3';
import SpecByPaid4 from './components/pages/specialty/specialtyByPaid/SpecByPaid4';
import SpecByPaid5 from './components/pages/specialty/specialtyByPaid/SpecByPaid5';
import SpecByPaid6 from './components/pages/specialty/specialtyByPaid/SpecByPaid6';

import EditSpecialty from './components/pages/specialty/EditSpecialty';
import { isAdmin } from './redux/axios';


function App() {

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/all" element={<All />} />
                <Route path="/allSpec" element={<AllSpecialties />} />

                <Route path="/spec_by_budget_1" element={<SpecByBudget1 />} />
                <Route path="/spec_by_budget_2" element={<SpecByBudget2 />} />
                <Route path="/spec_by_budget_3" element={<SpecByBudget3 />} />
                <Route path="/spec_by_budget_4" element={<SpecByBudget4 />} />
                <Route path="/spec_by_budget_5" element={<SpecByBudget5 />} />
                <Route path="/spec_by_budget_6" element={<SpecByBudget6 />} />

                <Route path="/spec_by_paid_1" element={<SpecByPaid1 />} />
                <Route path="/spec_by_paid_2" element={<SpecByPaid2 />} />
                <Route path="/spec_by_paid_3" element={<SpecByPaid3 />} />
                <Route path="/spec_by_paid_4" element={<SpecByPaid4 />} />
                <Route path="/spec_by_paid_5" element={<SpecByPaid5 />} />
                <Route path="/spec_by_paid_6" element={<SpecByPaid6 />} />
                <Route path="/add" element={<AddEntrant />} />
                <Route path="/add-specialty" element={<AddSpecialty />} />
                <Route path="/edit-specialty" element={<EditSpecialty />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
