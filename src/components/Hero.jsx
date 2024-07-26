
import { HERO_CONTENT } from "../constants/index";
import profilepicture from "../assets/krishna_passport_picture.jpg";
import { motion } from "framer-motion";

const animateConfig = (initialX, initialOpacity, animateX, animateOpacity, duration, delay) => ({
    initial: { x: initialX, opacity: initialOpacity },
    animate: { x: animateX, opacity: animateOpacity },
    transition: { duration: duration, delay: delay },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <motion.div
                    className="w-full lg:w-1/2"
                    {...animateConfig(-100, 0, 0, 1, 1, 0.5)}
                >
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            className="pb-8 text-4xl font-thin tracking-tight lg:mt-8 lg:text-6xl"
                            {...animateConfig(0, 0, 0, 1, 1, 0.7)}
                        >
                            Krishna Chandra Maurya
                        </motion.h1>
                        <motion.span
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent"
                            {...animateConfig(0, 0, 0, 1, 1, 0.9)}
                        >
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            className="my-2 max-w-lg py-4 font-light tracking-tighter text-justify"
                            {...animateConfig(0, 0, 0, 1, 1, 1.1)}
                        >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </motion.div>
                <motion.div
                    className="w-full lg:w-1/3 lg:p-6"
                    {...animateConfig(100, 0, 0, 1, 1, 1.3)}
                >
                    <div className="flex justify-center lg:justify-end">
                        <motion.img
                            src={profilepicture}
                            alt="Krishna Chandra Maurya"
                            className="rounded-full w-40 h-40 object-cover lg:w-48 lg:h-48"
                            {...animateConfig(100, 0, 0, 1, 1, 1.5)}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
