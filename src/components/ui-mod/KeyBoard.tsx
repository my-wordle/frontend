import { keyboardKeys } from '@/constants/keyboard';
import Key from './Key';
import type { FC } from 'react';

interface Props {
    onClick: (symbol: string) => void;
}

export const KeyBoard: FC<Props> = ({ onClick }) => {
    return (
        <div className="grid grid-rows-3 gap-0.5">
            {keyboardKeys.map((row: string[], index: number) => (
                <div className="flex justify-center gap-0.5" key={index}>
                    {row.map((keyboardKey: string) => (
                        <Key
                            symbol={keyboardKey}
                            onClick={onClick}
                            key={keyboardKey}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default KeyBoard;
