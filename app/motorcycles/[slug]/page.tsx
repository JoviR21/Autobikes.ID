import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { TypeProductCardSkeleton } from "@/src/contentful/types";
import Image from "next/image";

async function getCollection(slug: string) {
    try {
        const client = createClient({
            space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        });
        const response = await client.getEntries<TypeProductCardSkeleton>({
            content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_PRODUCT!,
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
    const featuredImage = collection?.featuredImage as {fields: {file: {url: string}}};
    const desc = collection?.desc as string;
    const specEngine = collection?.specEngine;
    const specChassisAndSuspension = collection?.specChassisAndSuspension;
    const specDimensionAndWeight = collection?.specDimensionAndWeight;
    const specCapacity = collection?.specCapacity;
    const specElectrical = collection?.specElectrical;

    const option = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => {
                return <p className="mb-6">{children}</p>;
            },
        }
    }

    return (
        <main className="bg-secondary">
            {/* Banner */}
            <section className="banner carousel w-full h-40 lg:h-96 px-5 lg:px-36 mt-10 border-none">
                <div id="item1" className="carousel-item w-full relative">
                    <Image
                        src={`https:${featuredImage.fields.file.url}`}
                        width={1200}
                        height={470}
                        alt="Product"
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                    />
                </div>
            </section>
            {/* Banner */}

            {/* Desc */}
            <div className="paragraph w-full h-full pt-10 px-5 bg-secondary">
                <div className="hero-content text-justify me-0 md:me-auto mx-auto">
                    <div className="font-montserrat font-medium">
                        <p className="text-base mb-8">
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
            {/* Desc */}

            {/* Spec */}
            <section className="faq w-full h-full pb-10">
                <div className="faq-body px-5">
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-cousine font-bold border-b-4 border-third rounded-none hover:border-white">Engine</div>
                        <div className="collapse-content pt-3 font-montserrat">
                            <div className="list-disc">
                                {documentToReactComponents(specEngine!, option)}
                            </div>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-cousine font-bold border-b-4 border-third rounded-none hover:border-white">Chassis & Suspension</div>
                        <div className="collapse-content pt-3 font-montserrat">
                        <div className="list-disc">
                                {documentToReactComponents(specChassisAndSuspension!, option)}
                            </div>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-cousine font-bold border-b-4 border-third rounded-none hover:border-white">Dimension & Weight</div>
                        <div className="collapse-content pt-3 font-montserrat">
                        <div className="list-disc">
                                {documentToReactComponents(specDimensionAndWeight!, option)}
                            </div>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-cousine font-bold border-b-4 border-third rounded-none hover:border-white">Capacity</div>
                        <div className="collapse-content pt-3 font-montserrat">
                            <div className="list-disc">
                                {documentToReactComponents(specCapacity!, option)}
                            </div>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse max-w-7xl mx-auto mb-3">
                        <div className="collapse-title text-xl font-cousine font-bold border-b-4 border-third rounded-none hover:border-white">Electrical</div>
                        <div className="collapse-content pt-3 font-montserrat">
                            <div className="list-disc">
                                {documentToReactComponents(specElectrical!, option)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Spec */}
        </main>
    );
}
