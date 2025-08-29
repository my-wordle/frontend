import Gear from '@/assets/icons/gear.svg?react';
import QuestionMark from '@/assets/icons/question-mark.svg?react';
import useContextSafe from '@/hooks/useContextSafe';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState, type ComponentProps } from 'react';
import TooltipManager from '../ui-mod/TooltipManager';
import Settings from './Settings';

gsap.registerPlugin(useGSAP);

const iconClasses: string =
    'header-item w-8 h-8 cursor-pointer transition-transform hover:translate-y-1.5';

const options: ComponentProps<typeof TooltipManager>['options'] = {
    provider: { disableHoverableContent: true },
    content: { sideOffset: 20 },
};

export const Header = () => {
    const safeContext = useContextSafe(document.getElementById('root')!);
    const [visible, setVisible] = useState<boolean>(false);

    useGSAP(() => {
        gsap.from('#header-item', {
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            y: 100,
            stagger: {
                each: 0.1,
            },
        });
    }, []);

    useGSAP(() => {
        if (visible) {
            gsap.fromTo(
                '#settings',
                {
                    y: -200,
                    opacity: 0,
                    duration: 1,
                    ease: 'back.inOut',
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'back.inOut',
                }
            );
        }
    }, [visible]);

    const handleOpen = () => {
        setVisible(true);
    };

    const hanldeClose = safeContext(() => {
        gsap.to('#settings', {
            y: -200,
            opacity: 0,
            duration: 1,
            ease: 'back.inOut',
            onComplete: () => setVisible(false),
        });
    });

    return (
        <header className="w-full p-8 flex justify-end gap-8 z-20">
            <div id="header-item">
                <TooltipManager content={<h1>Help</h1>} options={options}>
                    <QuestionMark className={iconClasses} />
                </TooltipManager>
            </div>

            <div id="header-item">
                <TooltipManager content={<h1>Settings</h1>} options={options}>
                    <Gear className={iconClasses} onClick={handleOpen} />
                </TooltipManager>
            </div>

            {visible && (
                <div
                    id="settings"
                    className="fixed w-full h-full top-0 left-0 flex justify-center items-center z-30 backdrop-blur-xs"
                >
                    <Settings onQuit={hanldeClose} />
                </div>
            )}
        </header>
    );
};

export default Header;
