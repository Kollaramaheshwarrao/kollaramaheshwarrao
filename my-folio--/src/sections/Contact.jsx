import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyAq80_RCy-4Ev9-BZQbEfXrPZK_6sDc4G7fwAlzIO59FZYL7uIcp_pg5VWPJRqri-R/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const text = await response.text();

      if (text === "Success") {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send: " + text);
      }
    } catch (error) {
      alert("❌ Error: " + error.message);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-12 px-4 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-4 bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20 shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded bg-white/20 text-white placeholder-gray-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded bg-white/20 text-white placeholder-gray-300"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded bg-white/20 text-white placeholder-gray-300"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
