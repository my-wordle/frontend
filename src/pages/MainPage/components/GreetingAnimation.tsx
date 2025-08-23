import { useGSAP } from '@gsap/react';
import type { FC } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

interface Props {
    visible: boolean;
}

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

const GreetingAnimation: FC<Props> = ({ visible }) => {
    useGSAP(() => {
        const split = SplitText.create('#welcomeBack', {
            type: 'words',
        });

        gsap.from(split.words, {
            duration: 1,
            y: 50,
            stagger: 0.1,
            opacity: 0,
            ease: 'power2.inOut',
        });

        if (visible) {
            gsap.from('#playOption', {
                duration: 1,
                y: 50,
                opacity: 0,
                stagger: {
                    each: 0.05,
                    from: 'edges',
                },
                ease: 'power2.inOut',
            });
        } else {
            gsap.from('#playButton', {
                duration: 1,
                y: 50,
                opacity: 0,
                ease: 'power2.inOut',
            });
        }
    }, [visible]);

    return null;
};

export default GreetingAnimation;
