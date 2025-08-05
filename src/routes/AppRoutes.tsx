import App from '@/App';
import MainPage from '@/pages/MainPage/MainPage';
import NotFound from '@/pages/NotFound/NotFound';
import { Route, Routes } from 'react-router';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<App />}>
                <Route path="/" element={<MainPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
