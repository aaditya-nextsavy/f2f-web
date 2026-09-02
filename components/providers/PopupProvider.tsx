"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@/components/icons";

type PopupContextValue = {
  openPopup: (content: ReactNode) => void;
  closePopup: () => void;
};

const PopupContext = createContext<PopupContextValue | null>(null);

export function PopupProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ReactNode>(null);

  const openPopup = useCallback((node: ReactNode) => setContent(node), []);
  const closePopup = useCallback(() => setContent(null), []);

  useEffect(() => {
    if (!content) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePopup();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [content, closePopup]);

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      {children}
      {content &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-(--z-modal) flex items-center justify-center bg-(--color-primary)/60 p-4"
            onClick={closePopup}
          >
            <div
              data-lenis-prevent
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-(--radius-lg) bg-(--color-white) p-8 shadow-(--shadow-contact-form)"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closePopup}
                aria-label="Close"
                className="absolute right-4 top-4 text-(--color-primary) transition-opacity hover:opacity-60"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
              {content}
            </div>
          </div>,
          document.body
        )}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error("usePopup must be used within a PopupProvider");
  return ctx;
}
