import { keyboardKeys } from '@/constants/keyboard';
import Key from './Key';
import type { FC } from 'react';
import type { KeyboardColors } from '@/types/colors';

interface Props {
    onClick: (symbol: string) => void;
    colors: KeyboardColors;
}

export const KeyBoard: FC<Props> = ({ onClick, colors }) => {

    return (
        <div className="grid grid-rows-3 gap-0.5">
            {keyboardKeys.map((row: string[], index: number) => (
                <div className="flex justify-center gap-0.5" key={index}>
                    {row.map((keyboardKey: string) => (
                        <Key
                            symbol={keyboardKey}
                            onClick={onClick}
                            key={keyboardKey}
                            color={colors[keyboardKey.toUpperCase()]}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default KeyBoard;
