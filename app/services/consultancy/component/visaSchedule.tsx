"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";

export default function VisaBooking() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT SIDE – CALENDAR */}
        <motion.div
          className="bg-white rounded-3xl p-8 shadow-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <CalendarDays className="text-[var(--accent)]" />
            Schedule Your Visit
          </h3>

          {/* Fake Calendar UI */}
          <div className="grid grid-cols-7 gap-3 text-center text-sm">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(day => (
              <span key={day} className="font-semibold text-gray-500">{day}</span>
            ))}

            {Array.from({ length: 31 }).map((_, i) => (
              <div
                key={i}
                className={`py-3 rounded-lg cursor-pointer transition
                ${i === 14
                  ? "bg-[var(--accent)] text-white font-bold"
                  : "hover:bg-gray-100 text-gray-700"}`}
              >
                {i + 1}
              </div>
            ))}
          </div>

          {/* Selected Time */}
          <div className="mt-8">
            <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-3">
              <Clock size={18} /> Available Time
            </h4>

            <div className="inline-block px-6 py-3 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-semibold">
              09:00 AM – 10:00 AM
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE – FORM */}
        <motion.div
          className="bg-white rounded-3xl p-10 shadow-xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Book Your Appointment
          </h3>

          <form className="space-y-6">

            {/* Select Service */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Service
              </label>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[var(--accent)] outline-none">
                <option>Visa Consultation</option>
                <option>Student Visa</option>
                <option>Business Visa</option>
                <option>Family Visa</option>
              </select>
            </div>

            {/* Time Slot */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Slot
              </label>
              <select className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[var(--accent)] outline-none">
                <option>09:00 AM - 10:00 AM</option>
                <option>10:00 AM - 11:00 AM</option>
                <option>12:00 PM - 01:00 PM</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[var(--accent)] outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="+92 XXX XXXXXXX"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-[var(--accent)] outline-none"
              />
            </div>

            {/* Button */}
                            <button className="px-10 py-4 bg-[var(--accent)] text-white rounded-full font-semibold shadow-lg hover:scale-105 transition">

              Confirm Booking
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
