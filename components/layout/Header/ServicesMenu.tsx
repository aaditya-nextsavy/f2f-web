import Link from "next/link";
import { coreServices, additionalServices } from "@/lib/navigation";
import { ContainerIcon } from "@/components/icons";
import Image from "next/image";

export function ServicesMenu({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex w-max max-w-[1228px] p-[52px] rounded-[10px] bg-(--color-white) p-8 shadow-[0px_4px_4px_0px_#00000040,0px_2px_3px_0px_#0000001A]">
      <div className="grid grid-cols-[1fr_1.2fr] gap-8">
        <div>
          <p className="text-[14px] leading-[32px] tracking-[-0.2px] font-semibold text-(--color-primary)  pb-3"
          >
            CORE SERVICE
          </p>
          <svg
            width="560"
            height="1"
            viewBox="0 0 560 1"
            style={{ opacity: 0.2 }}
          >
            <line
              x1="0"
              y1="0.5"
              x2="560"
              y2="0.5"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="4 4"
            />
          </svg>
          <div className="mt-4 flex flex-row gap-[62px]">
            {coreServices.map((service) => (
              <Link
                key={service.label}
                href={service.href}
                onClick={onNavigate}
                className="group flex flex-col gap-3"
              >
                <div className="flex h-auto w-full items-center aspect-(242/70) justify-center  text-(--color-primary) transition-colors">

                  <Image
                    src={service?.iconSrc || "/images/common/menu-fcl.png"}
                    alt={service?.alt || ""}
                    width={242}
                    height={70}
                  />
                </div>
                <span className="text-(length:--text-small) font-medium text-(--color-primary) underline-offset-4 group-hover:underline">
                  {service.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
        {/* <svg
          width="1"
          height="100%"
          viewBox="0 0 1 560"
          preserveAspectRatio="none"
          style={{ opacity: 0.2 }}
        >
          <line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="560"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
        </svg> */}

        <div className="pl-8">
          <p className="text-[14px] leading-[32px] tracking-[-0.2px] font-semibold text-(--color-primary) pb-3">
            ADDITIONAL SERVICE
          </p>
          <svg
            width="560"
            height="1"
            viewBox="0 0 560 1"
            style={{ opacity: 0.2 }}
          >
            <line
              x1="0"
              y1="0.5"
              x2="560"
              y2="0.5"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeDasharray="4 4"
            />
          </svg>
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
            {additionalServices.map((service) => (
              <Link
                key={service.label}
                href={service.href}
                onClick={onNavigate}
                className="text-[16px] leading-[24px] font-regular text-(--color-primary) hover:underline underline-offset-4"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}
