import { Outlet } from 'react-router';
import Header from './components/layout/Header';

function App() {
    return (
        <main className="w-screen h-screen flex flex-col">
            <Header />
            <Outlet />
        </main>
    );
}

export default App;
