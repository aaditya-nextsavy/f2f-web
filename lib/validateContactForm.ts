import type { ContactFormValues } from "@/types/contact";

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{7,20}$/;

export function validateContactForm(values: Partial<ContactFormValues>): ContactFormErrors {
    const errors: ContactFormErrors = {};

    if (!values.firstName?.trim()) errors.firstName = "First name is required.";
    if (!values.lastName?.trim()) errors.lastName = "Last name is required.";

    if (!values.contactNumber?.trim()) {
        errors.contactNumber = "Contact number is required.";
    } else if (!PHONE_REGEX.test(values.contactNumber.trim())) {
        errors.contactNumber = "Enter a valid contact number.";
    }

    if (!values.email?.trim()) {
        errors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
        errors.email = "Enter a valid email address.";
    }

    if (!values.service?.trim()) errors.service = "Please select a service.";

    return errors;
}
