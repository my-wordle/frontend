import { Route, Routes } from 'react-router';
import MainPage from './pages/MainPage/MainPage';
import NotFound from './pages/NotFound/NotFound';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
