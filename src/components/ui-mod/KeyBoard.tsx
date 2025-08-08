import { keyboardKeys } from '@/constants/keyboard';
import Key from './Key';

export const KeyBoard = () => {
    const handleClick = (symbol: string) => {
        console.log(symbol);
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
