import type { FC, ReactNode } from 'react';
import Backspace from '@/assets/icons/backspace.svg?react';
import { cn } from '@/lib/utils';

interface Props {
    symbol: string;
    onClick: (symbol: string) => void;
}

export const Key: FC<Props> = ({ symbol, onClick }) => {
    const handleClick = () => {
        onClick(symbol);
    };

    const render = (symbol: string): { key: ReactNode; styles: string } => {
        switch (symbol) {
            case 'Enter':
                return {
                    key: (
                        <h1 className="text-sm font-semibold text-center">
                            {symbol}
                        </h1>
                    ),
                    styles: 'w-16',
                };
            case 'Backspace':
                return {
                    key: <Backspace className="min-w-8 min-h-8 text-black" />,
                    styles: 'w-16',
                };
            default:
                return { key: symbol.toUpperCase(), styles: 'w-8' };
        }
    };

    return (
        <button
            className={cn(
                'bg-[#81838450] p-4 font-semibold text- rounded-md transition-all hover:bg-[#4d4e4e50] active:scale-105 active:outline-none h-12 flex justify-center items-center',
                render(symbol).styles
            )}
            onClick={handleClick}
        >
            {render(symbol).key}
        </button>
    );
};

export default Key;
