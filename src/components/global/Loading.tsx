import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { type FC } from 'react';

gsap.registerPlugin(useGSAP);

interface SlotProps {
    className: string;
    letter: string;
}

const Slot: FC<SlotProps> = ({ letter, className }) => {
    return (
        <span
            className={cn(
                'flex justify-center items-center p-4 text-2xl border-border border border-solid w-14 h-14 select-none',
                className
            )}
        >
            {letter}
        </span>
    );
};

const loadingWord: string = 'wait';

const Loading = () => {
    const colorize = (index: number): string => {
        switch (index) {
            case 0:
                return 'bg-[#538D4E] dark:bg-[#538D4E]';
            case 1:
                return 'bg-[#787C7E] dark:bg-[#3A3A3C]';
            case 2:
                return 'bg-[#B59F3B] dark:bg-[#B59F3B]';
            case 3:
                return 'bg-transparent dark:bg-transparent';
            default:
                return '';
        }
    };

    useGSAP(() => {
        gsap.from('#slot-letter', {
            yoyo: true,
            repeat: -1,
            y: -50,
            ease: 'back.inOut',
            opacity: 0,
            scale: 0,
            stagger: {
                each: 0.05,
                grid: 'auto',
                from: 'random',
            },

            // ease: 'back.inOut',
        });
    }, []);

    return (
        <div className="flex gap-2">
            {loadingWord.split('').map((letter: string, index: number) => (
                <div key={letter} id="slot-letter">
                    <Slot
                        letter={letter.toUpperCase()}
                        className={colorize(index)}
                    />
                </div>
            ))}
        </div>
    );
};

export default Loading;
