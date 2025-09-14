/* eslint-disable @typescript-eslint/no-unused-vars */
import { axiosInstance } from '../axios/axiosInstance';

export const randomizer = {
    getWord: async (length: number): Promise<string[]> => {
        try {
            const response: string[] = await axiosInstance.get('', {
                params: { words: 1, length },
            });

            return response;
        } catch (e) {
            throw new Error();
        }
    },
};
