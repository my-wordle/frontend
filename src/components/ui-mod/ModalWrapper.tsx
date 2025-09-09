import type { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const ModalWrapper: FC<Props> = ({ children }) => {
    return (
        <div className="fixed w-full h-full top-0 left-0 flex justify-center items-center z-50 backdrop-blur-xs">
            {children}
        </div>
    );
};

export default ModalWrapper;
