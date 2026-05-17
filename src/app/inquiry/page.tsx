"use client";

import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import AvailableBadge from "@/components/ui/AvailableBadge";
import Footer from "@/components/layout/Footer";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface SubmitState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function InquiryPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [submit, setSubmit] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSubmit({ status: "error", message: "Please fill in all fields." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setSubmit({ status: "error", message: "Please enter a valid email." });
      return;
    }

    setSubmit({ status: "loading", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmit({
          status: "success",
          message: "Message sent! I'll get back to you as soon as possible.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        setSubmit({
          status: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmit({
        status: "error",
        message: "Network error. Please try again.",
      });
    }
  };

  return (
    <div className="glass shadow-sm min-h-[calc(100vh-120px)] p-2 flex flex-col gap-2 rounded-xl">
      {/* Header — plain, no card */}
      <div className="p-6">
        {/* Top Row: Hire Me + Badge */}
        <div className="flex items-center justify-between mb-5">
          <SectionLabel text="Hire Me" />
          <AvailableBadge />
        </div>

        {/* Heading & Subtitle */}
        <div className="flex-1">
          <h1 className="text-[28px] font-bold text-primary mb-1 tracking-tight">
            Design Inquiry
          </h1>
          <p className="text-[15px] text-secondary mb-4 leading-relaxed">
            Got an idea and need design help? Reach out now
          </p>
        </div>
      </div>

      {/* Form Card */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name + Email Row */}
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              autoComplete="off"
              className="flex-1 bg-input text-gray-900 dark:text-white text-sm placeholder:text-gray-500 focus:placeholder:text-gray-300 dark:placeholder:text-gray-400 dark:focus:placeholder:text-gray-600 rounded-xl px-4 py-3.5 border border-white/40 dark:border-white/10 focus:outline-none focus:border-white/60 dark:focus:border-white/30 transition-colors duration-200"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              autoComplete="off"
              className="flex-1 bg-input text-gray-900 dark:text-white text-sm placeholder:text-gray-500 focus:placeholder:text-gray-300 dark:placeholder:text-gray-400 dark:focus:placeholder:text-gray-600 rounded-xl px-4 py-3.5 border border-white/40 dark:border-white/10 focus:outline-none focus:border-white/60 dark:focus:border-white/30 transition-colors duration-200"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={7}
            className="w-full bg-input text-gray-900 dark:text-white text-sm placeholder:text-gray-500 focus:placeholder:text-gray-300 dark:placeholder:text-gray-400 dark:focus:placeholder:text-gray-600 rounded-xl px-4 py-3.5 border border-white/40 dark:border-white/10 focus:outline-none focus:border-white/60 dark:focus:border-white/30 transition-colors duration-200 resize-none"
          />

          {/* Feedback */}
          {submit.status === "success" && (
            <p className="text-sm text-green-600 dark:text-green-400 font-medium">
              {submit.message}
            </p>
          )}
          {submit.status === "error" && (
            <p className="text-sm text-red-500 font-medium">{submit.message}</p>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-4 mt-2">
            <button
              type="submit"
              disabled={submit.status === "loading"}
              className="w-full bg-black dark:bg-[#2b2b2b] text-white dark:text-white text-sm font-semibold py-4 rounded-xl hover-outline duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submit.status === "loading" ? "Sending..." : "Submit Form"}
            </button>

            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200 dark:bg-[#2a2a2a]"></div>
              <span className="text-xs text-secondary font-medium uppercase tracking-wider">
                or
              </span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-[#2a2a2a]"></div>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cagocojanlloyd@gmail.com&su=Hire%20Inquiry%3A%20Let's%20Work%20Together"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 glass-btn text-primary dark:text-white text-sm font-semibold py-4 rounded-xl hover-outline transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Send an Email
            </a>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="bg-card rounded-xl p-4 mt-auto">
        <Footer />
      </div>
    </div>
  );
}