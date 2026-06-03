import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaLinkedin />, label: "LinkedIn", value: "kollara-maheshwar-rao", href: "https://www.linkedin.com/in/kollara-maheshwar-rao", color: "bg-blue-600" },
  { icon: <FaGithub />, label: "GitHub", value: "Kollaramaheshwarrao", href: "https://github.com/Kollaramaheshwarrao", color: "bg-gray-800" },
  { icon: <FaTwitter />, label: "X (Twitter)", value: "@KollaraRao", href: "https://x.com/KollaraRao", color: "bg-neutral-800" },
  { icon: <FaEnvelope />, label: "Email", value: "kollaramaheshwarrao@gmail.com", href: "mailto:kollaramaheshwarrao@gmail.com", color: "bg-red-500" },
  { icon: <FaPhoneAlt />, label: "Phone", value: "Available on request", href: "#", color: "bg-green-600" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Hyderabad, India", href: "#", color: "bg-orange-500" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      await fetch(
        "https://script.google.com/macros/s/AKfycbw9XJ87ysmpFREUUHNhEds0nKuQvZJRxiMX4cLspYszYYFmLjxolz0r7P78PkIMRkbb/exec",
        { method: "POST", body: form, mode: "no-cors" }
      );
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      alert("❌ Error: " + error.message);
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden bg-[#0f172a]">
      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-white mb-2"
      >
        Get In Touch
      </motion.h2>
      <p className="text-center text-gray-400 mb-12">Have an opportunity or just want to say hi? My inbox is always open 👋</p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left - Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60 }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-2xl font-semibold text-white mb-2">Let's Connect</h3>
          <p className="text-gray-400 leading-7">
            I'm always open to discussing new opportunities, collaborations, research, or just having a tech conversation. Feel free to reach out!
          </p>
          <div className="flex flex-col gap-3 mt-4">
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 group"
              >
                <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center text-white text-lg shadow-lg`}>
                  {s.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500">{s.label}</p>
                  <p className="text-sm text-gray-200 group-hover:text-white transition">{s.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60 }}
          className="flex flex-col gap-4 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl"
        >
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400 font-medium">Your Name</label>
            <input
              type="text" name="name" required value={formData.name} onChange={handleChange}
              placeholder="Kollara Maheshwar Rao"
              className="bg-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm border border-white/10 focus:border-blue-500 focus:bg-white/15 transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400 font-medium">Email Address</label>
            <input
              type="email" name="email" required value={formData.email} onChange={handleChange}
              placeholder="you@example.com"
              className="bg-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm border border-white/10 focus:border-blue-500 focus:bg-white/15 transition"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400 font-medium">Message</label>
            <textarea
              name="message" required value={formData.message} onChange={handleChange}
              placeholder="Hey Mahi, I'd love to connect about..."
              rows={5}
              className="bg-white/10 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm border border-white/10 focus:border-blue-500 focus:bg-white/15 transition resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg transition-all"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </motion.button>

          {sent && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-green-400 font-medium text-sm mt-1"
            >
              ✅ Message sent! I'll get back to you soon.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
