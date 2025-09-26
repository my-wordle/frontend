import type { Color } from '@/lib/colorize-slots';
import { cn } from '@/lib/utils';
import { REGEXP_ONLY_CHARS } from 'input-otp';
import { useRef, type ComponentProps, type FC } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../../ui/input-otp';
import Animations from './Animations';

type InvalidWordAnimation = Omit<ComponentProps<typeof Animations>, 'ref'>;

interface Props {
    letters?: number;
    word: string;
    colors: Color[];
    invalidWord: InvalidWordAnimation;
}

export const GameField: FC<Props> = ({
    letters = 5,
    word,
    colors,
    invalidWord,
}) => {
    const { active, onComplete } = invalidWord;
    const wrapper = useRef<HTMLDivElement | null>(null);

    const applyColors = (index: number) => {
        if (!colors) return;

        switch (colors[index]) {
            case 'gray':
                return 'bg-[#787C7E] dark:bg-[#3A3A3C]';
            case 'green':
                return 'bg-[#538D4E] dark:bg-[#538D4E]';
            case 'yellow':
                return 'bg-[#B59F3B] dark:bg-[#B59F3B]';
            default:
                return 'bg-transparent dark:bg-transparent';
        }
    };

    return (
        <>
            <div ref={wrapper}>
                <InputOTP
                    maxLength={letters}
                    value={word}
                    pattern={REGEXP_ONLY_CHARS}
                >
                    <InputOTPGroup className="gap-1">
                        {Array.from({ length: letters }).map(
                            (_, index: number) => (
                                <InputOTPSlot
                                    index={index}
                                    key={index}
                                    className={cn(
                                        'font-bold text-2xl w-14 h-14 p-4 rounded-none border',
                                        // "data-[active=true]:scale-105",
                                        applyColors(index)
                                    )}
                                />
                            )
                        )}
                    </InputOTPGroup>
                </InputOTP>
            </div>

            <Animations ref={wrapper} active={active} onComplete={onComplete} />
        </>
    );
};

export default GameField;
