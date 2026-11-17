import React from "react";
import PageHeader from "@/frontend/components/ui/PageHeader";
import InquiryForm from "./InquiryForm";

export default function InquiryView() {
  return (
    <div className="w-full space-y-10">
      <PageHeader
        title="inquire"
        description="Available for full-stack development roles, web and mobile app builds, and select technical consulting initiatives."
      />

      <InquiryForm />
    </div>
  );
}
