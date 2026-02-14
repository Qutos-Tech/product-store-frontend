import { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Footer from "../components/Footer";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production: send to backend / email service
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark mb-2">
            Contact Us
          </h1>
          <div className="h-1 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="flex flex-col gap-5">
            <p className="text-sm text-gray-500 leading-relaxed">
              Have a question, feedback, or a bulk order inquiry? We'd love to
              hear from you. Reach out and we'll get back to you within 24 hours.
            </p>

            {[
              {
                icon: <EmailOutlinedIcon sx={{ fontSize: 20 }} />,
                label: "Email",
                value: "support@sethji.in",
              },
              {
                icon: <PhoneOutlinedIcon sx={{ fontSize: 20 }} />,
                label: "Phone",
                value: "+91 987XXXXXXX",
              },
              {
                icon: <LocationOnOutlinedIcon sx={{ fontSize: 20 }} />,
                label: "Address",
                value: "123, Bazaar Street, New Delhi – 110001",
              },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center
                               justify-center text-primary shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    {label}
                  </p>
                  <p className="text-sm text-dark font-medium mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 py-8">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center
                               justify-center text-green-600 text-2xl font-bold">
                  ✓
                </div>
                <p className="font-bold text-dark text-center">Message Sent!</p>
                <p className="text-sm text-gray-500 text-center">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-2 text-xs text-primary font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <h2 className="text-base font-bold text-dark">Send a message</h2>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg
                               text-sm focus:outline-none focus:ring-2 focus:ring-primary
                               bg-gray-50"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg
                               text-sm focus:outline-none focus:ring-2 focus:ring-primary
                               bg-gray-50"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg
                               text-sm focus:outline-none focus:ring-2 focus:ring-primary
                               bg-gray-50 resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!form.name || !form.email || !form.message}
                  className="w-full py-2.5 rounded-xl bg-primary text-white
                             text-sm font-bold hover:bg-green-700
                             transition-colors duration-200 active:scale-95
                             disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>

        </div>
      </main>

      {/* FS-05: Footer visible, no overlap */}
      <Footer />
    </div>
  );
};

export default ContactPage;