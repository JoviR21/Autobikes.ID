"use client"

import { useState, useEffect, ReactNode } from "react";
import { createClient, Entry } from "contentful";
import Image from "next/image";
import Link from "next/link";
import { TypeProductCardSkeleton } from "@/src/contentful/types";

import BtnProduct from "@/components/BtnProduct";

export default function Motorcycles() {

    const [collection, setCollection] = useState<
        Entry<TypeProductCardSkeleton>[]
    >([])

    useEffect(() => {
        async function getData() {
            try {
                const client = createClient({
                    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
                    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
                });
                const response = await client.getEntries<TypeProductCardSkeleton>({
                    content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_PRODUCT || "",
                });

                setCollection(response.items)

            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [])

    return (
        <main>
            {/* Hero */}
            <section className="hero h-72 bg-primary">
                <div className="hero-content text-center me-0 md:text-start md:me-auto md:mx-14">
                    <div className="max-w-lg font-cousine">
                        <h1 className="text-4xl md:text-5xl font-bold">Motorcycles</h1>
                        <p className="text-2xl md:text-3xl py-2">
                            Get your dream <span className="text-third">motorcycles</span>
                        </p>
                    </div>
                </div>
            </section>
            {/* Hero */}

            {/* Filter */}
            <section className="filter w-full h-full py-2 md:py-7 bg-secondary">
                <ul className="text-center md:flex gap-14 justify-center font-overpass font-bold hidden">
                    <li className="hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">All</a></li>
                    <li className="hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">Adventure</a></li>
                    <li className="hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">Custom</a></li>
                    <li className="hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">Trails</a></li>
                    <li className="hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">Sport</a></li>
                    <li className="hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">Touring</a></li>
                    <li className="hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">Naked</a></li>
                </ul>
                <div className="collapse md:hidden collapse-arrow">
                    <input type="checkbox" />
                    <div className="collapse-title text-2xl sm:text-3xl font-cousine font-medium">Category: </div>
                    <ul className="collapse-content list-none font-overpass text-xl sm:text-2xl">
                        <li className="mb-3 hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">All</a></li>
                        <li className="mb-3 hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">Adventure</a></li>
                        <li className="mb-3 hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">Custom</a></li>
                        <li className="mb-3 hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">Trails</a></li>
                        <li className="mb-3 hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">Sport</a></li>
                        <li className="mb-3 hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">Touring</a></li>
                        <li className="hover:text-third hover:underline hover:underline-offset-2 transition-all ease-in"><a href="#">Naked</a></li>
                    </ul>
                </div>
            </section>
            {/* Filter */}

            {/* Product */}
            <article className="product w-full h-full py-10">
                <div className="head flex content-center mx-3 md:mx-0 mb-2">
                    <h1 className='text-xl md:text-3xl text-center md:text-start font-cousine font-bold ms-0 md:ms-5'><span className='text-third'>All Models</span> Motorcycles</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-3 gap-5 place-items-center">
                    {collection.map(item => {
                        const thumbnail = item.fields.thumbnail as {
                            fields: {
                                file: {
                                    url: string;
                                    details: { image: { width: number; height: number } };
                                };
                            };
                        };

                        return <div className="card bg-base-100 w-72 sm:w-80 h-full shadow-xl" key={item.sys.id}>
                            <figure>
                                <Image
                                    src={`https:${thumbnail.fields.file.url}`}
                                    width={270}
                                    height={170}
                                    alt={item.fields.nameProduct as string}
                                    className='w-full h-full'
                                    loading='lazy' />
                            </figure>
                            <div className="card-body">
                                <Link className="flex h-full flex-col" href={`/motorcycles/${item.fields.slug}`} >
                                    <div>
                                        <div className="card-title flex">
                                            <h2 className="text-start font-cousine hover:text-third">{item.fields.nameProduct as ReactNode}</h2>
                                            <h2 className="ms-auto badge badge-outline text-third font-cousine">{item.fields.tags as ReactNode}</h2>
                                        </div>
                                        <div className="mb-5 font-montserrat font-medium">
                                            <p>{item.fields.shortDesc as ReactNode}</p>
                                        </div>
                                    </div>
                                    <div className="card-actions justify-start mt-auto">
                                        <BtnProduct />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    })}
                </div>
            </article>
            {/* Product */}
        </main>
    )
}