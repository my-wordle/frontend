import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes, FC } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ className, ...props }) => {
    return (
        <button
            className={cn(
                'cursor-pointer rounded-xl border border-border border-solid p-4 text-xl font-medium transition-all hover:scale-105 active:opacity-75 disabled:pointer-events-none disabled:opacity-50',
                className
            )}
            {...props}
        ></button>
    );
};

export default Button;
