"use client";

import { useState, type FormEvent } from "react";
import { FormField, fieldControlClass } from "@/components/ui/FormField";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { serviceOptions } from "@/lib/navigation";
import { ArrowRightIcon, CheckCircleIcon, AlertCircleIcon } from "@/components/icons";
import { usePopup } from "@/components/providers/PopupProvider";
import { validateContactForm, type ContactFormErrors } from "@/lib/validateContactForm";
import { getRecaptchaToken } from "@/lib/recaptcha";
import type { ContactFormValues } from "@/types/contact";

type ContactFormState = ContactFormValues;

const initialState: ContactFormState = {
  firstName: "",
  lastName: "",
  contactNumber: "",
  email: "",
  service: "",
  cargoQuantity: "",
  message: "",
};

function StatusPopup({ variant, message }: { variant: "success" | "error"; message: string }) {
  const Icon = variant === "success" ? CheckCircleIcon : AlertCircleIcon;
  return (
    <div className="flex flex-col items-center gap-4 py-2 text-center">
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-full ${
          variant === "success"
            ? "bg-(--color-success)/10 text-(--color-success)"
            : "bg-(--color-error)/10 text-(--color-error)"
        }`}
      >
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="text-[24px] font-medium text-(--color-primary)">
        {variant === "success" ? "Message Sent" : "Something Went Wrong"}
      </h3>
      <p className="text-[16px] text-(--color-primary)/70">{message}</p>
    </div>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const { openPopup } = usePopup();

  const update = (field: keyof ContactFormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const updateService = (value: string) => {
    setForm((prev) => ({ ...prev, service: value }));
    setErrors((prev) => (prev.service ? { ...prev, service: undefined } : prev));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitting(true);
    try {
      const recaptchaToken = await getRecaptchaToken("contact_form_submit");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, recaptchaToken }),
      });
      const data = await response.json().catch(() => null);

      if (!response.ok) {
        if (data?.errors) setErrors(data.errors);
        openPopup(
          <StatusPopup
            variant="error"
            message={data?.message ?? "We couldn't send your message. Please try again."}
          />,
        );
        return;
      }

      setForm(initialState);
      openPopup(
        <StatusPopup
          variant="success"
          message={data?.message ?? "Thanks! Your message has been sent. we'll be in touch shortly."}
        />,
      );
    } catch {
      openPopup(
        <StatusPopup
          variant="error"
          message="We couldn't send your message. Please check your connection and try again."
        />,
      );
    } finally {
      setSubmitting(false);
    }
  };

  const errorInputClass = (field: keyof ContactFormState) =>
    errors[field] ? "border-(--color-error) focus:border-(--color-error)" : "";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-(--radius-lg) border border-(--indigo-border) bg-(--color-iceblue) p-6 shadow-(--shadow-contact-form) sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="First Name" required error={errors.firstName}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={form.firstName}
            onChange={update("firstName")}
            aria-invalid={Boolean(errors.firstName)}
            className={`${fieldControlClass} bg-white ${errorInputClass("firstName")}`}
          />
        </FormField>

        <FormField label="Last Name" required error={errors.lastName}>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={form.lastName}
            onChange={update("lastName")}
            aria-invalid={Boolean(errors.lastName)}
            className={`${fieldControlClass} bg-white ${errorInputClass("lastName")}`}
          />
        </FormField>

        <FormField label="Contact Number" required error={errors.contactNumber}>
          <input
            type="tel"
            placeholder="Enter Your Contact Number"
            value={form.contactNumber}
            onChange={update("contactNumber")}
            aria-invalid={Boolean(errors.contactNumber)}
            className={`${fieldControlClass} bg-white ${errorInputClass("contactNumber")}`}
          />
        </FormField>

        <FormField label="Email" required error={errors.email}>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            className={`${fieldControlClass} bg-white ${errorInputClass("email")}`}
          />
        </FormField>

        <FormField label="Service Interested In" required error={errors.service}>
          <Select
            value={form.service}
            onChange={updateService}
            options={serviceOptions}
            placeholder="Select Service"
            invalid={Boolean(errors.service)}
            className="bg-white"
          />
        </FormField>

        <FormField label="Cargo Quantity (In Tons)">
          <input
            type="text"
            placeholder="Enter Cargo Quantity"
            value={form.cargoQuantity}
            onChange={update("cargoQuantity")}
            className={`${fieldControlClass} bg-white`}
          />
        </FormField>

        <FormField label="Message" className="sm:col-span-2">
          <textarea
            rows={4}
            placeholder="Include a Message..."
            value={form.message}
            onChange={update("message")}
            className={`${fieldControlClass} resize-none bg-white`}
          />
        </FormField>
      </div>

      <Button
        type="submit"
        variant="yellow"
        disabled={submitting}
        className="mt-6 sm:w-auto w-[100%]! cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending..." : "Contact Us"}
        {!submitting && <ArrowRightIcon className="h-4 w-4" />}
      </Button>
    </form>
  );
}
