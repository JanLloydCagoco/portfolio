"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Project } from "@/types";
import { projects } from "@/lib/projects";
import OpticalPlateCanvas, {
  PlateVariant,
} from "@/components/studio/OpticalPlateCanvas";

export type DrawerMode =
  | { type: "closed" }
  | { type: "project"; project: Project }
  | { type: "inquiry" };

interface FlutedInspectionDrawerProps {
  drawer: DrawerMode;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onOpenInquiry: () => void;
}

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

export default function FlutedInspectionDrawer({
  drawer,
  onClose,
  onSelectProject,
  onOpenInquiry,
}: FlutedInspectionDrawerProps) {
  const [activePlate, setActivePlate] = useState<PlateVariant>("A");

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submit, setSubmit] = useState<{
    status: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });

  useEffect(() => {
    setActivePlate("A");
  }, [drawer.type === "project" ? drawer.project.slug : null]);

  useEffect(() => {
    if (drawer.type === "closed") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [drawer, onClose]);

  if (drawer.type === "closed") return null;

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
    if (!form.name.trim()) nextErrors.name = "Enter your name.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      nextErrors.email = "Enter your email address.";
    } else if (!emailRegex.test(form.email)) {
      nextErrors.email = "Enter a valid email address (e.g. name@domain.com).";
    }
    if (!form.message.trim()) {
      nextErrors.message =
        "Include a short brief, role description, or timeline.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
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
            "Unable to send message. Please try again or email directly.",
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

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label={
        drawer.type === "project" ? drawer.project.name : "Start an Inquiry"
      }
    >
      {/* Layer 2 Delicate Fluted Glass Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 fluted-glass transition-opacity duration-200 cursor-pointer"
        aria-hidden="true"
      />

      {/* Slide-Over Panel */}
      <aside className="relative z-10 w-full max-w-[660px] h-full tactical-ground hairline-l shadow-tactical flex flex-col justify-between overflow-y-auto">
        {/* Top Modal Header */}
        <div className="sticky top-0 z-20 fluted-glass hairline-b px-6 sm:px-8 h-14 flex items-center justify-between gap-4 shrink-0">
          <span className="text-[13px] font-medium text-secondary">
            {drawer.type === "project" ? "Project Overview" : "Direct Inquiry"}
          </span>

          <div className="flex items-center gap-2">
            {drawer.type === "project" && (
              <>
                {(() => {
                  const idx = projects.findIndex(
                    (p) => p.slug === drawer.project.slug
                  );
                  const nextProject = projects[(idx + 1) % projects.length];
                  return (
                    <button
                      type="button"
                      onClick={() => onSelectProject(nextProject)}
                      className="px-3 py-1 rounded-[4px] hairline-box bg-[var(--bg)] text-[12px] text-secondary hover:text-primary cursor-pointer transition-colors"
                    >
                      Next: {nextProject.name} →
                    </button>
                  );
                })()}
              </>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 rounded-[4px] hairline-box bg-[var(--bg)] text-[12px] font-medium text-primary hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

        {/* Drawer Body */}
        {drawer.type === "project" ? (
          <div className="p-6 sm:p-8 space-y-6 flex-1">
            {/* Title & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.025em] leading-tight text-primary">
                  {drawer.project.name}
                </h2>
                <p className="text-[15px] text-secondary mt-1">
                  {drawer.project.tagline}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={drawer.project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-[4px] hairline-box bg-[var(--bg-elevated)]/60 hover:bg-[var(--bg-elevated)] text-[13px] font-medium text-primary transition-colors"
                >
                  Visit Website ↗
                </a>
                <Link
                  href={`/projects/${drawer.project.slug}`}
                  className="px-3.5 py-2 rounded-[4px] hairline-box text-[13px] text-secondary hover:text-primary transition-colors"
                >
                  Full Page ↗
                </Link>
              </div>
            </div>

            {/* Primary UI Mockup Stage with Screen Tabs */}
            <div className="space-y-3">
              <OpticalPlateCanvas
                project={drawer.project}
                plateVariant={activePlate}
                interactive={false}
                className="w-full min-h-[260px] sm:min-h-[300px]"
              />

              <div
                role="tablist"
                aria-label="Project screens"
                className="flex items-center gap-2"
              >
                {(
                  [
                    { id: "A", label: "Overview Screen" },
                    { id: "B", label: "Design System" },
                    { id: "C", label: "Product Flow" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activePlate === tab.id}
                    onClick={() => setActivePlate(tab.id)}
                    className={`px-3 py-1.5 rounded-[4px] text-[12px] font-medium cursor-pointer transition-colors ${
                      activePlate === tab.id
                        ? "bg-[var(--text-primary)] text-[var(--bg)]"
                        : "bg-[var(--bg-elevated)] text-secondary hover:text-primary"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Summary */}
            <p className="text-[15px] text-secondary leading-relaxed">
              {drawer.project.description}
            </p>

            {/* Clean Metadata List */}
            <div className="divide-y divide-[var(--border)] hairline-t hairline-b text-[14px]">
              <div className="py-2.5 flex justify-between">
                <span className="text-secondary">Client</span>
                <span className="text-primary font-medium">
                  {drawer.project.client}
                </span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-secondary">Company</span>
                <span className="text-primary">{drawer.project.company}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-secondary">Scope</span>
                <span className="text-primary">
                  {drawer.project.projectType}
                </span>
              </div>
              <div className="py-2.5 flex justify-between tabular-nums">
                <span className="text-secondary">Year</span>
                <span className="text-primary">{drawer.project.year}</span>
              </div>
            </div>
          </div>
        ) : (
          /* Inquiry Form Mode */
          <div className="p-6 sm:p-8 space-y-6 flex-1">
            <div>
              <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.025em] leading-tight text-primary">
                Start an Inquiry
              </h2>
              <p className="text-[15px] text-secondary mt-1">
                Send a message directly or email{" "}
                <a
                  href="mailto:cagocojanlloyd@gmail.com"
                  className="text-primary underline"
                >
                  cagocojanlloyd@gmail.com
                </a>
                .
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="drawer-name"
                    className="block text-[13px] font-medium text-secondary mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="drawer-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    className="w-full rounded-[4px] bg-[var(--bg-elevated)]/70 hairline-box px-3.5 py-2.5 text-[14px] text-primary placeholder:text-muted focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                  {errors.name && (
                    <p className="text-[12px] text-red-600 dark:text-red-400 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="drawer-email"
                    className="block text-[13px] font-medium text-secondary mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="drawer-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    autoComplete="email"
                    className="w-full rounded-[4px] bg-[var(--bg-elevated)]/70 hairline-box px-3.5 py-2.5 text-[14px] text-primary placeholder:text-muted focus:outline-none focus:border-[var(--accent)] transition-colors"
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
                  htmlFor="drawer-subject"
                  className="block text-[13px] font-medium text-secondary mb-1.5"
                >
                  Subject (Optional)
                </label>
                <input
                  id="drawer-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Product design role or project scope"
                  className="w-full rounded-[4px] bg-[var(--bg-elevated)]/70 hairline-box px-3.5 py-2.5 text-[14px] text-primary placeholder:text-muted focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="drawer-message"
                  className="block text-[13px] font-medium text-secondary mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="drawer-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about the role, project goals, or timeline..."
                  className="w-full rounded-[4px] bg-[var(--bg-elevated)]/70 hairline-box p-3.5 text-[14px] text-primary placeholder:text-muted focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                />
                {errors.message && (
                  <p className="text-[12px] text-red-600 dark:text-red-400 mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {submit.status === "success" && (
                <div className="p-3 rounded-[4px] hairline-box bg-[var(--bg-elevated)] text-[13px] text-primary font-medium">
                  {submit.message}
                </div>
              )}

              {submit.status === "error" && (
                <div className="p-3 rounded-[4px] hairline-box bg-[var(--bg-elevated)] text-[13px] text-red-600 dark:text-red-400 font-medium">
                  {submit.message}
                </div>
              )}

              <div className="flex items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={submit.status === "loading"}
                  className="btn-inquire px-6 py-2.5 rounded-[4px] text-[14px] font-medium cursor-pointer disabled:opacity-50"
                >
                  {submit.status === "loading"
                    ? "Sending..."
                    : "Send Inquiry →"}
                </button>

                <Link
                  href="/inquiry"
                  className="text-[13px] text-secondary hover:text-primary transition-colors"
                >
                  Open standalone page ↗
                </Link>
              </div>
            </form>
          </div>
        )}

        {/* Drawer Bottom Bar */}
        <div className="px-6 sm:px-8 py-4 hairline-t flex items-center justify-between text-[13px] text-secondary bg-[var(--bg-elevated)]/40">
          <span>Jan Lloyd Cagoco · Caloocan, PH</span>
          {drawer.type === "project" && (
            <button
              type="button"
              onClick={onOpenInquiry}
              className="text-primary font-medium hover:underline cursor-pointer"
            >
              Inquire about working together →
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}
