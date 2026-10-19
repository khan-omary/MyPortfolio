import "./Contact.css"
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-title">
                <h1><span>Contact</span> Me</h1>
                <p>Mohammad Fahim Omary</p>
            </div>
            <div className="contact-container">
                <div className="contact-form">
                    <p>Your Name</p>
                    <input type="text" placeholder="Enter your name" />
                    <p>Email Address</p>
                    <input type="email" placeholder="Enter your email" />
                    <p>Your Message</p>
                    <textarea name="" id="" placeholder="Enter your message ..."></textarea>

                    <button className="send-button">Send Message</button>
                </div>
                <div className="contact-link">
                    <div className="contact-link-card">
                        <FaLocationDot className="link-icon" />
                        <div className="location-info">
                            <h3>Location</h3>
                            <p>Afghanistan, kabul</p>
                        </div>
                    </div>
                    <div className="contact-link-card">
                        <MdEmail className="link-icon" />
                        <div className="Email-info">
                            <h3>Email</h3>
                            <p>mohammadfahimomary@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-link-card">
                        <MdPhone className="link-icon" />
                        <div className="phone-info">
                            <h3>Phone</h3>
                            <p>0795741648</p>
                        </div>
                    </div>
                    <div className="contact-link-card social-card">
                        <h2>Follow Me</h2>

                        <div className="social-accounts">
                            <a href=""><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/mohammadfahim-omary-8917773b3?utm_source=share_via&utm_content=profile&utm_medium=member_android"><FaLinkedin /></a>
                            <a href="https://www.facebook.com/fahim.omary.353768"><FaTelegram /></a>
                            <a href="https://wa.me/qr/WZ4NNGBVGU4NE1"><RiWhatsappFill /></a>
                            <a href="https://www.facebook.com/fahim.omary.353768"><FaFacebook /></a>
                            <a href="https://www.facebook.com/profile.php?id=61589091702572"><FaFacebook /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;