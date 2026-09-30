import type { ContactFormValues } from "@/types/contact";

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{7,20}$/;
// Letters (any language), spaces, apostrophes, hyphens and dots - no digits.
const NAME_REGEX = /^[\p{L}\s'.-]+$/u;
const QUANTITY_REGEX = /^\d+(\.\d+)?$/;

/** Strips anything that can't appear in a name (digits, symbols) as the user types. */
export const sanitizeName = (value: string) => value.replace(/[^\p{L}\s'.-]/gu, "");

/** Keeps only digits and a single decimal point, as the user types. */
export const sanitizeQuantity = (value: string) => {
    const cleaned = value.replace(/[^0-9.]/g, "");
    const dot = cleaned.indexOf(".");
    return dot === -1 ? cleaned : cleaned.slice(0, dot + 1) + cleaned.slice(dot + 1).replace(/\./g, "");
};

export function validateContactForm(values: Partial<ContactFormValues>): ContactFormErrors {
    const errors: ContactFormErrors = {};

    if (!values.firstName?.trim()) errors.firstName = "First name is required.";
    else if (!NAME_REGEX.test(values.firstName.trim())) errors.firstName = "First name can only contain letters.";

    if (!values.lastName?.trim()) errors.lastName = "Last name is required.";
    else if (!NAME_REGEX.test(values.lastName.trim())) errors.lastName = "Last name can only contain letters.";

    if (values.cargoQuantity?.trim() && !QUANTITY_REGEX.test(values.cargoQuantity.trim())) {
        errors.cargoQuantity = "Enter a valid quantity in numbers.";
    }

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
