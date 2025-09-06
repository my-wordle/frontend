import { useGSAP, type ContextSafeFunc, type ReactRef } from '@gsap/react';

const useContextSafe = (scope?: ReactRef | HTMLElement): ContextSafeFunc => {
    const globalScope: HTMLElement = document.getElementById('root')!;
    const { contextSafe } = useGSAP({ scope: scope ? scope : globalScope });

    return contextSafe;
};

export default useContextSafe;
