import { Outlet } from 'react-router';
import Header from './components/layout/Header';
import { useEffect } from 'react';
import { isDarkModeAtom } from './store/theme';
import { useAtom } from 'jotai';
import Provider from './provider/Provider';

function App() {
    const [isDarkMode] = useAtom(isDarkModeAtom);

    useEffect(() => {
        const root: HTMLElement = document.documentElement;

        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return (
        <Provider>
            <main className="w-screen h-screen flex flex-col">
                <Header />
                <Outlet />
            </main>
        </Provider>
    );
}

export default App;
