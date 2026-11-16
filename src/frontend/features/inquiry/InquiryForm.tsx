"use client";

import React, { useState } from "react";
import { ArrowRight01Icon, ArrowDown01Icon } from "@/frontend/components/icons/NavIcons";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface SubmitState {
  status: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function InquiryForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [submit, setSubmit] = useState<SubmitState>({
    status: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FieldErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors: FieldErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = "Enter your name.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      nextErrors.email = "Enter your email address.";
    } else if (!emailRegex.test(form.email)) {
      nextErrors.email = "Enter a valid email address (e.g. name@domain.com).";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Include project context, role scope, or timeline.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmit({ status: "idle", message: "" });
      return;
    }

    setErrors({});
    setSubmit({ status: "loading", message: "" });

    try {
      const payloadMessage = form.subject.trim()
        ? `Subject: ${form.subject.trim()}\n\n${form.message}`
        : form.message;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: payloadMessage,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmit({
          status: "success",
          message: "Message sent. Jan Lloyd will respond shortly.",
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmit({
          status: "error",
          message:
            data.error ||
            "Unable to send message. Please try again or email cagocojanlloyd@gmail.com.",
        });
      }
    } catch {
      setSubmit({
        status: "error",
        message:
          "Network error. Please try again or email cagocojanlloyd@gmail.com.",
      });
    }
  };

  const isSubmitting = submit.status === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="inquiry-name"
            className="block text-[13px] font-medium text-secondary mb-1.5"
          >
            Name
          </label>
          <input
            id="inquiry-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
            className="w-full rounded-[4px] bg-[var(--bg-elevated)]/70 border border-[var(--border)] px-3.5 py-2.5 text-[14px] text-primary placeholder:text-muted focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
          {errors.name && (
            <p className="text-[12px] text-red-600 dark:text-red-400 mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="inquiry-email"
            className="block text-[13px] font-medium text-secondary mb-1.5"
          >
            Email
          </label>
          <input
            id="inquiry-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@company.com"
            autoComplete="email"
            className="w-full rounded-[4px] bg-[var(--bg-elevated)]/70 border border-[var(--border)] px-3.5 py-2.5 text-[14px] text-primary placeholder:text-muted focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
          {errors.email && (
            <p className="text-[12px] text-red-600 dark:text-red-400 mt-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="inquiry-subject"
          className="block text-[13px] font-medium text-secondary mb-1.5"
        >
          Subject (Optional)
        </label>
        <input
          id="inquiry-subject"
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="Product design role, public web application, or design system"
          autoComplete="off"
          className="w-full rounded-[4px] bg-[var(--bg-elevated)]/70 border border-[var(--border)] px-3.5 py-2.5 text-[14px] text-primary placeholder:text-muted focus:outline-none focus:border-[var(--accent)] transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="inquiry-message"
          className="block text-[13px] font-medium text-secondary mb-1.5"
        >
          Message
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about the project, timeline, or role scope..."
          rows={5}
          className="w-full rounded-[4px] bg-[var(--bg-elevated)]/70 border border-[var(--border)] p-3.5 text-[14px] text-primary placeholder:text-muted focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-[12px] text-red-600 dark:text-red-400 mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {submit.status === "success" && (
        <p className="p-3 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)] text-[13px] text-primary font-medium">
          {submit.message}
        </p>
      )}
      {submit.status === "error" && (
        <p className="p-3 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)] text-[13px] text-red-600 dark:text-red-400 font-medium">
          {submit.message}
        </p>
      )}

      <div className="flex items-center justify-between pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-inquire px-5 py-2.5 rounded-[4px] text-[13px] font-medium transition-opacity hover:opacity-90 disabled:opacity-50 cursor-pointer inline-flex items-center gap-1.5"
        >
          <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
          <ArrowRight01Icon size={12} className="shrink-0" />
        </button>

        <a
          href="/resume.pdf"
          download="Jan-Lloyd-Cagoco-Resume.pdf"
          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[4px] border border-[var(--border)] bg-[var(--bg-elevated)]/60 hover:bg-[var(--bg-elevated)] text-[12px] font-medium text-secondary hover:text-primary transition-colors"
        >
          <span>Download Resume PDF</span>
          <ArrowDown01Icon size={11} className="shrink-0 text-secondary" />
        </a>
      </div>
    </form>
  );
}
