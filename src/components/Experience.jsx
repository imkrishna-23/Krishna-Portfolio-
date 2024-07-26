import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCES } from "../constants";



const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                className="my-20 text-center text-4xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                transition={{ duration: 1 }}
                ref={ref}
            >
                Experience
            </motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">
                                {experience.role} -{" "}
                                <span className="text-sm text-purple-100">
                                    {experience.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400 text-justify">
                                {experience.description}
                            </p>
                            <div>
                                {experience.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="mr-2 text-neutral-400">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;


