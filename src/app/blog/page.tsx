import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { getArtworks } from "@/data/art";
import ArtGallery from "@/components/art-gallery";
import Link from "next/link";

export const metadata = {
  title: "Blog & Art",
  description: "My thoughts on software development, life, and my artistic creations.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const artworks = getArtworks();

  return (
    <>
      {/* Blog Section - Normal Width */}
      <section className="space-y-8 mb-16">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
        </BlurFade>
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-col">
                  <p className="tracking-tight">{post.metadata.title}</p>
                  <p className="h-6 text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))}
      </section>

      {/* Art Gallery Section - Full Viewport Width */}
      <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-8 sm:px-12 lg:px-16 py-16 border-t border-border">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="text-center mb-16">
            <h2 className="font-medium text-2xl mb-3 tracking-tighter">
              My Visual Studio
            </h2>
            <p className="text-muted-foreground text-sm">
              I create my art under the pseudonym J.
              (it will load in a moment)
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="max-w-[1400px] mx-auto">
            <ArtGallery artworks={artworks} />
          </div>
        </BlurFade>
      </section>
    </>
  );
}

