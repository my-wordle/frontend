import { useMemo, useState, type ReactElement } from 'react';
import Greeting from './components/Greeting';
import GameSettings from '@/components/layout/GameSettings';
import Board from '@/components/ui-mod/Board';

export const MainPage = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);

    const incrementStep = () => {
        setCurrentStep((prev: number) => prev + 1);
    };

    const handleSubmit = () => {
        incrementStep();
    };

    const steps: ReactElement[] = useMemo(
        () => [
            <Greeting onSoloSelect={incrementStep} />,
            <GameSettings onSubmit={handleSubmit} />,
            <Board />,
        ],
        []
    );

    return (
        <div className="w-full h-full flex justify-evenly items-center flex-col">
            {steps[currentStep]}
        </div>
    );
};

export default MainPage;
