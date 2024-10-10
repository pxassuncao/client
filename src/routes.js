import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Cliente from './pages/Cliente';

export default function AppRoutes() {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/cliente" element={<Cliente />} />
        </Routes>

    </BrowserRouter>
    );
}



