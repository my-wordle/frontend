import { dailyWords } from '@/constants/words';
import { colorizeKeys, colorizeSlots, type Color } from '@/lib/colorize-slots';
import type { KeyboardColors } from '@/types/colors';
import { useRef, useState, type FC } from 'react';
import GameOver from '../layout/game-over/GameOver';
import GameField from './GameField';
import KeyBoard from './KeyBoard';
import ModalWrapper from './ModalWrapper';

interface Props {
    rows?: number;
    letters?: number;
}

const generateRandomNumber = (max: number) => {
    return Math.round(Math.random() * max);
};

const getArrayOfEmptyStrings = (length: number): string[] => {
    return Array.from<string>({ length }).fill('');
};

export const Board: FC<Props> = ({ rows = 6, letters = 5 }) => {
    const [words, setWords] = useState<string[]>(getArrayOfEmptyStrings(rows));
    const [colors, setColors] = useState<Color[][]>([]);
    const [activeRow, setActiveRow] = useState<number>(0);
    const [keyboardColors, setKeyboardColors] = useState<KeyboardColors>({});
    const [result, setResult] = useState<'win' | 'lose' | null>(null);
    const dailyWord = useRef<string>(dailyWords[generateRandomNumber(10)]);

    const handleClick = (symbol: string) => {
        if (symbol === 'enter') {
            if (words[activeRow].length === letters) {
                const currentColors: Color[] = colorizeSlots({
                    correct: dailyWord.current.toUpperCase(),
                    input: words[activeRow],
                });

                const currentKeys: KeyboardColors = colorizeKeys({
                    currentWord: words[activeRow],
                    colors: currentColors,
                });

                setColors((prevColors: Color[][]) => [
                    ...prevColors,
                    currentColors,
                ]);

                setKeyboardColors((prevColors) => ({
                    ...prevColors,
                    ...currentKeys,
                }));

                setActiveRow((prevRow) => Math.min(prevRow + 1, rows - 1));

                if (words[activeRow] === dailyWord.current.toUpperCase()) {
                    setResult('win');
                }

                if (
                    words.filter((word: string) => word !== '').length === rows
                ) {
                    setResult('lose');
                }
            }
            return;
        }

        setWords((prev) => {
            const updated = [...prev];
            const currentWord = updated[activeRow] ?? '';

            if (symbol === 'backspace') {
                updated[activeRow] = currentWord.slice(0, -1);
            } else if (currentWord.length < letters) {
                updated[activeRow] = currentWord + symbol.toLocaleUpperCase();
            }

            return updated;
        });
    };

    const reset = () => {
        setWords(getArrayOfEmptyStrings(rows));
        setColors([]);
        setActiveRow(0);
        setKeyboardColors({});
        setResult(null);
    };

    return (
        <>
            <section className="flex flex-col gap-1">
                {words.map((word: string, index: number) => (
                    <GameField
                        key={index}
                        letters={letters}
                        word={word}
                        colors={colors[index]}
                    />
                ))}
            </section>

            <KeyBoard onClick={handleClick} colors={keyboardColors} />

            {result && (
                <ModalWrapper>
                    <GameOver
                        result={result}
                        correctWord={dailyWord.current.toUpperCase()}
                        onRetry={reset}
                    />
                </ModalWrapper>
            )}
        </>
    );
};

export default Board;
