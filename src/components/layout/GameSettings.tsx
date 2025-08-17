import { Slider } from '@/components/ui/slider';
import { useMemo, useReducer, type ComponentProps } from 'react';

interface Fragment {
    key: keyof State;
    label: string;
    sliderProps: ComponentProps<typeof Slider>;
}

interface State {
    length: number;
    attempts: number;
}

interface Action {
    type: keyof State;
    payload: number;
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'length':
            return {
                ...state,
                length: action.payload,
            };
        case 'attempts':
            return {
                ...state,
                attempts: action.payload,
            };
    }
};

const defaultValues: State = {
    length: 5,
    attempts: 6,
};

export const GameSettings = () => {
    const [state, dispatch] = useReducer(reducer, defaultValues);

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

    return (
        <form className="flex flex-col gap-12 p-8 w-[600px] h-[300px] border border-solid border-border rounded-xl">
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
        </form>
    );
};

export default GameSettings;
