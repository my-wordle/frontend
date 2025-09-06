import { useEffect, useState, type FC, type ReactNode } from 'react';
import Backspace from '@/assets/icons/backspace.svg?react';
import { cn } from '@/lib/utils';
import type { Color } from '@/lib/colorize-slots';

interface Props {
    symbol: string;
    onClick: (symbol: string) => void;
    color?: Color;
}

export const Key: FC<Props> = ({ symbol, onClick, color }) => {
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
                    key: <Backspace className="min-w-10 min-h-10" />,
                    styles: 'w-18',
                };
            default:
                return { key: symbol.toUpperCase(), styles: 'w-10' };
        }
    };

    const applyColors = (): string => {
        if (!color) return '';

        switch (color) {
            case 'gray':
                return 'bg-[#787C7E] dark:bg-[#3A3A3C] dark:opacity-50';
            case 'green':
                return 'bg-[#538D4E] dark:bg-[#538D4E]';
            case 'yellow':
                return 'bg-[#B59F3B] dark:bg-[#B59F3B]';
            default:
                return '';
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
            id="keyboardKey"
            className={cn(
                'bg-[#81838450] p-4 font-semibold text-lg scale-100 rounded-md hover:bg-[#4d4e4e50] active:scale-105 active:outline-none h-14 flex justify-center items-center',
                render(symbol).styles,
                isActive && 'scale-105 bg-[#4d4e4e50]',
                applyColors()
            )}
            onClick={handleClick}
        >
            {render(symbol).key}
        </button>
    );
};

export default Key;
