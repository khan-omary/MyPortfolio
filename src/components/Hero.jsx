import "./Hero.css"
import hero_image from "../assets/5.png";

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-container">

                <div className="info">
                    <h1>Hi, I'm Fahim</h1>
                    {/* <h2 className="full-stack">Full Stack Developer</h2> */}
                    <div className="typing-container">
                        <h2 className="full-stack">Full Stack Developer</h2>
                    </div>

                    <p>
                        I build modern, responsive and user-friendly
                        web applications.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="view-project">View Projects</a>
                        <a href="#contact" className="contact-us">Contact Me</a>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={hero_image} alt="Fahim" />
                </div>

            </div>
        </section>
    );
};

export default Hero;