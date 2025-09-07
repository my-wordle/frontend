import type { GameOptions } from '@/types/game-settings';

interface Action {
    type: keyof GameOptions;
    payload: number;
}

export const reducer = (state: GameOptions, action: Action): GameOptions => {
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

export const defaultValues: GameOptions = {
    length: 5,
    attempts: 6,
};
