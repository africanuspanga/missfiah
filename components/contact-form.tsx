"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { BUSINESS } from "@/lib/data";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Hello ${BUSINESS.name},`,
      `My name is ${form.name}.`,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : "",
      form.product ? `Product interested in: ${form.product}` : "",
      "",
      "Message:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${BUSINESS.whatsappLink}?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", product: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-stone-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-all focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-stone-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-all focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
            placeholder="+255..."
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-all focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="product" className="mb-1.5 block text-sm font-medium text-stone-700">
          Product Interested In
        </label>
        <select
          id="product"
          name="product"
          value={form.product}
          onChange={handleChange}
          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-all focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
        >
          <option value="">Select a product</option>
          <option value="Vitamin C Organic Oil">Vitamin C Organic Oil</option>
          <option value="24K Gold Organic Oil">24K Gold Organic Oil</option>
          <option value="Retinol Organic Oil">Retinol Organic Oil</option>
          <option value="Almond Organic Oil">Almond Organic Oil</option>
          <option value="Intensive Glow Serum">Intensive Glow Serum</option>
          <option value="Turmeric Soap">Turmeric Organic & Glow Soap</option>
          <option value="Glutathione & Kojic Soap">Glutathione & Kojic Soap</option>
          <option value="Glow & Brightening Shower Gel">Glow & Brightening Shower Gel</option>
          <option value="Pretty Polishing Body Wash">Pretty Polishing Body Wash</option>
          <option value="Vitamin C Whitening Shower Gel">Vitamin C Whitening Shower Gel</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-stone-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-stone-900 outline-none transition-all focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20"
          placeholder="How can we help you?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
      >
        <Send size={18} />
        Send Message
      </button>
      {submitted && (
        <p className="text-sm font-medium text-brand">
          Thank you! Your message has been sent via WhatsApp.
        </p>
      )}
    </form>
  );
}
