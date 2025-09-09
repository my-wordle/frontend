import useContextSafe from '@/hooks/useContextSafe';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useImperativeHandle, type FC, type Ref, type RefObject } from 'react';

gsap.registerPlugin(useGSAP);

export interface AnimationsRef {
    fadeOut: ({ onComplete }: { onComplete: () => void }) => void;
}

interface Props {
    wrapper: RefObject<HTMLElement | null>;
    ref: Ref<AnimationsRef>;
}

const Animations: FC<Props> = ({ wrapper, ref }) => {
    const safeContext = useContextSafe();

    const handleFadeOut: AnimationsRef['fadeOut'] = safeContext(
        ({ onComplete }) => {
            if (wrapper.current) {
                gsap.to(wrapper.current, {
                    y: -200,
                    opacity: 0,
                    duration: 1,
                    ease: 'back.inOut',
                    onComplete: onComplete,
                });
            }
        }
    );

    useImperativeHandle(ref, () => {
        return {
            fadeOut: handleFadeOut,
        };
    });

    useGSAP(() => {
        if (wrapper.current) {
            gsap.from(wrapper.current, {
                y: -200,
                opacity: 0,
                duration: 1,
                ease: 'back.inOut',
            });
        }
    }, [wrapper]);

    return null;
};

export default Animations;
