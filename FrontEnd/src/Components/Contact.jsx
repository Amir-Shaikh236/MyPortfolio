import React from "react";
import { useState } from "react";
import axios from "axios";


const Contact = () => {

    
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await axios.post("https://myportfolio-mzk6.onrender.com", formData);
            if (response.data.success) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 3000);
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            setStatus("Error sending message.");
        }
    };

    return (
        <section className="contact" id="contact">
            <h2 className="heading"> Contact <span>Me</span></h2>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                        <span className="focus"></span>
                    </div>
                </div>
                {/* <div className="input-box">
                    <div className="input-field">
                        <input type="tel" placeholder="Phone Number" required />
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Subject" required />
                        <span className="focus"></span>
                    </div>
                </div> */}

                <div className="message">
                    <textarea cols="30" rows="10" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                    <span className="focus"></span>
                </div>

                <div className="btn-box btns">
                    <button type="submit" className="btn" style={{ cursor: "pointer" }}>Submit</button>
                </div>
            </form>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h4>Message Sent!</h4>
                        <p>Thank You For You Message. I'll get back to you soon!</p>
                    </div>
                </div>
            )}
            {status && <p>{status}</p>}
        </section>
    );
}

export default Contact;
