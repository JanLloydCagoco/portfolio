import React from "react";
import PageHeader from "@/frontend/components/ui/PageHeader";
import ContactInfoPills from "./ContactInfoPills";
import InquiryForm from "./InquiryForm";

export default function InquiryView() {
  return (
    <div className="w-full space-y-10">
      <PageHeader
        title="inquire"
        description="Available for product design roles, design systems engineering, and select technical consulting initiatives."
      />

      <div className="space-y-8">
        <ContactInfoPills />
        <InquiryForm />
      </div>
    </div>
  );
}
