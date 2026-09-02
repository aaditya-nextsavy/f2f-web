"use client";

import { useState, type FormEvent } from "react";
import { FormField, fieldControlClass } from "@/components/ui/FormField";
import { Button } from "@/components/ui/Button";
import { serviceOptions } from "@/lib/navigation";
import { ArrowRightIcon } from "@/components/icons";

type ContactFormState = {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  service: string;
  cargoQuantity: string;
  message: string;
};

const initialState: ContactFormState = {
  firstName: "",
  lastName: "",
  contactNumber: "",
  email: "",
  service: "",
  cargoQuantity: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);

  const update = (field: keyof ContactFormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setForm(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-(--radius-lg)  bg-white p-6 shadow-(--shadow-contact-form) sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="First Name" required>
          <input
            required
            type="text"
            placeholder="Enter Your Name"
            value={form.firstName}
            onChange={update("firstName")}
            className={`${fieldControlClass}`}
          />
        </FormField>

        <FormField label="Last Name" required>
          <input
            required
            type="text"
            placeholder="Enter Your Name"
            value={form.lastName}
            onChange={update("lastName")}
            className={`${fieldControlClass}`}
          />
        </FormField>

        <FormField label="Contact Number" required>
          <input
            required
            type="tel"
            placeholder="Enter Your Contact Number"
            value={form.contactNumber}
            onChange={update("contactNumber")}
            className={`${fieldControlClass}`}
          />
        </FormField>

        <FormField label="Email" required>
          <input
            required
            type="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={update("email")}
            className={`${fieldControlClass}`}
          />
        </FormField>

        <FormField label="Service Interested In" required>
          <select
            required
            value={form.service}
            onChange={update("service")}
            className={`${fieldControlClass}`}
          >
            <option value="" disabled>
              Select Service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Cargo Quantity (In Tons)">
          <input
            type="text"
            placeholder="Enter Cargo Quantity"
            value={form.cargoQuantity}
            onChange={update("cargoQuantity")}
            className={`${fieldControlClass}`}
          />
        </FormField>

        <FormField label="Message" className="sm:col-span-2">
          <textarea
            rows={4}
            placeholder="Include a Message..."
            value={form.message}
            onChange={update("message")}
            className={`${fieldControlClass} resize-none`}
          />
        </FormField>
      </div>

      <Button type="submit" variant="yellow" className="mt-6  sm:w-auto w-[100%]! cursor-pointer">
        Contact Us
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </form>
  );
}
