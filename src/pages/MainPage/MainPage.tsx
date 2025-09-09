import GameSettings from '@/components/layout/game-settings/GameSettings';
import Board from '@/components/ui-mod/Board';
import type { GameOptions } from '@/types/game-settings';
import { useMemo, useState, type ReactElement } from 'react';
import Greeting from './components/Greeting';

export const MainPage = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [gameOptions, setGameOptions] = useState<GameOptions>({
        attempts: 6,
        length: 5,
    });

    const incrementStep = () => {
        setCurrentStep((prev: number) => prev + 1);
    };

    const handleSubmit = (gameSettings: GameOptions) => {
        setGameOptions(gameSettings);
        incrementStep();
    };

    const steps: ReactElement[] = useMemo(
        () => [
            <Greeting onSoloSelect={incrementStep} />,
            <GameSettings
                onSubmit={handleSubmit}
            />,
            <Board rows={gameOptions.attempts} letters={gameOptions.length} />,
        ],
        [gameOptions]
    );

    return (
        <div className="w-full h-full flex justify-evenly items-center flex-col">
            {steps[currentStep]}
        </div>
    );
};

export default MainPage;
