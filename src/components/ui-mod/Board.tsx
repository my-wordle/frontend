import type { FC } from 'react';
import Row from './Row';

interface Props {
    rows?: number;
}

export const Board: FC<Props> = ({ rows = 6 }) => {
    return (
        <section>
            {Array.from({ length: rows }).map((_, index: number) => (
                <Row key={index} />
            ))}
        </section>
    );
};

export default Board;
