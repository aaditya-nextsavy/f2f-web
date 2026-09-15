"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { ChevronDownIcon } from "@/components/icons";
import { fieldControlClass } from "@/components/ui/FormField";

type SelectProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  invalid?: boolean;
  className?: string;
};

export function Select({ value, onChange, options, placeholder = "Select", invalid, className = "" }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const optionId = (index: number) => `${listboxId}-option-${index}`;

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      const index = options.indexOf(value);
      setHighlighted(index >= 0 ? index : 0);
    }
  }, [open, value, options]);

  const selectOption = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!open) setOpen(true);
      else setHighlighted((prev) => Math.min(prev + 1, options.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (open) setHighlighted((prev) => Math.max(prev - 1, 0));
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!open) setOpen(true);
      else if (options[highlighted]) selectOption(options[highlighted]);
    } else if (event.key === "Escape") {
      setOpen(false);
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-invalid={invalid}
        aria-activedescendant={open ? optionId(highlighted) : undefined}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={`${fieldControlClass} flex cursor-pointer items-center justify-between gap-2 pr-3 text-left ${
          !value ? "text-(--form-placeholder)" : ""
        } ${invalid ? "border-(--color-error) focus:border-(--color-error)" : ""} ${className}`}
      >
        <span className="truncate">{value || placeholder}</span>
        <ChevronDownIcon
          className={`h-4 w-4 shrink-0 text-(--color-primary)/60 transition-transform duration-200 ease-out ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <ul
        id={listboxId}
        role="listbox"
        aria-hidden={!open}
        data-lenis-prevent
        className={`absolute z-20 mt-2 max-h-60 w-full origin-top overflow-auto rounded-(--radius-md) border border-(--blue-border) bg-white p-1.5 shadow-lg outline-none transition-[opacity,transform] duration-150 ease-out ${
          open ? "visible scale-100 opacity-100" : "invisible pointer-events-none scale-95 opacity-0"
        }`}
      >
        {options.map((option, index) => (
          <li
            key={option}
            id={optionId(index)}
            role="option"
            aria-selected={option === value}
            onMouseEnter={() => setHighlighted(index)}
            onClick={() => selectOption(option)}
            className={`cursor-pointer rounded-(--radius-sm) px-3 py-2 text-(length:--text-body) text-(--color-primary) transition-colors duration-150 ${
              option === value
                ? "bg-(--color-iceblue) font-medium"
                : highlighted === index
                  ? "bg-(--color-iceblue)/60"
                  : ""
            }`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
