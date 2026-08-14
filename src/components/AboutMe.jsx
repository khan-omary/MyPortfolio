import "./AboutMe.css"
import aboutImage from "../assets/7.png";
import { HiOutlineLightBulb } from "react-icons/hi";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";

const AboutMe = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">

                <div className="about-image">
                    <img src={aboutImage} alt="Fahim" />
                </div>

                <div className="about-info">
                    <h2 className="about-info-title">About Me</h2>

                    <h3>I'm a Full Stack Developer</h3>

                    <p>
                        I'm Fahim, a Full Stack Developer passionate about
                        building modern, responsive, and user-friendly
                        web applications.
                    </p>

                    <p>
                        I work with technologies such as HTML, CSS, JavaScript, React,
                        Node.js, Express.js, MySQL, and Oracle Database.
                        I enjoy turning ideas into practical and
                        well-designed web applications.
                    </p>

                    <div className="three-card">
                        <div className="card">
                            <HiOutlineLightBulb className="card-icon" />
                            <h4>Innovation</h4>
                            {/* <p>I love creating uniq solution to complex problems</p> */}
                        </div>
                        <div className="card">
                            <SiInteractiondesignfoundation className="card-icon" />
                            <h4>Design</h4>
                            {/* <p>I create modern, responsive designs focused on a great user experience.</p> */}
                        </div>
                        <div className="card">
                            <IoCodeSlash className="card-icon" />
                            <h4>Clean Code</h4>
                            {/* <p>I write maintainable, efficient code following modern pattern.</p> */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;