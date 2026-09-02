import { FaArrowRight } from "react-icons/fa6";
import { Button } from "@/components/ui/Button";
import type { BlogSidebarCtaData } from "@/types/blogs";

const BlogSidebarCta = ({ title, description, action }: BlogSidebarCtaData) => (
    <div className="mt-6 rounded-[16px] bg-(--color-primary) p-6 text-white">
        <p className="text-[18px] font-medium leading-[26px]">{title}</p>

        {description && <p className="mt-2 text-[14px] leading-[22px] text-white/70">{description}</p>}

        <Button href={action.href} variant={action.variant} className="mt-5 w-full justify-center">
            {action.label}
            {action.variant === "yellow" && <FaArrowRight size={15} />}
        </Button>
    </div>
);

export default BlogSidebarCta;
