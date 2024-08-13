import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { TypeArticleCardSkeleton } from "@/src/contentful/types";
import Image from "next/image";

async function getCollection(slug: string) {
    try {
        const client = createClient({
            space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        });
        const response = await client.getEntries<TypeArticleCardSkeleton>({
            content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_ARTICLE!,
            "fields.slug": slug,
        });

        return response.items[0].fields;
    } catch (error) {
        console.log(error);
    }
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const collection = await getCollection(params.slug);

    return {
        title: collection?.nameProduct,
        description: `${collection?.shortDesc}`,
    };
}

export default async function CollectionsSlug({
    params,
}: {
    params: { slug: string };
}) {
    const collection = await getCollection(params.slug);
    const imageSection = collection?.imageSection as object;
    const shortDesc = collection?.shortDesc as string;
    const nameProduct = collection?.nameProduct as string;
    const paragraph = collection?.paragraph as string;

    const option = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => {
                return <p className="mb-6">{children}</p>;
            },
        }
    }

    return (
        <main>
            {/* Head / Name article */}
            <section className="head w-full h-full pt-10 bg-primary">
                <div className="hero-content text-center me-0 md:me-auto mx-auto">
                    <div className="font-cousine max-w-2xl">
                        <p className="text-sm md:text-xl py-2">
                            {shortDesc}
                        </p>
                        <div className="border-b-4 border-third w-40 mx-auto"></div>
                        <h1 className="text-xl md:text-3xl font-bold mt-5">{nameProduct}</h1>
                    </div>
                </div>
            </section>
            {/* Head / Name article */}

            {/* Banner */}
            <section className="banner carousel w-full h-full border-none">
                <div id="item1" className="carousel-item w-full relative">
                    <Image
                        src={`https:${imageSection.fields.file.url}`}
                        width={2880}
                        height={1100}
                        alt="Autobikes Assets"
                        className="w-full h-96 object-cover rounded-lg"
                        loading="lazy"
                    />
                </div>
            </section>
            {/* Banner */}

            {/* Paragraph */}
            <div className="paragraph w-full h-full py-10 px-5 bg-secondary">
                <div className="hero-content text-justify me-0 md:me-auto mx-auto">
                    <div className="font-cousine">
                        <p className="text-base mb-8">{documentToReactComponents(paragraph, option)}</p>
                    </div>
                </div>
            </div>
            {/* Paragraph */}
        </main>
    );
}

