"use client"

import { FaArrowRightLong } from "react-icons/fa6";

import Image from "next/image"

export default function Apparels() {

    return (
        <main>
            {/* Hero */}
            <section className="hero h-72 bg-primary">
                <div className="hero-content text-center me-0 md:text-start md:me-auto md:mx-14">
                    <div className="max-w-lg font-cousine">
                        <h1 className="text-4xl md:text-5xl font-bold">Apparels</h1>
                        <p className="text-2xl md:text-3xl py-2">
                            Get your <span className="text-third">Gears</span> for <span className="text-third">Riding</span>.
                        </p>
                    </div>
                </div>
            </section>
            {/* Hero */}

            {/* Product */}
            <article className="product w-screen h-full py-10 bg-secondary">
                <div className="helmet mb-10">
                    <h1 className='text-2xl md:text-3xl text-start font-cousine font-bold ms-14 mb-3'><span className='text-third'>Helm</span></h1>
                    <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 p-4 mx-14">
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Helmet1.png"
                                        width={270}
                                        height={170}
                                        alt="LS-2 Valiant"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">LS-2 Valiant</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Helmet</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>KPA, a proprietary polymer alloy,
                                            Approximately 1620 grams</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Helmet1.png"
                                        width={270}
                                        height={170}
                                        alt="LS-2 Valiant"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">LS-2 Valiant</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Helmet</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>KPA, a proprietary polymer alloy,
                                            Approximately 1620 grams</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Helmet1.png"
                                        width={270}
                                        height={170}
                                        alt="LS-2 Valiant"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">LS-2 Valiant</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Helmet</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>KPA, a proprietary polymer alloy,
                                            Approximately 1620 grams</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Helmet1.png"
                                        width={270}
                                        height={170}
                                        alt="LS-2 Valiant"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">LS-2 Valiant</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Helmet</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>KPA, a proprietary polymer alloy,
                                            Approximately 1620 grams</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Helmet1.png"
                                        width={270}
                                        height={170}
                                        alt="LS-2 Valiant"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">LS-2 Valiant</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Helmet</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>KPA, a proprietary polymer alloy,
                                            Approximately 1620 grams</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="jacket mb-10">
                    <h1 className='text-2xl md:text-3xl text-start font-cousine font-bold ms-14 mb-3'><span className='text-third'>Jacket</span></h1>
                    <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 p-4 mx-14">
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Jacket.png"
                                        width={270}
                                        height={170}
                                        alt="Deus Ex-Machina"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">Deus Ex-Machina</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Jacket</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>Leather Jacket</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Jacket.png"
                                        width={270}
                                        height={170}
                                        alt="Deus Ex-Machina"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">Deus Ex-Machina</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Jacket</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>Leather Jacket</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Jacket.png"
                                        width={270}
                                        height={170}
                                        alt="Deus Ex-Machina"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">Deus Ex-Machina</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Jacket</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>Leather Jacket</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Jacket.png"
                                        width={270}
                                        height={170}
                                        alt="Deus Ex-Machina"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">Deus Ex-Machina</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Jacket</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>Leather Jacket</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Jacket.png"
                                        width={270}
                                        height={170}
                                        alt="Deus Ex-Machina"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">Deus Ex-Machina</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Jacket</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>Leather Jacket</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="other mb-10">
                    <h1 className='text-2xl md:text-3xl text-start font-cousine font-bold ms-14 mb-3'><span className='text-third'>Other's</span></h1>
                    <div className="carousel carousel-center bg-neutral rounded-box max-w-full space-x-4 p-4 mx-14">
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Shoes.png"
                                        width={270}
                                        height={170}
                                        alt="Biker Shoes"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">Biker Shoes</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Shoes</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>Leather Shoes</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Shoes.png"
                                        width={270}
                                        height={170}
                                        alt="Biker Shoes"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">Biker Shoes</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Shoes</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>Leather Shoes</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Shoes.png"
                                        width={270}
                                        height={170}
                                        alt="Biker Shoes"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">Biker Shoes</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Shoes</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>Leather Shoes</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Shoes.png"
                                        width={270}
                                        height={170}
                                        alt="Biker Shoes"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">Biker Shoes</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Shoes</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>Leather Shoes</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="card h-full bg-base-100 w-72 sm:w-80 shadow-xl">
                                <figure>
                                    <Image
                                        src="/Shoes.png"
                                        width={270}
                                        height={170}
                                        alt="Biker Shoes"
                                        className='w-full h-full'
                                        loading='lazy' />
                                </figure>
                                <div className="card-body">
                                    <div className="card-title flex">
                                        <h2 className="text-start font-cousine hover:text-third transition delay-100 cursor-pointer">Biker Shoes</h2>
                                        <h2 className="ms-auto badge badge-outline text-accent font-cousine">Shoes</h2>
                                    </div>
                                    <div className="mb-auto font-montserrat font-medium">
                                        <p>Leather Shoes</p>
                                    </div>
                                    <div className="card-actions justify-start">
                                        <button className="btn btn-sm btn-outline font-overpass font-medium hover:translate-x-2 transition-all delay-150">See Details <FaArrowRightLong /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </article>
            {/* Product */}
        </main>
    )
}