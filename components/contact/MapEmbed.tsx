interface MapEmbedProps {
    src: string;
}

export default function MapEmbed({ src }: MapEmbedProps) {
    return (
        <section>
            <div className="container mx-auto">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] sm:aspect-[16/9] lg:aspect-[21/6]">
                    <iframe
                        src={src}
                        title="Our location on the map"
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="absolute inset-0 h-full w-full border-0"
                    />

                </div>
            </div>
        </section>
    );
}
