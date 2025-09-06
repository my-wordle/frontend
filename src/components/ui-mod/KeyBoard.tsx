import { keyboardKeys } from '@/constants/keyboard';
import type { KeyboardColors } from '@/types/colors';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { type FC } from 'react';
import Key from './Key';

gsap.registerPlugin(useGSAP);

interface Props {
    onClick: (symbol: string) => void;
    colors: KeyboardColors;
}

export const KeyBoard: FC<Props> = ({ onClick, colors }) => {
    useGSAP(() => {
        gsap.from('#keyboardKey', {
            delay: 0,
            opacity: 0,
            scale: 0,
            ease: 'power1.inOut',
            stagger: {
                amount: 0.25,
                from: 'random',
                grid: 'auto',
            },
            onComplete: handleComplete,
        });
    }, []);

    const handleComplete = () => {
        const allKeys: NodeListOf<Element> =
            document.querySelectorAll('#keyboardKey');

        allKeys.forEach((key: Element) => {
            key.classList.add('transition-all');
            key.removeAttribute('style');
        });
    };

    return (
        <div className="grid grid-rows-3 gap-0.5">
            {keyboardKeys.map((row: string[], index: number) => (
                <div className="flex justify-center gap-0.5" key={index}>
                    {row.map((keyboardKey: string) => (
                        <Key
                            symbol={keyboardKey}
                            onClick={onClick}
                            key={keyboardKey}
                            color={colors[keyboardKey.toUpperCase()]}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default KeyBoard;
