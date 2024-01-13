import "./navbar.css";
import { GrHomeRounded } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";
import { BsJournalBookmark } from "react-icons/bs";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState("#");

    return (
        <nav>
            <a
                onClick={() => setActive("#")}
                href="#"
                className={active === "#" ? "active" : ""}
            >
                <GrHomeRounded />
            </a>
            <a
                href="#about"
                onClick={() => setActive("#about")}
                className={active === "#about" ? "active" : ""}
            >
                <LuUser2 />
            </a>
            <a
                href="#experience"
                onClick={() => setActive("#experience")}
                className={active === "#experience" ? "active" : ""}
            >
                <BsJournalBookmark />
            </a>
            <a 
                href="#services"
                onClick={() => setActive("#services")}
                className={active === "#services" ? "active" : ""}
            >
                <RiServiceLine />
            </a>
            <a 
                href="#contact"
                onClick={() => setActive("#contact")}
                className={active === "#contact" ? "active" : ""}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Navbar;
