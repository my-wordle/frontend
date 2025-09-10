import Button from '@/components/ui-mod/Button';
import Trophy from '@/assets/icons/trophy.svg?react';
import Cross from '@/assets/icons/cross.svg?react';
import { useMemo, useRef, type FC, type FunctionComponent } from 'react';
import Animations, { type AnimationsRef } from './Animations';
import { useNavigate } from 'react-router';

type Result = 'win' | 'lose';

interface Props {
    result: Result;
    correctWord: string;
    onRetry: () => void;
}

const GameOver: FC<Props> = ({ result, correctWord, onRetry }) => {
    const navigate = useNavigate();
    const wrapper = useRef<HTMLElement | null>(null);
    const animationsRef = useRef<AnimationsRef | null>(null);

    const heading: string = useMemo(
        (): string => (result === 'win' ? 'Congrats' : 'Oh, no'),
        [result]
    );

    const Icon: FunctionComponent<React.SVGProps<SVGSVGElement>> = useMemo(
        () => (result === 'win' ? Trophy : Cross),
        [result]
    );

    const buttonSign: string = useMemo(
        () => (result === 'win' ? 'Next' : 'Retry'),
        [result]
    );

    const handleClick = () => {
        if (animationsRef.current) {
            animationsRef.current.fadeOut({
                onComplete: () => {
                    onRetry();
                },
            });
        }
    };

    return (
        <>
            <section
                className="flex flex-col gap-8 p-8 border border-solid border-border rounded-xl min-w-1/4 bg-background"
                ref={wrapper}
            >
                <h1 className="text-center font-semibold text-2xl">
                    {heading}
                </h1>
                <div className="w-full flex flex-col items-center justify-center gap-4">
                    <Icon className="w-32 h-32" />
                    <h2 className="text-sm">
                        The correct word was{' '}
                        <span className="font-medium">{correctWord}</span>
                    </h2>
                    <div className="w-full flex justify-center gap-8 ">
                        <Button
                            className="text-md"
                            onClick={() => navigate('/')}
                        >
                            Menu
                        </Button>
                        <Button className="text-md" onClick={handleClick}>
                            {buttonSign}
                        </Button>
                    </div>
                </div>
            </section>
            <Animations wrapper={wrapper} ref={animationsRef} />
        </>
    );
};

export default GameOver;
