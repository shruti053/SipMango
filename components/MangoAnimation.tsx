"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function MangoAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress (0-1) to frame index (1-88)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, 88]);
    const [currentFrame, setCurrentFrame] = useState(1);

    useEffect(() => {
        return frameIndex.onChange((v) => {
            setCurrentFrame(Math.round(v));
        });
    }, [frameIndex]);

    // Preload images for smooth animation
    useEffect(() => {
        for (let i = 1; i <= 88; i++) {
            const img = new Image();
            img.src = `/images/mango/ezgif-frame-${i.toString().padStart(3, "0")}.jpg`;
        }
    }, []);

    return (
        <div ref={containerRef} className="relative h-[400vh] w-full">
            <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-black">
                {/* The Mango Image */}
                <div className="relative aspect-square w-full max-w-[800px]">
                    {/* We'll use a simple img tag for the sequence for maximum performance */}
                    <motion.img
                        src={`/images/mango/ezgif-frame-${currentFrame.toString().padStart(3, "0")}.jpg`}
                        alt="Mango Animation"
                        className="h-full w-full object-contain"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />

                    {/* Dynamic Content Overlays */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <motion.div
                            style={{ opacity: useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]) }}
                            className="text-center"
                        >
                            <h2 className="text-6xl font-black uppercase tracking-tighter text-zinc-900 dark:text-white sm:text-8xl">
                                Freshly <br /> Picked
                            </h2>
                        </motion.div>

                        <motion.div
                            style={{
                                opacity: useTransform(scrollYProgress, [0.3, 0.4, 0.6], [0, 1, 0]),
                                y: useTransform(scrollYProgress, [0.3, 0.4], [50, 0])
                            }}
                            className="text-center"
                        >
                            <h2 className="text-6xl font-black uppercase tracking-tighter text-mango-500 sm:text-8xl">
                                Pure <br /> Energy
                            </h2>
                        </motion.div>

                        <motion.div
                            style={{
                                opacity: useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]),
                                scale: useTransform(scrollYProgress, [0.7, 0.8], [0.8, 1])
                            }}
                            className="text-center"
                        >
                            <h2 className="text-6xl font-black uppercase tracking-tighter text-zinc-800 dark:text-zinc-200 sm:text-8xl">
                                The Best <br /> Mango Juice
                            </h2>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
