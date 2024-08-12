"use client"

import { useState, useEffect } from "react";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";

import BtnProduct from "@/components/BtnProduct";
import BtnAtc from "@/components/BtnAtc";

export default function Motorcycles() {

    const [collection, setCollection] = useState([])

    useEffect(() => {
        async function getData() {
            try {
                const client = createClient({
                    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
                    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
                });
                const response = await client.getEntries({
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

                        return <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl" key={item.sys.id}>
                            <figure>
                                <Image
                                    src="/Other-Products.png"
                                    width={270}
                                    height={170}
                                    alt="Featured Product"
                                    className='w-full h-full'
                                    loading='lazy' />
                            </figure>
                            <div className="card-body">
                                <div className="card-title flex">
                                    <h2 className="text-start font-cousine">Yamaha FZ09</h2>
                                    <h2 className="ms-auto badge badge-outline text-third font-cousine">Naked</h2>
                                </div>
                                <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                    <ul>
                                        <li>Engine: in-line four</li>
                                        <li>Power/Torque: 93.9HP / 63.0NM</li>
                                        <li>Year: 2021</li>
                                    </ul>
                                </div>
                                <div className="card-actions justify-start">
                                    <BtnProduct />
                                </div>
                            </div>
                        </div>
                    })}



                    {/* <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Other-Products.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">Yamaha FZ09</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Naked</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Other-Products.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">Yamaha FZ09</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Naked</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Other-Products.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">Yamaha FZ09</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Naked</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Featured-Product.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">CBR650R</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Sport</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Featured-Product.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">CBR650R</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Sport</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Featured-Product.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">CBR650R</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Sport</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Featured-Product.png"
                                width={270}
                                height={170}
                                alt="Featured Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">CBR650R</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Sport</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Other-Product.png"
                                width={270}
                                height={170}
                                alt="Other Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">HD Pan America</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Touring</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Other-Product.png"
                                width={270}
                                height={170}
                                alt="Other Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">HD Pan America</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Touring</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Other-Product.png"
                                width={270}
                                height={170}
                                alt="Other Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">HD Pan America</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Touring</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Other-Product.png"
                                width={270}
                                height={170}
                                alt="Other Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">HD Pan America</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Touring</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Other-Product.png"
                                width={270}
                                height={170}
                                alt="Other Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">HD Pan America</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Touring</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Other-Product.png"
                                width={270}
                                height={170}
                                alt="Other Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">HD Pan America</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Touring</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Other-Product.png"
                                width={270}
                                height={170}
                                alt="Other Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">HD Pan America</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Touring</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-72 sm:w-80 h-100 shadow-xl">
                        <figure>
                            <Image
                                src="/Other-Product.png"
                                width={270}
                                height={170}
                                alt="Other Product"
                                className='w-full h-full'
                                loading='lazy' />
                        </figure>
                        <div className="card-body">
                            <div className="card-title flex">
                                <h2 className="text-start font-cousine">HD Pan America</h2>
                                <h2 className="ms-auto badge badge-outline text-third font-cousine">Touring</h2>
                            </div>
                            <div className="mb-5 font-montserrat font-medium"><p>Short Spec: </p>
                                <ul>
                                    <li>Engine: in-line four</li>
                                    <li>Power/Torque: 93.9HP / 63.0NM</li>
                                    <li>Year: 2021</li>
                                </ul>
                            </div>
                            <div className="card-actions justify-start">
                                <BtnProduct />
                            </div>
                        </div>
                    </div> */}
                </div>
            </article>
            {/* Product */}

            {/* Featured Article */}
            <article className="featured-articles w-full h-full py-10">
                <div className="head flex content-center mx-3 md:mx-0 mb-2">
                    <h1 className='text-xl md:text-3xl text-center md:text-start font-cousine font-bold ms-0 md:ms-5'><span className='text-third'>Featured</span> Articles</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-3 gap-5 place-items-center">
                    <div className="card image-full w-72 md:w-96 shadow-xl">
                        <figure>
                            <Image
                                src="/Featured-Articles.png"
                                width={360}
                                height={280}
                                alt="Featured Articles"
                                className="w-full h-full"
                                loading="lazy" />
                        </figure>
                        <div className="card-body mt-auto">
                            <p className="card-title font-cousine font-bold hover:text-third hover:translate-x-2 transition-all ease-in-out">Supermoto vs Trail Bikes: A Comparative Guide.</p>
                            <div className="card-actions justify-start">
                                <BtnAtc />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            {/* Featured Article */}
        </main>
    )
}