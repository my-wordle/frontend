import { useGSAP, type ContextSafeFunc, type ReactRef } from '@gsap/react';

const useContextSafe = (scope: ReactRef | HTMLElement): ContextSafeFunc => {
    const { contextSafe } = useGSAP({ scope });

    return contextSafe;
};

export default useContextSafe;
