"use client"

import { useEffect, useState } from "react";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link"
import { TypeArticleCardSkeleton } from "@/src/contentful/types";

import BtnAtc from "@/components/BtnAtc";

export default function Articles() {
    const [collection, setCollection] = useState([])

    useEffect(() => {
        async function getData() {
            try {
                const client = createClient({
                    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
                    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
                });
                const response = await client.getEntries<TypeArticleCardSkeleton>({
                    content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_ARTICLE || "",
                });

                setCollection(response.items)
            
            } catch (error) {
                console.log(error)    
            }
        }

        getData()
    }, [])

    
    console.log(collection)

    return (
        <main>
            {/* Hero */}
            <section className="hero h-72 bg-primary">
                <div className="hero-content text-center me-0 md:text-start md:me-auto md:mx-14">
                    <div className="max-w-lg font-cousine">
                        <h1 className="text-4xl md:text-5xl font-bold">Articles</h1>
                        <p className="text-2xl md:text-3xl py-2">
                            <span className="text-third">All articles</span> about <span className="text-third font-quicksand">Autobikes.ID</span> and <span className="text-third">Motorcycles</span>.
                        </p>
                    </div>
                </div>
            </section>
            {/* Hero */}

            {/* Articles */}
            <section className="articles w-full h-full py-10 bg-secondary">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
                    {collection.map(item => {
                        const thumbnail = item.fields.thumbnail as {
                            fields: {
                                file: {
                                    url: string;
                                    details: { image: { width: number; height: number } };
                                };
                            };
                        };

                        return <div className="card image-full w-72 md:w-96 shadow-xl" key={item.sys.id}>
                            <figure>
                                <Image
                                    src={`https:${item.fields.thumbnail.fields.file.url}`}
                                    width={360}
                                    height={280}
                                    alt={item.fields.nameProduct}
                                    className="w-full h-full"
                                    loading="lazy" />
                            </figure>
                            <div className="card-body mt-auto">
                                <Link href={`/articles/${item.fields.slug}`}>
                                    <p className="card-title font-cousine font-bold hover:text-third hover:translate-x-2 transition-all ease-in-out">{item.fields.nameProduct}</p>
                                    <div className="card-actions justify-start">
                                        <BtnAtc />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    })}
                </div>
            </section>
            {/* Articles */}
        </main>
    )
}

