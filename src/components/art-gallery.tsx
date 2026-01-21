"use client";

import Masonry from "@/components/magicui/masonry";
import { ArtItem } from "@/data/art";

interface ArtGalleryProps {
    artworks: ArtItem[];
}

export default function ArtGallery({ artworks }: ArtGalleryProps) {
    return (
        <div className="w-full min-h-[800px]">
            <Masonry
                items={artworks}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.98}
                blurToFocus={true}
                colorShiftOnHover={false}
            />
        </div>
    );
}
