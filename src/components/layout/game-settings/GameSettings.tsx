import { Slider } from '@/components/ui/slider';
import { useMemo, useReducer, type ComponentProps, type FC } from 'react';
import Button from '../../ui-mod/Button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useContextSafe from '@/hooks/useContextSafe';
import { defaultValues, reducer } from './reducer';
import type { GameOptions } from '@/types/game-settings';

gsap.registerPlugin(useGSAP);

interface Props {
    onSubmit?: (gameOptions: GameOptions) => void;
}

interface Fragment {
    key: keyof GameOptions;
    label: string;
    sliderProps: ComponentProps<typeof Slider>;
}

export const GameSettings: FC<Props> = ({ onSubmit }) => {
    const [state, dispatch] = useReducer(reducer, defaultValues);
    const contextSafe = useContextSafe();

    const fragments: Fragment[] = useMemo(
        (): Fragment[] => [
            {
                key: 'length',
                label: 'Word length',
                sliderProps: {
                    defaultValue: [state.length],
                    max: 10,
                    step: 1,
                    className: 'w-full',
                    onValueChange: (value: number[]) =>
                        dispatch({ type: 'length', payload: value[0] }),
                },
            },
            {
                key: 'attempts',
                label: 'Amount of attempts',
                sliderProps: {
                    defaultValue: [state.attempts],
                    max: 10,
                    min: 2,
                    step: 1,
                    className: 'w-full',
                    onValueChange: (value: number[]) =>
                        dispatch({ type: 'attempts', payload: value[0] }),
                },
            },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    useGSAP(() => {
        gsap.from('#game-settings', {
            duration: 1,
            opacity: 0,
            ease: 'back.inOut',
            y: -200,
        });
    }, []);

    const handleSubmit = contextSafe(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            event.preventDefault();

            gsap.to('#game-settings', {
                duration: 0.5,
                opacity: 0,
                ease: 'back.inOut',
                y: -200,
                onComplete: () => {
                    if (onSubmit) {
                        onSubmit(state);
                    }
                },
            });
        }
    );

    return (
        <form
            id="game-settings"
            className="flex flex-col gap-12 p-8 min-w-1/4 border border-solid border-border rounded-xl"
        >
            <h1 className="w-full text-center font-semibold text-2xl">
                Settings
            </h1>

            <section className="flex flex-col gap-8 h-full">
                {fragments.map(({ key, label, sliderProps }: Fragment) => (
                    <div key={key} className="flex flex-col gap-2">
                        <label className="text-lg font-medium">
                            {label}: {state[key]}
                        </label>
                        <Slider {...sliderProps} />
                    </div>
                ))}
            </section>

            {onSubmit && (
                <div className="w-full flex justify-center">
                    <Button onClick={handleSubmit}>Play</Button>
                </div>
            )}
        </form>
    );
};

export default GameSettings;
