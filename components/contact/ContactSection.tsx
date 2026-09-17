import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { contactInfo } from "@/lib/navigation";
import { PhoneIcon, MailIcon, MapPinIcon, ChevronRightIcon } from "@/components/icons";

const contactRows = [
    { icon: PhoneIcon, label: "Call Us", value: contactInfo.phone, href: contactInfo.phoneHref },
    { icon: MailIcon, label: "Email Us", value: contactInfo.email, href: contactInfo.emailHref },
    { icon: MapPinIcon, label: "Visit Us", value: "Go to Maps", href: contactInfo.mapsHref, newTab: true },
];

interface ContactSectionProps {
    heading: string;
    description: string;
}

export default function ContactSection({ heading, description }: ContactSectionProps) {
    return (
        <section>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-[100px]">
                    <ContactForm />

                    <div className="flex flex-col justify-between">
                        <div>
                            <h2 className="text-[28px] font-medium text-balance leading-[28px] lg:leading-[60px] text-(--color-primary) lg:text-[56px]">
                                {heading}
                            </h2>

                            <p className="mt-4 max-w-[673px] text-[15px] leading-[28px] text-(--color-primary) lg:text-[18px] tracking-[-0.3px]">
                                {description}
                            </p>
                        </div>

                        <div className="mt-4 sm:mt-8 flex flex-col lg:mt-10">
                            {contactRows.map(({ icon: Icon, label, value, href, newTab }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target={newTab ? "_blank" : undefined}
                                    rel={newTab ? "noopener noreferrer" : undefined}
                                    className="group flex items-center gap-3 border-b border-dashed border-(--form-placeholder) py-7 "
                                >
                                    <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-(--radius-full) border border-(--color-primary) text-(--color-primary)">
                                        <Icon className="h-[28px]" />
                                    </span>
                                    <span className="flex flex-1 flex-col">
                                        <span className="text-[14px] leading-4 text-(--color-primary) capitalize">
                                            {label}
                                        </span>
                                        <span className="text-[20px] font-medium leading-[30px] tracking-[-0.3px] text-(--color-primary) hover:underline underline-offset-3 decoration-1">
                                            {value}
                                        </span>
                                    </span>
                                    <ChevronRightIcon className="h-4 w-4 text-(--color-primary) transition-transform group-hover:translate-x-0.5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
