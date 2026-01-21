export interface ArtItem {
    id: string;
    img: string;
    url: string;
    height: number;
    title?: string;
    description?: string;
}

// Your amazing artwork collection!
export const artworks: ArtItem[] = [
    {
        id: "snake-girl",
        img: "/art/snake_girl.jpg",
        url: "/art/snake_girl.jpg",
        height: 1000,
        title: "Snake Girl",
        description: "Mystical character art with intricate details",
    },
    {
        id: "knight-full",
        img: "/art/knight_full.jpg",
        url: "/art/knight_full.jpg",
        height: 950,
        title: "Knight",
        description: "Epic fantasy knight in full armor",
    },
    {
        id: "color-rain",
        img: "/art/color_rain.jpg",
        url: "/art/color_rain.jpg",
        height: 900,
        title: "Color Rain",
        description: "Vibrant abstract composition with flowing colors",
    },
    {
        id: "knight-half",
        img: "/art/knight_half.jpg",
        url: "/art/knight_half.jpg",
        height: 850,
        title: "Knight Portrait",
        description: "Detailed knight character portrait",
    },
    {
        id: "deer",
        img: "/art/deer.jpg",
        url: "/art/deer.jpg",
        height: 800,
        title: "Deer",
        description: "Serene wildlife portrait",
    },
    {
        id: "jungle",
        img: "/art/jungle.jpg",
        url: "/art/jungle.jpg",
        height: 750,
        title: "Jungle",
        description: "Lush tropical landscape",
    },
    {
        id: "flower-vase",
        img: "/art/flower_vase.jpg",
        url: "/art/flower_vase.jpg",
        height: 700,
        title: "Flower Vase",
        description: "Beautiful still life composition",
    },
    {
        id: "flower-boy",
        img: "/art/flower_boy.jpg",
        url: "/art/flower_boy.jpg",
        height: 850,
        title: "Flower Boy",
        description: "Artistic character portrait with floral elements",
    },
    {
        id: "goat",
        img: "/art/goat.jpg",
        url: "/art/goat.jpg",
        height: 750,
        title: "Goat",
        description: "Expressive animal portrait",
    },
    {
        id: "arthur",
        img: "/art/arthur.webp",
        url: "/art/arthur.webp",
        height: 800,
        title: "Arthur",
        description: "Character illustration",
    },
    {
        id: "gyomei",
        img: "/art/gyomei.webp",
        url: "/art/gyomei.webp",
        height: 900,
        title: "Gyomei",
        description: "Powerful character art",
    },
    {
        id: "rain",
        img: "/art/rain.jpg",
        url: "/art/rain.jpg",
        height: 650,
        title: "Rain",
        description: "Atmospheric scene with rainfall",
    },
];

// Helper function to get all artworks
export function getArtworks(): ArtItem[] {
    return artworks;
}
