import { REGEXP_ONLY_CHARS } from 'input-otp';
import { type FC } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';

interface Props {
    letters?: number;
    word: string;
}

export const GameField: FC<Props> = ({ letters = 5, word }) => {
    return (
        <InputOTP maxLength={letters} value={word} pattern={REGEXP_ONLY_CHARS}>
            <InputOTPGroup>
                {Array.from({ length: letters }).map((_, index: number) => (
                    <InputOTPSlot
                        index={index}
                        key={index}
                        className="data-[active=true]:scale-105 font-semibold text-lg"
                    />
                ))}
            </InputOTPGroup>
        </InputOTP>
    );
};

export default GameField;
