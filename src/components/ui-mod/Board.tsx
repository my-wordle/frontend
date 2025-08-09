import { useState, type FC } from 'react';
import Row from './Row';
import KeyBoard from './KeyBoard';

interface Props {
    rows?: number;
}

const LETTERS: number = 5;

export const Board: FC<Props> = ({ rows = 6 }) => {
    const [activeRow, setActiveRow] = useState<number>(0);

    const handleEnter = () => {
        setActiveRow((prev) => prev + 1);
    };

    return (
        <>
            <section>
                {Array.from({ length: rows }).map((_, index: number) => (
                    <Row
                        key={index}
                        letters={LETTERS}
                        active={activeRow === index}
                    />
                ))}
            </section>

            <KeyBoard onEnter={handleEnter} />
        </>
    );
};

export default Board;
