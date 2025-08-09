import { useEffect, useId, useRef, useState, type FC } from 'react';

interface Props {
    active: boolean;
    onInsert: (symbol: string) => void;
    disabled?: boolean;
}

export const Slot: FC<Props> = ({ active, onInsert, disabled = false }) => {
    const [symbol, setSymbol] = useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);
    const id: string = useId();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const char: string = event.target.value;

        if (/^[a-zA-Z]$/.test(char) || char === '') {
            setSymbol(char);
            onInsert(char);
        }
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [active, disabled]);

    return (
        <input
            id={id}
            className="p-4 text-lg font-semibold outline-none border border-solid border-border w-14 h-14 text-center"
            maxLength={1}
            value={symbol.toUpperCase()}
            onChange={handleChange}
            ref={inputRef}
            disabled={!active || disabled}
        />
    );
};

export default Slot;
