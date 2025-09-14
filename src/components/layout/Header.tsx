import Gear from '@/assets/icons/gear.svg?react';
import QuestionMark from '@/assets/icons/question-mark.svg?react';
import useContextSafe from '@/hooks/useContextSafe';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowLeft } from 'lucide-react';
import { useMemo, useState, type ComponentProps } from 'react';
import { useLocation, useNavigate } from 'react-router';
import TooltipManager from '../ui-mod/TooltipManager';
import Settings from './Settings';

gsap.registerPlugin(useGSAP);

const iconClasses: string =
    'header-item w-8 h-8 cursor-pointer transition-transform hover:translate-y-1.5';

const options: ComponentProps<typeof TooltipManager>['options'] = {
    content: { sideOffset: 20 },
};

export const Header = () => {
    const safeContext = useContextSafe(document.getElementById('root')!);
    const [visible, setVisible] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();

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

    const isBackShown: boolean = useMemo((): boolean => {
        return location.pathname !== '/';
    }, [location.pathname]);

    return (
        <header
            className={cn(
                'w-full p-8 flex items-center z-20 fixed left-0 top-0',
                isBackShown ? 'justify-between' : 'justify-end'
            )}
        >
            {isBackShown && (
                <ArrowLeft
                    size={32}
                    strokeWidth={2}
                    className="cursor-pointer transition-all hover:scale-110"
                    onClick={() => navigate(-1)}
                />
            )}

            <div className="flex gap-8">
                <div id="header-item">
                    <TooltipManager content={<h1>Help</h1>} options={options}>
                        <QuestionMark className={iconClasses} />
                    </TooltipManager>
                </div>

                <div id="header-item">
                    <TooltipManager
                        content={<h1>Settings</h1>}
                        options={options}
                    >
                        <Gear className={iconClasses} onClick={handleOpen} />
                    </TooltipManager>
                </div>
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
