import KeyBoard from '@/components/ui-mod/KeyBoard';
import { useEffect } from 'react';

export const MainPage = () => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            console.log(event);
        };

        window.addEventListener('keydown', handleKeyDown);
    });

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <KeyBoard />
        </div>
    );
};

export default MainPage;
