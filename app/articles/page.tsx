"use client"

import styled from "styled-components";
import Image from "next/image";

import BtnAtc from "@/components/BtnAtc";

export default function Articles() {

    const HeadAtc = styled.h2`
        cursor: pointer;
        transition:  all 0.3s;
        &:hover {
            color: #F05454;
        }
    `

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
                            <HeadAtc className="card-title font-cousine font-bold">Supermoto vs Trail Bikes: A Comparative Guide.</HeadAtc>
                            <div className="card-actions justify-start">
                                <BtnAtc />
                            </div>
                        </div>
                    </div>
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
                            <HeadAtc className="card-title font-cousine font-bold">Supermoto vs Trail Bikes: A Comparative Guide.</HeadAtc>
                            <div className="card-actions justify-start">
                                <BtnAtc />
                            </div>
                        </div>
                    </div>
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
                            <HeadAtc className="card-title font-cousine font-bold">Supermoto vs Trail Bikes: A Comparative Guide.</HeadAtc>
                            <div className="card-actions justify-start">
                                <BtnAtc />
                            </div>
                        </div>
                    </div>
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
                            <HeadAtc className="card-title font-cousine font-bold">Supermoto vs Trail Bikes: A Comparative Guide.</HeadAtc>
                            <div className="card-actions justify-start">
                                <BtnAtc />
                            </div>
                        </div>
                    </div>
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
                            <HeadAtc className="card-title font-cousine font-bold">Supermoto vs Trail Bikes: A Comparative Guide.</HeadAtc>
                            <div className="card-actions justify-start">
                                <BtnAtc />
                            </div>
                        </div>
                    </div>
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
                            <HeadAtc className="card-title font-cousine font-bold">Supermoto vs Trail Bikes: A Comparative Guide.</HeadAtc>
                            <div className="card-actions justify-start">
                                <BtnAtc />
                            </div>
                        </div>
                    </div>
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
                            <HeadAtc className="card-title font-cousine font-bold">Supermoto vs Trail Bikes: A Comparative Guide.</HeadAtc>
                            <div className="card-actions justify-start">
                                <BtnAtc />
                            </div>
                        </div>
                    </div>
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
                            <HeadAtc className="card-title font-cousine font-bold">Supermoto vs Trail Bikes: A Comparative Guide.</HeadAtc>
                            <div className="card-actions justify-start">
                                <BtnAtc />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Articles */}
        </main>
    )
}