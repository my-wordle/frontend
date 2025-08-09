import { keyboardKeys } from '@/constants/keyboard';
import Key from './Key';
import type { FC } from 'react';

interface Props {
    onEnter: () => void;
}

export const KeyBoard: FC<Props> = ({ onEnter }) => {
    const handleClick = (symbol: string) => {
        switch (symbol) {
            case 'enter':
                onEnter();
                break;
            case 'backspace':
                window.dispatchEvent(new CustomEvent('onBackspace'));
                break;
            default:
                window.dispatchEvent(
                    new CustomEvent('onType', { detail: { symbol } })
                );
        }
    };

    return (
        <div className="grid grid-rows-3 gap-0.5">
            {keyboardKeys.map((row: string[], index: number) => (
                <div className="flex justify-center gap-0.5" key={index}>
                    {row.map((keyboardKey: string) => (
                        <Key
                            symbol={keyboardKey}
                            onClick={handleClick}
                            key={keyboardKey}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default KeyBoard;
