import type { LabelHTMLAttributes, ReactNode } from "react";

export const fieldControlClass =
  "w-full rounded-(--radius-md) border border-(--blue-border) bg-transparent px-4 py-3 text-(length:--text-body) text-(--color-primary) placeholder:text-(--form-placeholder) outline-none transition-colors focus:border-(--color-primary)";

type FormFieldProps = LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

export function FormField({ label, required, error, children, className = "", ...rest }: FormFieldProps) {
  return (
    <label className={`flex flex-col gap-2 text-(length:--text-small) text-(--color-primary) ${className}`} {...rest}>
      <span>
        {label}
        {required && <span className="text-(--color-primary-hover)">*</span>}
      </span>
      {children}
      {error && (
        <span role="alert" className="text-(length:--text-xs) font-normal text-(--color-error)">
          {error}
        </span>
      )}
    </label>
  );
}
