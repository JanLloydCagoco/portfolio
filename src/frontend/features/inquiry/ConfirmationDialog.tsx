"use client";

import React, { useEffect, useRef } from "react";

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
}

// Native <dialog>: showModal() gives focus trap, Esc to close, inert background and focus return.
export default function ConfirmationDialog({ open, onClose }: ConfirmationDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="inquiry-confirm-title"
      aria-describedby="inquiry-confirm-desc"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}
      className="inquiry-dialog m-auto w-[calc(100%-2.5rem)] max-w-[400px] rounded-[4px] border border-[var(--border-strong)] bg-[var(--bg-elevated)] p-0 text-primary shadow-[var(--shadow-elevated)]"
    >
      <div className="p-6 space-y-4">
        <h2 id="inquiry-confirm-title" className="text-[20px] font-bold tracking-tight font-grotesk">
          Message sent
        </h2>
        <p id="inquiry-confirm-desc" className="text-[14px] text-secondary leading-snug">
          Thanks for reaching out. Jan Lloyd will respond shortly.
        </p>
        <div className="flex justify-end pt-2">
          <button
            type="button"
            autoFocus
            onClick={() => ref.current?.close()}
            className="btn-inquire px-5 py-2.5 rounded-[4px] text-[14px] font-medium transition-opacity hover:opacity-90 cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </dialog>
  );
}
