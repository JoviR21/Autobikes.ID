import { createClient } from "contentful";
import Image from "next/image";

async function getCollection(slug: string) {
    try {
        const client = createClient({
            space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        });
        const response = await client.getEntries({
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
        title: collection?.title,
        description: `${collection?.shortDesc}`,
    };
}

export default async function CollectionsSlug({
    params,
}: {
    params: { slug: string };
}) {
    const collection = await getCollection(params.slug);

    return (
        <main>
            {/* Head / Name article */}
            <section className="head w-full h-full pt-10 bg-primary">
                <div className="hero-content text-center me-0 md:me-auto mx-auto">
                    <div className="font-cousine max-w-2xl">
                        <p className="text-sm md:text-xl py-2">
                            A deep dive into supermoto and trail bikes to help you choose the right one for your riding style.
                        </p>
                        <div className="border-b-4 border-third w-40 mx-auto"></div>
                        <h1 className="text-xl md:text-3xl font-bold mt-5">Supermoto vs Trail Bikes: A comparative Guides</h1>
                    </div>
                </div>
            </section>
            {/* Head / Name article */}

            {/* Banner */}
            <section className="banner carousel w-full h-full border-none">
                <div id="item1" className="carousel-item w-full relative">
                    <Image
                        src={`https:${collection.item.fields.imageSection.fields.file.url}`}
                        width={2880}
                        height={1100}
                        alt="Supermoto vs Trail Bikes: A comparative Guides"
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                    />
                </div>
            </section>
            {/* Banner */}

            {/* Paragraph */}
            <div className="paragraph w-full h-full py-10 px-5 bg-secondary">
                <div className="hero-content text-justify me-0 md:me-auto mx-auto">
                    <div className="font-cousine">
                        <p className="text-base mb-8">
                            For motorcycle enthusiasts, choosing between a supermoto and a trail bike often becomes a dilemma. Both offer unique riding sensations and varying off-road capabilities. Supermotos, with their sporty design and a blend of street tires and off-road components, provide an agile riding experience on both roads and light trails. On the other hand, trail bikes, with their long-travel suspension, knobby tires, and upright riding position, are specifically designed to conquer more extreme off-road terrains.
                        </p>
                        <p className="text-base mb-8">
                            In terms of design, supermotos have a more aggressive look with wide handlebars and a slightly forward riding position. These bikes are equipped with stiffer suspension compared to trail bikes, yet they remain comfortable enough for everyday use. Trail bikes, conversely, have a more rugged design with high handlebars and an upright riding position. Features like engine guards and handguards are standard on trail bikes to protect the bike from impacts when traversing challenging terrain.
                        </p>
                        <p className="text-base mb-8">
                            Engine performance varies between supermotos and trail bikes. Supermotos typically use medium to large-capacity engines with substantial power for quick acceleration. Meanwhile, trail bikes often use smaller-capacity engines with abundant torque for tackling off-road terrain. Transmissions on supermotos are usually 6-speed, while trail bikes can have 5 or 6 speeds, depending on the model.
                        </p>
                        <p className="text-base mb-8">
                            For everyday use, supermotos are more comfortable to ride on paved roads. The sporty riding position and agile handling make supermotos enjoyable to maneuver in traffic. Trail bikes, although usable on the road, are less comfortable for long-distance journeys due to the upright riding position and increased vibration.
                        </p>
                        <p className="text-base mb-2">
                            The choice between a supermoto and a trail bike depends on individual preferences and needs. If you're looking for a versatile bike for both road and light trail use, a supermoto could be the right choice. However, if you desire a rugged bike for exploring extreme off-road terrain, a trail bike is the better option. It's advisable to test ride both types of bikes before making a purchase.
                        </p>
                    </div>
                </div>
            </div>
            {/* Paragraph */}
        </main>
    );
}

