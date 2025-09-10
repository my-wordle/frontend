import GameSettings from '@/components/layout/game-settings/GameSettings';
import Board from '@/components/ui-mod/Board';
import type { GameOptions } from '@/types/game-settings';
import { useState } from 'react';

const SoloPage = () => {
    const [started, setStarted] = useState<boolean>(false);
    const [gameOptions, setGameOptions] = useState<GameOptions>({
        attempts: 6,
        length: 5,
    });

    const handleSubmit = (gameSettings: GameOptions) => {
        setGameOptions(gameSettings);
        setStarted(true);
    };

    return (
        <div className="w-full h-full flex justify-evenly items-center flex-col">
            {!started && <GameSettings onSubmit={handleSubmit} />}
            {started && (
                <Board
                    rows={gameOptions.attempts}
                    letters={gameOptions.length}
                />
            )}
        </div>
    );
};

export default SoloPage;
