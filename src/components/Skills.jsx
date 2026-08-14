import "./Skill.css"

import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";


const Skill = () => {
    return (
        <section className="skills" id="skills">
            <div className="skill-title">
                <h1 className="my-skills">My <span>skills</span></h1>
                <p>Technologies i work with to bring ideas to life</p>
            </div>
            <div className="Skill-container">
                <div className="card">
                    <div className="card-header">
                        <FaReact className="tech-icon" />
                        <h2>Frontend Development</h2>
                    </div>
                    <p>Building responsive and interactive user interfaces with modern framework.</p>
                    <div className="technology">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Java Script</span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <FaServer className="tech-icon" />
                        <h2>Backend Development</h2>
                    </div>
                    <p>Creating robust server-side applications and RESTful APIs.</p>
                    <div className="technology">
                        <span>Nodejs</span>
                        <span>Express</span>
                        <span>Django</span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <FaDatabase className="tech-icon" />
                        <h2>Database Management</h2>
                    </div>
                    <p>Designing and optimizing databases for performances and scalability.</p>
                    <div className="technology">
                        <span>Mysql</span>
                        <span>Oracle</span>
                        <span>MongoDB</span>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <FaMobileAlt className="tech-icon" />
                        <h2>Mobile Development</h2>
                    </div>
                    <p>Building cross-platform mobile applications with modern tools.</p>
                    <div className="technology">
                        <span>React Native</span>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <FaDesktop className="tech-icon" />
                        <h2>Desktop Applications</h2>
                    </div>
                    <p>
                        Building reliable desktop applications, creating
                        user-friendly interfaces for practical business solutions.
                    </p>
                    <div className="technology">
                        <span>Java</span>
                        <span>JavaSwing</span>
                        <span>JavaFX</span>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Skill;