import { useGSAP, type ContextSafeFunc, type ReactRef } from '@gsap/react';

const useContextSafe = (scope: ReactRef): ContextSafeFunc => {
    const { contextSafe } = useGSAP({ scope });

    return contextSafe;
};

export default useContextSafe;
