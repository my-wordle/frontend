import Gear from '@/assets/icons/gear.svg?react';
import QuestionMark from '@/assets/icons/question-mark.svg?react';
import TooltipManager from '../ui-mod/TooltipManager';
import type { ComponentProps } from 'react';

const iconClasses: string =
    'w-8 h-8 cursor-pointer transition-transform hover:translate-y-1.5';

const options: ComponentProps<typeof TooltipManager>['options'] = {
    provider: { disableHoverableContent: true },
    content: { sideOffset: 40 },
};

export const Header = () => {
    return (
        <header className=" w-full h-12 p-8 flex justify-end gap-8">
            <TooltipManager content={<h1>Help</h1>} options={options}>
                <QuestionMark className={iconClasses} />
            </TooltipManager>

            <TooltipManager content={<h1>Settings</h1>} options={options}>
                <Gear className={iconClasses} />
            </TooltipManager>
        </header>
    );
};

export default Header;
