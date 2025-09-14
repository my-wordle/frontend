/* eslint-disable @typescript-eslint/no-unused-vars */
import type { WordValidatorResponse } from '@/types/check-word';
import { axiosInstance } from '../axios/axiosInstance';

export const wordValidator = {
    check: async (word: string): Promise<WordValidatorResponse> => {
        try {
            const response: WordValidatorResponse = await axiosInstance.get(
                `/api/v2/entries/en/${word}`,
                {
                    baseURL: 'https://api.dictionaryapi.dev',
                }
            );

            return response;
        } catch (e) {
            throw new Error();
        }
    },
};
