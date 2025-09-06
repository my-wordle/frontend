import type { KeyboardColors } from '@/types/colors';

interface Args {
    correct: string;
    input: string;
}

export type Color = 'green' | 'yellow' | 'gray';

export const colorizeSlots = ({ correct, input }: Args): Color[] => {
    const colors: Color[] = Array(input.length).fill('gray');
    const correctArr = correct.split('');
    const guessArr = input.split('');

    const letterCounts: Record<string, number> = {};

    for (let i = 0; i < correctArr.length; i++) {
        if (guessArr[i] === correctArr[i]) {
            colors[i] = 'green';
        } else {
            letterCounts[correctArr[i]] =
                (letterCounts[correctArr[i]] || 0) + 1;
        }
    }

    for (let i = 0; i < correctArr.length; i++) {
        if (colors[i] === 'green') continue;
        const letter = guessArr[i];

        if (letterCounts[letter] && letterCounts[letter] > 0) {
            colors[i] = 'yellow';
            letterCounts[letter] -= 1;
        }
    }

    return colors;
};

interface ColorizeKeysArgs {
    currentWord: string;
    colors: Color[];
}

export const colorizeKeys = ({
    currentWord,
    colors,
}: ColorizeKeysArgs): KeyboardColors => {
    const keyboardColors: KeyboardColors = {};

    for (let i = 0; i < currentWord.length; i++) {
        keyboardColors[currentWord[i]] = colors[i];
    }

    return keyboardColors;
};
