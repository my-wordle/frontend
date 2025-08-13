import { useState, type FC } from 'react';
import KeyBoard from './KeyBoard';
import GameField from './GameField';

interface Props {
    rows?: number;
}

export const Board: FC<Props> = ({ rows = 6 }) => {
    const [words, setWords] = useState<string[]>(
        Array.from<string>({ length: rows }).fill('')
    );
    const [activeRow, setActiveRow] = useState<number>(0);

    const handleClick = (symbol: string) => {
        if (symbol === 'enter') {
            if (words[activeRow].length === 5) {
                setActiveRow((prevRow) => Math.min(prevRow + 1, rows - 1));
            }
            return;
        }

        setWords((prev) => {
            const updated = [...prev];
            const currentWord = updated[activeRow] ?? '';

            if (symbol === 'backspace') {
                updated[activeRow] = currentWord.slice(0, -1);
            } else if (currentWord.length < 5) {
                updated[activeRow] = currentWord + symbol;
            }

            return updated;
        });
    };

    return (
        <>
            <section>
                {words.map((word: string, index: number) => (
                    <GameField key={index} word={word} />
                ))}
            </section>

            <KeyBoard onClick={handleClick} />
        </>
    );
};

export default Board;
