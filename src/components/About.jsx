import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";



const About = () => {
    // Create a ref to attach to the component
    const ref = useRef(null);

    // Check if the component is in view
    const isInView = useInView(ref, { once: true });

    return (
        <div className="border-b border-neutral-900 pb-4" ref={ref}>
            <motion.h1
                className="my-20 text-center text-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                About Me
            </motion.h1>
            <div className="flex flex-wrap">
                <motion.div
                    className="w-full lg:w-1/2 lg:p-8"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className="flex items-center justify-center">
                        <motion.img
                            className="rounded-2xl"
                            src={aboutImg}
                            alt="about"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                    </div>
                </motion.div>
                <motion.div
                    className="w-full lg:w-1/2"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: isInView ? 0 : 100, opacity: isInView ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <div className="flex justify-center lg:justify-start">
                        <motion.p
                            className="text-justify my-2 max-w-xl py-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            {ABOUT_TEXT}
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
