import { dailyWords } from '@/constants/words';
import { useRef, useState, type FC } from 'react';
import GameField from './GameField';
import KeyBoard from './KeyBoard';
import { colorizeSlots, type Color } from '@/lib/colorize-slots';

interface Props {
    rows?: number;
}

const generateRandomNumber = (max: number) => {
    return Math.round(Math.random() * max);
};

export const Board: FC<Props> = ({ rows = 6 }) => {
    const [words, setWords] = useState<string[]>(
        Array.from<string>({ length: rows }).fill('')
    );
    const [colors, setColors] = useState<Color[][]>([]);
    const [activeRow, setActiveRow] = useState<number>(0);
    const dailyWord = useRef<string>(dailyWords[generateRandomNumber(7)]);

    const handleClick = (symbol: string) => {
        if (symbol === 'enter') {
            if (words[activeRow].length === 5) {
                console.log(words[activeRow]);
                setColors((prevColors: Color[][]) => [
                    ...prevColors,
                    colorizeSlots({
                        correct: dailyWord.current.toUpperCase(),
                        input: words[activeRow],
                    }),
                ]);
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
                updated[activeRow] = currentWord + symbol.toLocaleUpperCase();
            }

            return updated;
        });
    };

    return (
        <>
            <section>
                {words.map((word: string, index: number) => (
                    <GameField key={index} word={word} colors={colors[index]} />
                ))}
            </section>

            <KeyBoard onClick={handleClick} />
        </>
    );
};

export default Board;
