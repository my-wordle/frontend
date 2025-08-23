import Button from '@/components/ui-mod/Button';
import useContextSafe from '@/hooks/useContextSafe';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { X } from 'lucide-react';
import { useRef, useState } from 'react';
import GreetingAnimation from './GreetingAnimation';

gsap.registerPlugin(useGSAP);

export const Greeting = () => {
    const [optionsVisible, setOptionsVisible] = useState<boolean>(false);
    const container = useRef<HTMLElement | null>(null);
    const contextSafe = useContextSafe(container);

    const toggleOptionsVisible = () => {
        setOptionsVisible((prev) => !prev);
    };

    const handleClick = contextSafe(() => {
        gsap.to('#playButton', {
            duration: 0.25,
            y: -50,
            opacity: 0,
            ease: 'power2.inOut',
            onComplete: toggleOptionsVisible,
        });
    });

    const handleLeave = contextSafe(() => {
        gsap.to('#playOption', {
            duration: 0.25,
            y: -50,
            opacity: 0,
            stagger: {
                each: 0.05,
                from: 'edges',
            },
            ease: 'power2.inOut',
            onComplete: toggleOptionsVisible,
        });
    });

    return (
        <section
            className="h-1/2 w-1/4 flex flex-col justify-center items-center gap-12"
            ref={container}
        >
            <h1 id="welcomeBack" className="text-4xl font-semibold">
                {optionsVisible ? 'Choose mode:' : 'Welcome back!'}
            </h1>

            {!optionsVisible && (
                <div id="playButton">
                    <Button onClick={handleClick}>Play</Button>
                </div>
            )}

            {optionsVisible && (
                <div className="flex gap-4 items-center">
                    <div id="playOption">
                        <Button className="hover:bg-accent-foreground hover:text-white">
                            Solo
                        </Button>
                    </div>
                    <div id="playOption">
                        <Button
                            className="p-2 hover:bg-accent-foreground hover:text-white"
                            onClick={handleLeave}
                        >
                            <X />
                        </Button>
                    </div>
                    <div id="playOption">
                        <Button disabled>Party</Button>
                    </div>
                </div>
            )}

            <GreetingAnimation visible={optionsVisible} />
        </section>
    );
};

export default Greeting;
