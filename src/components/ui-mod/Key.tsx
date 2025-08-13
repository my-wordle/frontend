import { useEffect, useState, type FC, type ReactNode } from 'react';
import Backspace from '@/assets/icons/backspace.svg?react';
import { cn } from '@/lib/utils';

interface Props {
    symbol: string;
    onClick: (symbol: string) => void;
}

export const Key: FC<Props> = ({ symbol, onClick }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClick = () => {
        onClick(symbol);
    };

    const render = (symbol: string): { key: ReactNode; styles: string } => {
        switch (symbol) {
            case 'enter':
                return {
                    key: (
                        <h1 className="text-sm font-semibold text-center">
                            Enter
                        </h1>
                    ),
                    styles: 'w-18',
                };
            case 'backspace':
                return {
                    key: <Backspace className="min-w-10 min-h-10 text-black" />,
                    styles: 'w-18',
                };
            default:
                return { key: symbol.toUpperCase(), styles: 'w-10' };
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key.toLowerCase() === symbol) {
                handleClick();
                setIsActive(true);
                setTimeout(() => {
                    setIsActive(false);
                }, 100);
            } else {
                setIsActive(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });

    return (
        <button
            className={cn(
                'bg-[#81838450] p-4 font-semibold text-lg scale-100 rounded-md transition-all hover:bg-[#4d4e4e50] active:scale-105 active:outline-none h-14 flex justify-center items-center',
                render(symbol).styles,
                isActive && 'scale-105 bg-[#4d4e4e50]'
            )}
            onClick={handleClick}
        >
            {render(symbol).key}
        </button>
    );
};

export default Key;
