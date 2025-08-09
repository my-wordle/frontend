import { useState, type FC } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';
import { REGEXP_ONLY_CHARS } from 'input-otp';

interface Props {
    letters?: number;
}

export const GameField: FC<Props> = ({ letters = 5 }) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (newValue: string) => {
        setValue(newValue.toUpperCase());
        console.log(value);
    };

    return (
        <InputOTP
            maxLength={letters}
            value={value}
            onChange={handleChange}
            pattern={REGEXP_ONLY_CHARS}
        >
            <InputOTPGroup>
                {Array.from({ length: letters }).map((_, index: number) => (
                    <InputOTPSlot
                        index={index}
                        key={index}
                        className="data-[active=true]:scale-105 font-semibold text-lg"
                        defaultValue={'Z'}
                    />
                ))}
            </InputOTPGroup>
        </InputOTP>
    );
};

export default GameField;
