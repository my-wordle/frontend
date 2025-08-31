import type { ComponentProps, FC, ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface TooltipProps {
    provider: ComponentProps<typeof Tooltip>;
    content: ComponentProps<typeof TooltipContent>;
}

interface Props {
    children: ReactNode;
    content: ReactNode;
    options?: Partial<TooltipProps>;
}

export const TooltipManager: FC<Props> = ({ children, content, options }) => {
    return (
        <Tooltip disableHoverableContent {...options?.provider}>
            <TooltipTrigger>{children}</TooltipTrigger>
            <TooltipContent {...options?.content}>{content}</TooltipContent>
        </Tooltip>
    );
};

export default TooltipManager;
