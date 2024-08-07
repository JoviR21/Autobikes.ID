"use client"

import styled from "styled-components";
import Image from "next/image";

import BtnProduct from "@/components/BtnProduct";

export default function Motorcycles() {

    const CategoryFilter = styled.li`
        &:hover {
            text-decoration: underline;
            color: #F05454;
        }
    `

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
                    <CategoryFilter><a href="#">All</a></CategoryFilter>
                    <CategoryFilter><a href="#">Adventure</a></CategoryFilter>
                    <CategoryFilter><a href="#">Custom</a></CategoryFilter>
                    <CategoryFilter><a href="#">Trails</a></CategoryFilter>
                    <CategoryFilter><a href="#">Sport</a></CategoryFilter>
                    <CategoryFilter><a href="#">Touring</a></CategoryFilter>
                    <CategoryFilter><a href="#">Naked</a></CategoryFilter>
                </ul>
                <div className="collapse md:hidden collapse-arrow">
                    <input type="checkbox" />
                    <div className="collapse-title text-2xl sm:text-3xl font-cousine font-medium">Category: </div>
                    <div className="collapse-content list-none font-overpass text-xl sm:text-2xl">
                        <CategoryFilter className="mb-3"><a href="#">All</a></CategoryFilter>
                        <CategoryFilter className="mb-3"><a href="#">Adventure</a></CategoryFilter>
                        <CategoryFilter className="mb-3"><a href="#">Custom</a></CategoryFilter>
                        <CategoryFilter className="mb-3"><a href="#">Trails</a></CategoryFilter>
                        <CategoryFilter className="mb-3"><a href="#">Sport</a></CategoryFilter>
                        <CategoryFilter className="mb-3"><a href="#">Touring</a></CategoryFilter>
                        <CategoryFilter><a href="#">Naked</a></CategoryFilter>
                    </div>
                </div>
            </section>
            {/* Filter */}

            {/* Product */}
            <article className="product w-full h-full py-10">
                <div className="head flex content-center mx-3 md:mx-0 mb-2">
                    <h1 className='text-xl md:text-3xl text-center md:text-start font-cousine font-bold ms-0 md:ms-5'><span className='text-third'>All Models</span> Motorcycles</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-3 gap-5 place-items-center">
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
                    </div>
                </div>
            </article>
            {/* Product */}
        </main>
    )
}