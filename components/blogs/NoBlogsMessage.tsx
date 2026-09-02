interface NoBlogsMessageProps {
    className?: string;
}

const NoBlogsMessage = ({ className = "" }: NoBlogsMessageProps) => (
    <div
        className={`flex flex-col items-center justify-center rounded-[24px] px-6 pt-16 text-center ${className}`}
    >
        <p className="text-[20px] font-medium text-(--color-primary) lg:text-[24px]">No Blogs Available</p>
        <p className="mt-2 text-[15px] text-(--color-primary)/60 lg:text-[16px]">Please try again later.</p>
    </div>
);

export default NoBlogsMessage;
