import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import type { FC, RefObject } from 'react';

gsap.registerPlugin(useGSAP);
const tl: gsap.core.Timeline = gsap.timeline();

interface Props {
    ref: RefObject<HTMLDivElement | null>;
    active: boolean;
    onComplete: () => void;
}

const Animations: FC<Props> = ({ ref, active, onComplete }) => {
    useGSAP(() => {
        if (ref.current && active) {
            tl.to(ref.current, {
                x: 2,
                duration: 0.1,
                ease: 'power1.inOut',
                repeat: 3,
                onComplete: () => {
                    onComplete();
                    tl.to(ref.current, {
                        x: 0,
                        duration: 0.1,
                        ease: 'power1.inOut',
                    });
                },
            });
        }
    }, [ref.current, active]);

    return null;
};

export default Animations;
