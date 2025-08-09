import { useState, type FC } from 'react';
import Slot from './Slot';

interface Props {
    letters?: number;
    active: boolean;
}

export const Row: FC<Props> = ({ letters = 5, active }) => {
    const [word, setWord] = useState<string>('');

    const handleInsert = (char: string) => {
        setWord((prev: string) => prev.concat(char));
    };

    return (
        <div>
            {Array.from({ length: letters }).map((_, index: number) => (
                <Slot
                    key={index}
                    active={word.length === index}
                    onInsert={handleInsert}
                    disabled={!active}
                />
            ))}
        </div>
    );
};

export default Row;
