import { useEffect, useState, type FC } from 'react';
import Slot from './Slot';

interface Props {
    letters?: number;
}

export const Row: FC<Props> = ({ letters = 5 }) => {
    const [word, setWord] = useState<string>('');

    const handleInsert = (char: string) => {
        setWord((prev: string) => prev.concat(char));
    };

    useEffect(() => {
        console.log(word);
    }, [word]);

    return (
        <div>
            {Array.from({ length: letters }).map((_, index: number) => (
                <Slot
                    key={index}
                    active={word.length === index}
                    onInsert={handleInsert}
                />
            ))}
        </div>
    );
};

export default Row;
