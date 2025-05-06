import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ms08flz", "template_0pmhj1o", e.target, "hzBGQq0Rd0VBW4Crj")
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today to discuss your cardboard packaging requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            ref={infoRef}
            className="lg:col-span-1 bg-primary-50 rounded-lg p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-800">Our Location</h4>
                  <p className="text-gray-600 mt-1">
                    2/129, Pudhu Nagar, Karuppampalayam<br />
                    Karur, Tamil Nadu 639003<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-800">Call Us</h4>
                  <p className="text-gray-600 mt-1">+91 97894 99050</p>
                  <p className="text-gray-600">+91 82704 41044</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-800">Email Us</h4>
                  <p className="text-gray-600 mt-1">srivishnupackage@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="font-medium text-gray-800 mb-3">Business Hours</h4>
              <p className="text-gray-600">Monday - Saturday: 9am to 6pm</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </motion.div>

          <motion.div
            ref={formRef}
            className="lg:col-span-2 bg-white rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us A Message</h3>
            <form onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
