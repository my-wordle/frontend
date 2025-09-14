import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query';
import type { FC, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const queryClient = new QueryClient();

const Provider: FC<Props> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default Provider;
