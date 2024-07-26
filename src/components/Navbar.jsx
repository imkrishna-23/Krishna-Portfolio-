import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="bg-gradient-to-r from-pink-300 ☐ via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                <h4 >KCM</h4>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl ">
                <a href="https://www.linkedin.com/in/krishna-chandra-maurya-07aa90202/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-xl" />
                </a>
                <a href="https://github.com/imkrishna-23" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-xl" />
                </a>
                <a href="mailto:kcmaurya2001@gmail.com">
                    <FaEnvelope className="text-xl" />
                </a>
                <a href="tel:+917081565847">
                    <FaPhone className="text-xl" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
