"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("Your message has been sent successfully!");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setSuccess("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccess("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <section className="bg-[var(--bg-color)] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Image + Heading + Text */}
        <div className="flex flex-col gap-6 order-1 lg:order-1">
        <h2 className="text-4xl font-bold text-[var(--primary-color)] mb-4">
              Let's Start a Conversation
            </h2>
            <p className="text-[var(--text-color)] leading-relaxed">
              Whether you're looking for IT solutions, marketing strategies, real estate opportunities, or international education guidance—we're here to help.
            </p> 

          <div>
             <img
            src="/images/contactfoem.jpg"
            alt="Contact Illustration"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
          />
          </div>
        </div>

        {/* Right: Form */}
     <div className="order-2 lg:order-2 bg-white p-8 h-[620px] rounded-xl shadow-lg overflow-y-auto">
          {success && (
            <p className="mb-4 text-green-600 font-medium">{success}</p>
          )}

      <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+92 XXX XXXXXXX"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Service Interest <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
              >
                <option value="">Select Service</option>
                <option>Travel Agency & Ticketing</option>
                <option>Visa Consultancy</option>
                <option>Study Abroad</option>
                <option>Tour Packages</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)]"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-md bg-[var(--accent)] px-6 py-3 font-semibold text-white hover:bg-[var(--primary)] transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

        </div>
     

      </div>
    </section>
  );
}
