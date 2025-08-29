import { isDarkModeAtom } from '@/store/theme';
import { useAtom } from 'jotai';
import { X } from 'lucide-react';
import { useEffect, useRef, type FC } from 'react';
import { Switch } from '../ui/switch';

interface Props {
    onQuit: () => void;
}

const Settings: FC<Props> = ({ onQuit }) => {
    const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom);
    const settingsRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleMousedown = (event: MouseEvent) => {
            if (
                settingsRef.current &&
                !settingsRef.current.contains(event.target as Node)
            ) {
                onQuit();
            }
        };
        window.addEventListener('mousedown', handleMousedown);
        return () => {
            window.removeEventListener('mousedown', handleMousedown);
        };
    }, [onQuit]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <section
            className="w-1/4 h-1/3 bg-background border border-solid border-border rounded-xl p-8 relative"
            ref={settingsRef}
        >
            <X
                className="absolute right-4 top-4 w-4 h-4 cursor-pointer"
                onClick={onQuit}
            />

            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-semibold">Theme</h1>
                <div className="flex justify-between">
                    <label htmlFor="dark-mode">Dark theme</label>
                    <Switch
                        id="dark-mode"
                        checked={isDarkMode}
                        onCheckedChange={toggleTheme}
                    />
                </div>
            </div>
        </section>
    );
};

export default Settings;
