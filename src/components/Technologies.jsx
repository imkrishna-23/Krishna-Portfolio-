import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";



const Technologies = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                className="my-20 text-center text-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 1 }}
                ref={ref}
            >
                Technologies
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <SiHtml5 className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <SiCss3 className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <SiJavascript className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <SiTailwindcss className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    <SiNodedotjs className="text-7xl text-green-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 1.4 }}
                >
                    <SiExpress className="text-7xl text-gray-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 1.6 }}
                >
                    <SiMongodb className="text-7xl text-green-400" />
                </motion.div>
            </div>
        </div>
    );
};

export default Technologies;

