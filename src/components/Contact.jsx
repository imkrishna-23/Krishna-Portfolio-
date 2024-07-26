import { CONTACT } from "../constants";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Contact = () => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);
    const controls = useAnimation();

    const handleScroll = () => {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            setIsInView(true);
        } else {
            setIsInView(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial position
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 20 });
        }
    }, [isInView, controls]);

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1
                className="my-10 text-center text-4xl"
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.8 }}
            >
                Get in Touch
            </motion.h1>
            <motion.div
                className="text-center tracking-tighter"
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <p className="my-4">{CONTACT.email}</p> 
            </motion.div>
        </div>
    );
};

export default Contact;
