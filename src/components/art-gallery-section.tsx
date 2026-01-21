"use client";

import { useState, useEffect } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import ArtGallery from "@/components/art-gallery";
import { ArtItem } from "@/data/art";

interface ArtGallerySectionProps {
    artworks: ArtItem[];
    blurFadeDelay: number;
}

export default function ArtGallerySection({ artworks, blurFadeDelay }: ArtGallerySectionProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadedCount, setLoadedCount] = useState(0);

    useEffect(() => {
        // Reset state when artworks change
        setIsLoaded(false);
        setLoadedCount(0);

        if (artworks.length === 0) {
            setIsLoaded(true);
            return;
        }

        // Preload all images
        let loaded = 0;
        const imagePromises = artworks.map((artwork) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                    loaded++;
                    setLoadedCount(loaded);
                    resolve(artwork.img);
                };
                img.onerror = reject;
                img.src = artwork.img;
            });
        });

        Promise.all(imagePromises)
            .then(() => {
                setIsLoaded(true);
            })
            .catch((error) => {
                console.error("Error loading images:", error);
                // Still show the gallery even if some images fail
                setIsLoaded(true);
            });
    }, [artworks]);

    return (
        <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-8 sm:px-12 lg:px-16 py-16 border-t border-border">
            <BlurFade delay={blurFadeDelay * 3}>
                <div className="text-center mb-16">
                    <h2 className="font-medium text-2xl mb-3 tracking-tighter">
                        My Visual Studio
                    </h2>
                    {!isLoaded ? (
                        <p className="text-muted-foreground text-sm">
                            loading...please wait a moment
                        </p>
                    ) : (
                        <p className="text-muted-foreground text-sm">
                            I create my art under the pseudonym J.
                        </p>
                    )}
                </div>
            </BlurFade>

            <BlurFade delay={blurFadeDelay * 4}>
                <div className="max-w-[1400px] mx-auto">
                    {isLoaded ? (
                        <ArtGallery artworks={artworks} />
                    ) : (
                        <div className="flex items-center justify-center min-h-[400px]">
                            <div className="text-center">
                                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                                <p className="text-muted-foreground text-sm">
                                    Loading {loadedCount} of {artworks.length} artworks...
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </BlurFade>
        </section>
    );
}
