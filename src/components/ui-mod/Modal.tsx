import type { ComponentProps, FC, ReactNode } from 'react';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from '../ui/dialog';

type ModalControl = Required<
    Pick<ComponentProps<typeof Dialog>, 'open' | 'onOpenChange'>
>;

interface Props extends ModalControl {
    children: ReactNode;
}

const Modal: FC<Props> = ({ children, open, onOpenChange }) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange} modal>
            <DialogTitle hidden />
            <DialogDescription hidden />
            <DialogContent
                showCloseButton={false}
                className="bg-transparent outline-none border-none w-full max-w-full p-0"
            >
                {children}
            </DialogContent>
            <DialogClose hidden />
        </Dialog>
    );
};

export default Modal;
