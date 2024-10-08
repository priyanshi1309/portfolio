import { motion } from "framer-motion";
import React from "react";

const TextStagger = ({ children, href }) => {
    const STAGGER = 0.025;
    const DURATION = 0.25;
    return (
        <motion.a
            initial="initial"
            whileHover="hovered"
            href={href}
            className="relative block overflow-hidden
            whitespace-nowrap text-xl uppercase 
            text-white md:text-2xl lg:text-3xl tracking-wider"
            style={{
                lineHeight: 0.95
            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: "-100%" },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div
                className="absolute inset-0"
            >
                {children.split("").map((l, i) => (
                    <motion.span variants={{
                        initial: { y: "100%" },
                        hovered: { y: 0 },
                    }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }} className="inline-block" key={i}>{l}</motion.span>
                ))}
            </div>
        </motion.a>
    );
};

export default TextStagger;
