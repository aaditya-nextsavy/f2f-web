import type { ReactNode } from "react";

interface SectionTitleProps {
    label?: string;
    title?: ReactNode;
    description?: string;
    descriptionPosition?: "below" | "right";
    theme?: "default" | "inverted";
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    children?: ReactNode;
}

const SectionTitle = ({
    label,
    title,
    description,
    descriptionPosition = "below",
    theme = "default",
    className = "",
    titleClassName = "",
    descriptionClassName = "",
    children,
}: SectionTitleProps) => {
    const isSideBySide = descriptionPosition === "right";
    const isInverted = theme === "inverted";

    const textColorClass = isInverted ? "text-(--color-white)" : "text-(--color-primary)";

    const descriptionEl = description && (
        <p
            className={`text-[16px] leading-[1.6] ${textColorClass} ${!isSideBySide ? "mt-5 max-w-[700px]" : ""
                } ${descriptionClassName}`}
        >
            {description}
        </p>
    );

    return (
        <div
            className={`w-full ${isSideBySide
                ? "grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end"
                : ""
                } ${className}`}
        >
            <div>
                {label && (
                    <span
                        className={`mb-5 inline-flex items-center justify-center rounded-full border px-4.5 py-2.5  lg:px-5 lg:py-3 text-[14px]  leading-[1] ${isInverted
                            ? "border-(--color-white) text-(--color-white)"
                            : "border-(--color-primary) text-(--color-primary)"
                            }`}
                    >
                        <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${isInverted ? "bg-(--color-white)" : "bg-(--color-primary)"}`} />
                        {label}
                    </span>
                )}

                {title && (
                    <h2

                        className={` text-[28px]  font-medium leading-[1.1] tracking-[-1px] ${textColorClass} md:text-[48px] lg:text-[56px] xl:leading-[60px] ${titleClassName} `}
                    >
                        {title}
                    </h2>
                )}
            </div>

            {isSideBySide ? (
                (description || children) && (
                    <div>
                        {descriptionEl}
                        {children}
                    </div>
                )
            ) : (
                descriptionEl
            )}
        </div>
    );
};

export default SectionTitle;
