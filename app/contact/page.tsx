"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar/page";
import Footer from "../components/navbar/footer";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
 <>   <Navbar/>
    <section className="bg-white py-12 md:py-32 px-4 md:px-10">
    
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: IMAGE */}
        <div className="w-full h-[400px] md:h-[500px] relative">
          <Image
            src="/contactfoem.jpg" // <-- your image path
            alt="Contact Us"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* RIGHT: FORM */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-[var(--accent)]">Contact Us</h2>

          {submitted && (
            <p className="mb-4 text-[var(--accent)] font-medium">
              Thank you! Your message has been sent.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--golden)] transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--golden)] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[var(--golden)] transition resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--accent)] text-white font-medium py-3 rounded hover:bg-[var(--accent)] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    <Footer/></>
  );
}
