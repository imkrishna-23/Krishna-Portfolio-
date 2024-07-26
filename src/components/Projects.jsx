import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "../constants";


const Projects = () => {
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
                Projects
            </motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <div className="w-full lg:w-1/4">
                            <motion.img
                                src={project.image}
                                width={150}
                                height={150}
                                alt={project.title}
                                className="mb-6 rounded"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: isInView ? 1 : 0.9, opacity: isInView ? 1 : 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{project.title}</h6>
                            <p className="mb-4 text-neutral-400 text-justify">{project.description}</p>
                            <div>
                                {project.technologies.map((tech, techIndex) => (
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

export default Projects;
