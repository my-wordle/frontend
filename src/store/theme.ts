import { atom } from 'jotai';

const getStoredTheme = (): boolean => {
    const stored = localStorage.getItem('theme');
    if (stored) {
        return stored === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const isDarkModeAtom = atom<boolean>(getStoredTheme());
